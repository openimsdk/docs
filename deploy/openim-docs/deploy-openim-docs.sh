#!/usr/bin/env bash

set -Eeuo pipefail

readonly state_dir='/var/lib/openim-docs'
readonly state_file="${state_dir}/current-slot"
readonly lock_file='/run/lock/openim-docs-deploy.lock'
readonly active_proxy='/etc/nginx/snippets/openim-docs-active.conf'
readonly blue_proxy='/etc/nginx/snippets/openim-docs-blue.conf'
readonly green_proxy='/etc/nginx/snippets/openim-docs-green.conf'

fail() {
  printf 'openim-docs deploy: %s\n' "$*" >&2
  exit 1
}

request=${1:-}
if [[ ! "$request" =~ ^deploy\ (ghcr\.io/openimsdk/docs@sha256:[0-9a-f]{64})\ ([A-Za-z0-9_.-]{1,64})$ ]]; then
  fail 'invalid deployment request'
fi

image=${BASH_REMATCH[1]}
registry_user=${BASH_REMATCH[2]}
registry_token=''
IFS= read -r registry_token || true
[[ -n "$registry_token" ]] || fail 'missing registry token'

install -d -m 0755 "$state_dir"
exec 9>"$lock_file"
flock -n 9 || fail 'another deployment is already running'

docker_config=$(mktemp -d /tmp/openim-docs-docker.XXXXXX)
cleanup() {
  registry_token=''
  rm -rf -- "$docker_config"
}
trap cleanup EXIT

export DOCKER_CONFIG="$docker_config"
printf '%s' "$registry_token" | docker login ghcr.io --username "$registry_user" --password-stdin >/dev/null
registry_token=''
docker pull "$image"
docker logout ghcr.io >/dev/null 2>&1 || true

current_slot=$(cat "$state_file" 2>/dev/null || true)
case "$current_slot" in
  blue)
    next_slot='green'
    next_port='3102'
    next_proxy=$green_proxy
    previous_slot='blue'
    ;;
  *)
    next_slot='blue'
    next_port='3101'
    next_proxy=$blue_proxy
    previous_slot='green'
    ;;
esac

next_container="openim-docs-${next_slot}"
previous_container="openim-docs-${previous_slot}"

docker rm --force "$next_container" >/dev/null 2>&1 || true
docker run --detach \
  --name "$next_container" \
  --restart unless-stopped \
  --publish "127.0.0.1:${next_port}:3000" \
  --env HOSTNAME=0.0.0.0 \
  --env PORT=3000 \
  --env APP_REVISION="${image##*@}" \
  --memory 1g \
  --cpus 1.5 \
  --pids-limit 256 \
  --log-opt max-size=20m \
  --log-opt max-file=3 \
  --label io.openim.docs.deployment=true \
  --label io.openim.docs.image="$image" \
  "$image" >/dev/null

healthy=false
for _ in $(seq 1 60); do
  health=$(docker inspect --format '{{if .State.Health}}{{.State.Health.Status}}{{else}}{{.State.Status}}{{end}}' "$next_container" 2>/dev/null || true)
  if [[ "$health" == 'healthy' ]]; then
    healthy=true
    break
  fi
  if [[ "$health" == 'exited' || "$health" == 'dead' ]]; then
    break
  fi
  sleep 2
done

if [[ "$healthy" != 'true' ]]; then
  docker logs --tail 100 "$next_container" >&2 || true
  docker rm --force "$next_container" >/dev/null 2>&1 || true
  fail "${next_container} did not become healthy"
fi

curl --fail --silent --show-error "http://127.0.0.1:${next_port}/api/health" >/dev/null
curl --fail --silent --show-error "http://127.0.0.1:${next_port}/zh" >/dev/null
curl --fail --silent --show-error "http://127.0.0.1:${next_port}/api/search?q=OpenIM&locale=zh" >/dev/null

previous_proxy=$(readlink -f "$active_proxy" 2>/dev/null || true)
ln -sfn "$next_proxy" "${active_proxy}.next"
mv -Tf "${active_proxy}.next" "$active_proxy"

if ! nginx -t; then
  if [[ -n "$previous_proxy" ]]; then
    ln -sfn "$previous_proxy" "${active_proxy}.rollback"
    mv -Tf "${active_proxy}.rollback" "$active_proxy"
  fi
  docker rm --force "$next_container" >/dev/null 2>&1 || true
  fail 'nginx configuration validation failed'
fi

if ! systemctl reload nginx; then
  if [[ -n "$previous_proxy" ]]; then
    ln -sfn "$previous_proxy" "${active_proxy}.rollback"
    mv -Tf "${active_proxy}.rollback" "$active_proxy"
    nginx -t && systemctl reload nginx || true
  fi
  docker rm --force "$next_container" >/dev/null 2>&1 || true
  fail 'nginx reload failed'
fi
printf '%s\n' "$next_slot" >"${state_file}.next"
mv -f "${state_file}.next" "$state_file"

if docker container inspect "$previous_container" >/dev/null 2>&1; then
  sleep 15
  docker stop --time 30 "$previous_container" >/dev/null || true
  docker rm "$previous_container" >/dev/null 2>&1 || true
fi

printf 'deployed %s on %s (%s)\n' "$image" "$next_container" "$next_port"

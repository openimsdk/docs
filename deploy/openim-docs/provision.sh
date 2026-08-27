#!/usr/bin/env bash

set -Eeuo pipefail

if [[ $EUID -ne 0 ]]; then
  printf 'provision must run as root\n' >&2
  exit 1
fi

source_dir=${1:?deployment source directory is required}
authorized_keys_file=${2:?restricted authorized_keys file is required}
deploy_user='openim-docs-deploy'

for required_file in \
  deploy-openim-docs.sh \
  nginx-blue.conf \
  nginx-green.conf \
  nginx-http.conf \
  openim-docs-deploy-entry \
  openim-docs-deploy.sudoers; do
  [[ -f "${source_dir}/${required_file}" ]] || {
    printf 'missing provisioning file: %s\n' "$required_file" >&2
    exit 1
  }
done

[[ -f "$authorized_keys_file" ]] || {
  printf 'missing restricted authorized_keys file\n' >&2
  exit 1
}

if ! id "$deploy_user" >/dev/null 2>&1; then
  useradd --create-home --shell /bin/bash "$deploy_user"
fi
passwd --lock "$deploy_user" >/dev/null

install -d -m 0700 -o "$deploy_user" -g "$deploy_user" "/home/${deploy_user}/.ssh"
install -m 0600 -o "$deploy_user" -g "$deploy_user" \
  "$authorized_keys_file" "/home/${deploy_user}/.ssh/authorized_keys"

install -m 0755 -o root -g root \
  "${source_dir}/deploy-openim-docs.sh" /usr/local/sbin/deploy-openim-docs
install -m 0755 -o root -g root \
  "${source_dir}/openim-docs-deploy-entry" /usr/local/bin/openim-docs-deploy-entry

visudo -cf "${source_dir}/openim-docs-deploy.sudoers" >/dev/null
install -m 0440 -o root -g root \
  "${source_dir}/openim-docs-deploy.sudoers" /etc/sudoers.d/openim-docs-deploy

install -d -m 0755 /var/lib/openim-docs /var/www/letsencrypt
install -m 0644 -o root -g root \
  "${source_dir}/nginx-blue.conf" /etc/nginx/snippets/openim-docs-blue.conf
install -m 0644 -o root -g root \
  "${source_dir}/nginx-green.conf" /etc/nginx/snippets/openim-docs-green.conf

if [[ ! -L /etc/nginx/snippets/openim-docs-active.conf ]]; then
  ln -s /etc/nginx/snippets/openim-docs-blue.conf /etc/nginx/snippets/openim-docs-active.conf
fi

install -m 0644 -o root -g root \
  "${source_dir}/nginx-http.conf" /etc/nginx/sites-available/docs.openim.io.conf
ln -sfn /etc/nginx/sites-available/docs.openim.io.conf \
  /etc/nginx/sites-enabled/docs.openim.io.conf

nginx -t
systemctl reload nginx

printf 'OpenIM documentation deployment host is provisioned.\n'

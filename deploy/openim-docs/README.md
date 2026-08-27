# OpenIM documentation production deployment

The production site runs as a Next.js standalone container behind Nginx. GitHub Actions builds one immutable image for each `main` revision and sends its digest to the server through a restricted SSH key.

The server alternates between two local slots:

- `openim-docs-blue` on `127.0.0.1:3101`
- `openim-docs-green` on `127.0.0.1:3102`

`deploy-openim-docs.sh` starts the inactive slot, waits for the container health check, verifies the home page and dynamic APIs, switches the Nginx include atomically, and then gives the previous container time to drain before stopping it. A failed candidate never replaces the active slot.

The deployment key is attached to the `openim-docs-deploy` account with an OpenSSH forced command. The account can invoke only the checked deployment entry point; it does not receive an interactive shell. The GHCR package inherits the public repository visibility, while the workflow still passes its short-lived `GITHUB_TOKEN` over SSH for an authenticated pull. The temporary Docker configuration is removed after each deployment, so the server does not retain registry credentials.

`nginx-http.conf` is used while DNS still points to the previous provider and while the ACME challenge is being completed. Install `nginx-https.conf` only after `/etc/letsencrypt/live/docs.openim.io` exists.

Required GitHub production environment values:

- Secret `DOCS_DEPLOY_SSH_KEY`
- Secret `DOCS_DEPLOY_KNOWN_HOSTS`
- Variable `DOCS_DEPLOY_HOST`
- Variable `DOCS_DEPLOY_USER`

`provision.sh` installs the versioned scripts and Nginx configuration. Its second argument must be an `authorized_keys` file containing the generated deploy public key with these restrictions:

```text
restrict,command="/usr/local/bin/openim-docs-deploy-entry" ssh-ed25519 ...
```

The image is always deployed by digest. To roll back, manually run the CI workflow for the desired `main` revision or invoke the restricted deployment command with a previously published digest.

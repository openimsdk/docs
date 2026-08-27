# docs.openim.io 部署审计

核查与切换日期：2026-08-27

## 结论

`docs.openim.io` 已切换到 OpenIMSDK 自有服务器 `43.129.81.231`。生产站点以 Next.js standalone 容器运行，由 Nginx 提供 HTTPS 入口；`openimsdk/docs` 的 `main` 分支通过 GitHub Actions 自动验证、构建、发布和部署。

生产 DNS 已由 Netlify CNAME 改为服务器 A 记录。仓库不再依赖 Netlify Runtime、插件或构建配置，原 Netlify 项目不作为生产来源或回滚链路。仓库仅保留最小退役哨兵 `netlify.toml`，通过 `ignore = "exit 0"` 阻止仍与仓库关联的历史 Netlify 项目执行 Git 触发构建；该文件不包含构建命令、发布目录或插件配置。

## 当前生产链路

```text
openimsdk/docs main
        │
        ▼
GitHub Actions: verify
├── frozen-lockfile 安装
├── 生产依赖审计
├── pnpm check
└── pnpm build
        │
        ▼
GHCR 不可变镜像
ghcr.io/openimsdk/docs@sha256:...
        │
        ▼
受限 SSH 部署账号
        │
        ▼
blue : 127.0.0.1:3101
green: 127.0.0.1:3102
        │ 候选槽健康检查通过后原子切换
        ▼
Nginx + Let's Encrypt
        │
        ▼
https://docs.openim.io
```

GitHub Actions 只部署构建步骤返回的镜像摘要，不使用可变标签决定生产版本。Production 环境保存受限部署密钥、服务器主机信息和公网健康检查地址；同一时间只允许一个生产部署执行。

## 服务器部署控制

- 部署账号 `openim-docs-deploy` 使用 OpenSSH forced command，不提供交互式 Shell、端口转发或任意远程命令能力。
- 服务器入口只接受 `ghcr.io/openimsdk/docs@sha256:<digest>` 格式的镜像，并使用工作流的短期 `GITHUB_TOKEN` 完成认证拉取。
- Registry 配置写入临时目录，部署结束后删除；服务器不长期保存 GHCR 凭据。
- 新镜像始终启动在非活动槽位。容器健康检查、`/api/health`、中文首页和搜索接口全部通过后，才切换 Nginx upstream。
- Nginx 配置先执行 `nginx -t`。校验或重载失败时恢复原 upstream，并删除失败候选容器。
- 切换成功后保留短暂排空时间，再停止旧槽位。容器具有内存、CPU、PID 和日志轮转限制。

版本化实现位于 [`deploy/openim-docs`](../deploy/openim-docs)；自动化流程位于 [`.github/workflows/ci.yml`](../.github/workflows/ci.yml)。

## DNS 与 TLS

- `docs.openim.io` 的 A 记录指向 `43.129.81.231`，已通过权威 DNS、Cloudflare DNS、Google Public DNS 和阿里公共 DNS 核对。
- HTTP 请求会以 `301` 跳转到 HTTPS；ACME HTTP-01 路径保留独立的 webroot，不受跳转影响。
- `docs.openim.io` 使用独立的 Let's Encrypt 证书，首次签发证书有效期至 2026-11-25。
- 服务器只保留 snap Certbot 5.7 的自动续期定时器，重复的 apt Certbot 1.21 定时器已停用。
- `docs.openim.io` 已完成 Let's Encrypt staging 模拟续期，结果成功。

## 生产验收

切换完成后，以下检查均直接针对 `https://docs.openim.io` 执行：

| 检查项                    | 结果                      |
| ------------------------- | ------------------------- |
| `/`、`/zh`                | `200`，中英文首页正常     |
| WASM SDK 中英文概览       | `200`                     |
| Guides 与客户端错误码页面 | `200`                     |
| `/api/health`             | `200`，返回当前镜像摘要   |
| `/api/search`             | `200`，动态搜索正常       |
| `/_next/static/**`        | `200`，版本化静态资源正常 |
| HTTP 到 HTTPS             | `301`                     |
| TLS 主机名与证书链        | 校验通过                  |
| Nginx 5xx                 | 切换验收时为 `0`          |
| 活动容器错误日志          | 切换验收时为 `0`          |

首次完整自动部署由提交 `57ce0b575a` 触发；提交 `49db37b6af` 首次完成 HTTPS 与响应头加固，并验证了蓝绿切换、公开 HTTPS 健康检查和 Node.js 24 版 Docker Actions。

## 发布与回滚

正常发布只需合并或推送到 `main`。部署必须依次通过验证、镜像发布、服务器候选槽检查和公网 HTTPS 检查；任一阶段失败都会阻止后续阶段。

首选回滚方式是在 `main` 上回退有问题的改动，由同一流水线重新构建并部署。紧急情况下，服务器管理员也可以通过受限部署入口重新部署仍保留在 GHCR 中的已知镜像摘要。不要通过手工替换容器文件或修改活动 upstream 绕过健康检查。

每次调整构建、容器、Nginx、证书或部署脚本后，至少执行：

```bash
pnpm check
pnpm build
```

合并后还必须确认 GitHub Actions 的 `verify`、`publish-image`、`deploy-production` 三个任务成功，并复查公网健康检查返回的镜像摘要与该次部署一致。

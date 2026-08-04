# OpenIMSDK 品牌与公开入口

## 1. 产品名称

- **OpenIMSDK**：项目统称，包含 OpenIMClientSDK 与 OpenIMServer。
- **OpenIMClientSDK**：面向各客户端平台的 SDK。
- **OpenIMServer**：提供即时通讯核心能力的基础服务端。
- **ChatServer**：提供组织、业务管理等扩展能力的业务扩展服务端。公开文档不再将 “Chat” 作为独立产品名称。

产品名称在中英文文档中均保持以上拼写，不写作 “OpenIM SDK”“OpenIM Client SDK”“OpenIM Server”。只有代码标识、包名、仓库名、历史路径或第三方原文不适用该规则。

## 2. 官方链接

站点统一使用以下公开入口：

- OpenIMSDK 官网：<https://openim.io/>
- OpenIMSDK 商业版：<https://openim.io/enterprise/>
- GitHub：由 `NEXT_PUBLIC_GITHUB_URL` 配置
- 文档编辑地址：由 `NEXT_PUBLIC_EDIT_BASE_URL` 配置

商业版文案应说明其面向企业部署、技术支持和增强能力，并链接到商业版官网；不要把商业版能力描述为开源版默认包含。

## 3. 站点配置

`src/config/site.ts` 维护站点名、默认描述和外部链接。生产环境可设置：

```dotenv
NEXT_PUBLIC_SITE_URL=https://docs.example.com
NEXT_PUBLIC_WEBSITE_URL=https://openim.io/
NEXT_PUBLIC_ENTERPRISE_URL=https://openim.io/enterprise/
NEXT_PUBLIC_GITHUB_URL=https://github.com/openimsdk
NEXT_PUBLIC_EDIT_BASE_URL=https://github.com/your-org/your-repo/edit/main
```

全局页头位于 `src/components/site/global-header.tsx`，产品和平台卡片配置位于 `src/config/docs.ts`。修改显示名称不会改变 URL；修改 URL 必须同步结构数据和测试。

## 4. Logo、Favicon 与分享图

| 资源               | 文件                                                    |
| ------------------ | ------------------------------------------------------- |
| 原始品牌图         | `/Volumes/workspace/OpenIMlogo.png`（仓库外设计源文件） |
| 顶部 Logo mark     | `public/brand/logo-mark.png`                            |
| PNG Favicon        | `public/favicon.png`                                    |
| 多尺寸 Favicon     | `public/favicon.ico`                                    |
| 默认 Open Graph 图 | `public/og/default.svg`                                 |

Logo mark 与 favicon 从同一原始品牌图裁切，透明区域不得破坏图形内部的白色细节。更换资源时应确认浅色、深色和 16 px 小尺寸显示效果。只使用 OpenIMSDK 自有、开源或已经取得授权的字体和图像素材。

## 5. 颜色与视觉 token

`app/globals.css` 集中定义浅色和暗色 token，包括 accent、surface、text、border、code background 和 shadow。组件应优先使用 token，不在局部重复硬编码品牌色。

通用图标位于 `src/components/ui/icons.tsx`，首页卡片图标和布局位于 `src/components/mdx/landing.tsx`。

## 6. 首页与 SDK 命名

首页正文位于 `content/docs/chat/index.mdx` 及其中文版本。当前 Web 兼容 SDK 的公开命名是：

- JavaScript SDK WASM：适合浏览器、现代 Web 应用及需要 WASM 核心能力的场景。
- JavaScript SDK：适合 Web 与小程序等 JavaScript 运行时。
- Electron SDK：适合桌面应用，并提供 Electron 进程与本地资源相关说明。

每个平台使用独立卡片，避免把运行环境、包形态和适用场景混成一个入口。

## 7. 商业版能力标识

SDK 页面中的商业版标识必须与 Platform API 的视觉和文案一致。标识应紧贴能力说明，并提供商业版官网入口。阅后即焚、定期删除服务端消息、设置会话备注、群组全员禁言的 `muteBypassUserIDs`、保存本地转写结果等能力不得被误写为开源版默认能力。

## 8. 发布前品牌检查

- 页头、首页、README 和安全说明中的官网、商业版、GitHub 与联系地址一致。
- 中英文产品名和商业版提示语义一致。
- 页面不残留参考站品牌、旧 URL 或内部域名。
- `app/layout.tsx`、`app/robots.ts`、`app/sitemap.ts` 和分享图与正式域名匹配。
- 外链使用 HTTPS，并在新窗口打开时带安全的 `rel` 属性。

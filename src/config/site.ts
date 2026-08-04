export const siteConfig = {
  name: 'OpenIMSDK Docs',
  productName: 'OpenIMSDK',
  description: 'Documentation for OpenIMClientSDK, OpenIMServer, ChatServer, and Platform API.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  websiteUrl: process.env.NEXT_PUBLIC_WEBSITE_URL ?? 'https://openim.io/',
  enterpriseUrl: process.env.NEXT_PUBLIC_ENTERPRISE_URL ?? 'https://openim.io/enterprise/',
  githubUrl: process.env.NEXT_PUBLIC_GITHUB_URL ?? 'https://github.com/openimsdk',
  editBaseUrl: process.env.NEXT_PUBLIC_EDIT_BASE_URL ?? '',
} as const;

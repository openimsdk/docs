const code_themes = {
  light: require('prism-react-renderer/themes/github'),
  dark: require('prism-react-renderer/themes/vsDark'),
};

/** @type {import('@docusaurus/types').Config} */
const meta = {
  title: 'OpenIM Docs',
  tagline: 'Instant messaging SDKs, ready to launch 🚀',
  url: 'https://doc.rentsoft.cn',
  baseUrl: '/',
  favicon: '/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
};

/** @type {import('@docusaurus/plugin-content-docs').Options[]} */
const docs = [
  {
    id: 'sdks',
    path: 'docs/sdks',
    routeBasePath: '/sdks',
  },
  {
    id: 'restapi',
    path: 'docs/restapi',
    routeBasePath: '/restapi',
  },
  {
    id: 'blog',
    path: 'docs/blog',
    routeBasePath: '/blog',
  }
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  editUrl: 'https://github.com/OpenIMSDK/docs/tree/main/',
  showLastUpdateTime: true,
  remarkPlugins: [
    [require('@docusaurus/remark-plugin-npm2yarn'), { sync: true }],
  ],
  sidebarPath: require.resolve('./sidebars-default.js'),
};

/**
 * Create a section
 * @param {import('@docusaurus/plugin-content-docs').Options} options
 */
function create_doc_plugin({
  sidebarPath = require.resolve('./sidebars-default.js'),
  ...options
}) {
  return [
    '@docusaurus/plugin-content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      ...defaultSettings,
      sidebarPath,
      ...options,
    }),
  ];
}

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [tailwindPlugin, ...docs_plugins, webpackPlugin];

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,
  scripts: [
    '/embed.js'
  ],

  trailingSlash: false,
  // themes: ['@docusaurus/theme-live-codeblock'],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs/guides',
          id: 'guides',
          routeBasePath: '/guides',
          ...defaultSettings,
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/api-reference.css'),
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        logo: {
          href: '/',
          src: '/logo/light.png',
          srcDark: '/logo/dark.png',
          alt: 'OpenIM Docs',
          width: '107.5px',
          className: 'logo-icon',
        },
        items: [
          {
            label: 'Guides',
            to: 'guides/introduction',
          },
          {
            label: 'Client SDKs',
            to: 'sdks/introduction',
          },
          {
            label: 'Server APIs',
            to: 'restapi/apis/introduction',
          },
          {
            label: 'Blog',
            to: 'blog/introduction',
          },


          {
            type: 'search',
            position: 'right',
          },
          {
            label: 'Github',
            href: 'https://github.com/OpenIMSDK',
            position: 'right',
            className: 'dev-portal-signup dev-portal-link header-github-link',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        logo: {
          href: '/',
          src: '/logo/light.png',
          srcDark: '/logo/dark.png',
          alt: 'OpenIM Docs',
          height: '38px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Business',
                href: 'https://openim.io/commercial',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://openim.io',
              },
              {
                label: 'Contact Us',
                href: 'mailto:service@open-im.com',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: '/guides/introduction',
              },
              {
                label: 'Community',
                href: 'https://join.slack.com/t/openimsdk/shared_invite/zt-2hljfom5u-9ZuzP3NfEKW~BJKbpLm0Hw',
              },
            ],
          },
        ],
        copyright: 'Copyright © OpenIM since 2023. All rights reserved.',
      },
      prism: {
        theme: code_themes.light,
        darkTheme: code_themes.dark,
        additionalLanguages: [
          'dart',
          'ruby',
          'groovy',
          'kotlin',
          'java',
          'swift',
          'objectivec',
        ],
        magicComments: [
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
          {
            className: 'code-block-error-line',
            line: 'highlight-next-line-error',
          },
        ],
      },
      algolia: {
        appId: 'NRY7H605ZD',
        apiKey: '0521a959a3cf5eccb1347a65129dc3b4',
        indexName: 'rentsoft',
        contextualSearch: true,
        searchParameters: {},
      },
    }),

  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        },
      },
    }),
  },
};

module.exports = config;

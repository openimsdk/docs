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
    defaultLocale: 'zh-Hans',
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
  // {
  //   id: 'cli',
  //   path: 'docs/cli',
  //   routeBasePath: '/cli',
  // },
  // {
  //   id: 'plugin-sdk',
  //   path: 'docs/plugin-sdk',
  //   routeBasePath: '/plugin-sdk',
  //   versions: {
  //     current: {
  //       label: '1.x.x',
  //     },
  //   },
  // },
  {
    id: 'sdks',
    path: 'docs/sdks',
    routeBasePath: '/sdks',
    // versions: {
    //   current: {
    //     label: '1.x.x',
    //   },
    // },
  },
];

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const defaultSettings = {
  breadcrumbs: false,
  editUrl: 'https://github.com/dyte-in/docs/tree/main/',
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

const isDev = process.env.NODE_ENV === 'development';

const { webpackPlugin } = require('./plugins/webpack-plugin.cjs');
const tailwindPlugin = require('./plugins/tailwind-plugin.cjs');
const docs_plugins = docs.map((doc) => create_doc_plugin(doc));

const plugins = [tailwindPlugin, ...docs_plugins, webpackPlugin];

const fs = require('fs');
const sdksHTML = fs.readFileSync('./src/snippets/sdks.html', 'utf-8');
const resourcesHTML = fs.readFileSync('./src/snippets/resources.html', 'utf-8');

/** @type {import('@docusaurus/types').Config} */
const config = {
  ...meta,
  plugins,

  trailingSlash: false,
  // themes: ['@docusaurus/theme-live-codeblock'],
  clientModules: [require.resolve('./src/client/define-ui-kit.js')],

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
          ignorePatterns: ['/tags/**'],
        },
        googleTagManager: {
          containerId: 'GTM-5FDFFSS',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // image: '/img/dyte-docs-card.png',
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
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'OpenIM Docs',
          height: '40px',
          width: '101px',
        },
        items: [
          {
            label: 'SDKs',
            to: 'sdks',
          },
          {
            label: 'Guides',
            to: 'guides/quickstart',
            position: 'left',
            className: 'new-badge',
          },
          {
            label: 'API Reference',
            to: '/api/',
          },
          {
            label: 'Support',
            to: 'https://dyte.io/contact',
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
          src: '/logo/light.svg',
          srcDark: '/logo/dark.svg',
          alt: 'OpenIM Docs',
          height: '36px',
        },
        links: [
          {
            title: 'Product',
            items: [
              {
                label: 'Demo',
                href: 'https://www.rentsoft.cn',
              },
              // {
              //   label: 'Developer Portal',
              //   href: 'https://dev.dyte.io',
              // },
              {
                label: 'Pricing',
                href: 'https://www.rentsoft.cn',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About Us',
                href: 'https://www.rentsoft.cn',
              },
              // {
              //   label: 'Join Us',
              //   href: 'https://dyte.freshteam.com/jobs',
              // },
              // {
              //   label: 'Privacy Policy',
              //   href: 'https://dyte.io/privacy-policy',
              // },
              {
                label: 'Contact Us',
                href: 'mailto:winxu81@gmail.com',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                href: 'https://docs.rentsoft.cn',
              },
              {
                label: 'Blog',
                href: 'https://join.slack.com/t/openimsdk/shared_invite/zt-1tmoj26uf-_FDy3dowVHBiGvLk9e5Xkg',
              },
              {
                label: 'Community',
                href: 'https://join.slack.com/t/openimsdk/shared_invite/zt-1tmoj26uf-_FDy3dowVHBiGvLk9e5Xkg',
              },
            ],
          },
        ],
        copyright: 'Copyright © OpenIM since 2020. All rights reserved.',
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
        appId: 'HL0HSV62RK',
        apiKey: '72ebf02146698733b7114c7b36da0945',
        indexName: 'docs',
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

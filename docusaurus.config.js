// @ts-check
const { remarkGitBook, rehypeGitBook } = require('docusaurus-plugin-gitbook');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ownables Documentation',
  tagline: 'Stateful, event-driven assets with ownership and behavior',
  url: 'http://localhost',
  baseUrl: '/',

  organizationName: 'eqty-dao',
  projectName: 'ownables-docs',

  onBrokenLinks: 'throw',
  markdown: {
    format: 'md',
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '.',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          numberPrefixParser: false,
          beforeDefaultRemarkPlugins: [remarkGitBook],
          rehypePlugins: [rehypeGitBook],
          include: [
            '*.md',
          ],
          exclude: [
            '**/node_modules/**',
            '**/.docusaurus/**',
            '**/build/**',
          ],
        },
        blog: false,
        pages: false,
      },
    ],
  ],

  plugins: ['docusaurus-plugin-gitbook'],

  themeConfig: {
    navbar: {
      title: 'Ownables',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Documentation',
        },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  },
};

module.exports = config;

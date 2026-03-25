// @ts-check

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
          include: [
            'README.md',
            '01-sdk/**/*.md',
            '02-concepts/**/*.md',
            '03-contract-development/**/*.md',
            '04-hub/**/*.md',
            '05-integration/**/*.md',
            '06-protocol/**/*.md',
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
      title: 'Ownables Docs',
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

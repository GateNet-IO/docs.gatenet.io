const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'GATENet Documentation',
  tagline: 'Documentation for GATENet Public Projects',
  url: 'https://docs.gatenet.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'GateNet-IO', // Usually your GitHub org/user name.
  projectName: 'docs.gatenet.io', // Usually your repo name.
  noIndex: process.env.NO_INDEX,
  plugins: [
      [
        'docusaurus2-dotenv',
        {
          path: "./.env", // The path to your environment variables.
          safe: false, // If false ignore safe-mode, if true load './.env.example', if a string load that file as the sample
          systemvars: false, // Set to true if you would rather load all system variables as well (useful for CI purposes)
          silent: false, //  If true, all warnings will be suppressed
          expand: false, // Allows your variables to be "expanded" for reusability within your .env file
          defaults: false, //  Adds support for dotenv-defaults. If set to true, uses ./.env.defaults
        },
      ]
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      hideableSidebar: false,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'GATENet',
        logo: {
          alt: 'GATENet',
          src: 'img/logo.svg',
        },
        /*items: [
          {
            type: 'doc',
            docId: 'staking-user-guide/introduction',
            position: 'left',
            label: 'Staking User Guide',
            to: 'staking-user-guide'
          },
        ],*/
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} GATENet. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const cloneDeep = require('lodash').cloneDeep;

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

function removeItalics(inputTheme) {
  const theme = cloneDeep(inputTheme);

  theme.styles?.forEach(({style}) => {
    if (style.fontStyle === 'italic') {
      delete style.fontStyle;
    }
  });

  return theme;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Parakeet-RS',
  tagline: '小鹦鹉流媒体加解密库文档',
  url: 'https://docs.parakeet.jixun.dev/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'parakeet-rs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/parakeet-rs/docs/edit/main/',
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
      navbar: {
        title: '小鹦鹉',
        logo: {
          alt: '小鹦鹉',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '百科',
          },
          {
            href: 'https://github.com/parakeet-rs/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Team Parakeet-RS. Built with Docusaurus.`,
      },
      prism: {
        theme: removeItalics(lightCodeTheme),
        darkTheme: removeItalics(darkCodeTheme),
      },
    }),
};

module.exports = config;

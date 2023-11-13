require('dotenv').config();

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Toolbox Handleiding',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://handleiding.tbvs.be/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'toolbox-kobavzw', // Usually your GitHub org/user name.
  projectName: 'toolbox-handleiding', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false,
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
        title: 'Handleiding Toolbox',
        logo: {
          alt: 'Toolbox logo',
          src: 'img/logo.png',
        },
      },
      prism: {
        theme: {
          ...lightCodeTheme,
          plain: {
            ...lightCodeTheme.plain,
            backgroundColor: "#ffff"
          }
        },
        additionalLanguages: ['powershell'],
        
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: true
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        config: {}
      },
    }),

    plugins: [
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
      require.resolve('docusaurus-plugin-image-zoom'),
      ...(process.env.DISABLE_SEARCH === 'true' ? [] : [[
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          indexBlog: false,
          hashed: true,
          docsRouteBasePath: "/",
        },
      ]]),
    ],
    stylesheets: [
      'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,200;0,400;0,500;0,600;0,800;1,400&display=swap'
    ]
};

module.exports = config;

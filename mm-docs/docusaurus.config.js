// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mera Monitor',
  tagline: 'Comprehensive Productivity Tracking & Monitoring Solution',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sahilaapna.github.io', // NEW GitHub username
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mm-documentation/', // Assuming same repo name

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sahilaapna', // NEW GitHub username
  projectName: 'mm-documentation', // Assuming same repo name
  deploymentBranch: 'gh-pages', // Branch for GitHub Pages
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Configure Algolia DocSearch for reliable search suggestions
  // Sign up at https://docsearch.algolia.com/ to get your credentials
  themeConfig: {
    algolia: {
      appId: 'RCRFDAHKS4',
      apiKey: '0cbf3b5764c2571abb09673b1462a0da',
      indexName: 'sahilaapnaio',
      contextualSearch: true,
      // Optional: see https://docusaurus.io/docs/search#contextual-search
    },
    // Replace with your project's social card - using Mera Monitor branding
    image: 'img/logo-light.svg',
    navbar: {
      logo: {
        alt: 'Mera Monitor Logo',
        src: 'img/logo-light.svg',        // Logo for light theme
        srcDark: 'img/logo-dark.svg',     // Logo for dark theme
        href: 'https://meramonitor.com',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'User Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'apiSidebar',
          position: 'left',
          label: 'API Documentation',
        },
      ],
    },
    // No Algolia configuration to prevent errors
    footer: {
      style: 'dark',
      copyright: '© Copyright 2025 Mera Monitor. All rights reserved.',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sahilaapna/mm-documentation/tree/main/', // NEW repo URL
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sahilaapna/mm-documentation/tree/main/', // NEW repo URL
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
};

export default config;

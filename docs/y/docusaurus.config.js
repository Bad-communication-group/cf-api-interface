// `@type` JSDoc注释允许编辑器自动补全和类型检查（需配合`@ts-check`使用）
// (当配合使用`@ts-check`时)
// 以下是Docusaurus配置的多种等效声明方式
// 参考文档：https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// 该文件在Node.js环境中运行 - 请勿使用浏览器端代码（如浏览器API、JSX等）

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'cf-api-interface',
  tagline: '用cf搭建api接口',
  favicon: 'img/favicon.png',

  // 设置网站生产环境的完整URL
  url: 'https://apidocs.lcy-ys.top',
  // 设置网站部署的相对路径（通常用于GitHub Pages）
  baseUrl: '/',

  // GitHub Pages部署配置
  // 如果不使用GitHub Pages，可以忽略这些配置
  organizationName: 'Bad-communication-group', // 通常是你的GitHub组织/用户名
  projectName: 'cf-api-interface', // 通常是你的仓库名称

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 即使不使用国际化功能，也可以用此字段设置语言元数据
  // 例如中文站点可以将"en"替换为"zh-cn"
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // 请修改为你的仓库地址
          // 注释此行可移除"编辑此页面"链接
          editUrl:
            'https://github.com/Bad-communication-group/cf-api-interface/tree/main/docs/y/docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为你的项目社交卡片图片
      image: 'img/favicon.jpg',
      navbar: {
        title: 'cf-api-interface',
        logo: {
          alt: 'cf-api-interface Logo',
          src: 'img/favicon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            href: 'https://github.com/Lcyys666/cf-api-interface',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '官网',
            items: [
              {
                label: '主站',
                to: 'https://lcy-ys.top',
              },
            ],
          },
          {
            title: 'GitHub',
            items: [
              {
                label: '主站',
                to: 'https://github.com/Lcyys666/cf-api-interface',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lcyys666, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
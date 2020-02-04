const portFinderSync = require('portfinder-sync');
const host = require('ip').address();
const port = portFinderSync.getPort(8080);

module.exports = {
  title: '<%= name %>',
  base: '/',
  host,
  port,
  dest: '.vuepress/dist',

  // locales: {
  //   '/': {
  //     lang: 'en-US',
  //     title: 'VuePress',
  //     description: 'Vue-powered Static Site Generator'
  //   },
  //   '/zh/': {
  //     lang: 'zh-CN',
  //     title: 'VuePress',
  //     description: 'Vue 驱动的静态网站生成器'
  //   }
  // },

  head: [
    // ['link', { rel: 'icon', href: `/logo.png` }],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  patterns: [
    'docs/**/*.md',
    'README.md'
  ],
  // https://github.com/vuejs/vuepress/blob/master/packages/docs/docs/zh/plugin/using-a-plugin.md
  plugins: [
    // TODO: 应该是兼容性问题
    // https://vssue.js.org/zh/guide/vuepress.html#vuepress-%E6%8F%92%E4%BB%B6
    // ['@vssue/vuepress-plugin-vssue', {
    //   platform: 'github',
    //   owner: 'huixisheng',
    //   repo: 'WebColumns',
    //   clientId: '95cb2a882e11ac8aefeb',
    //   clientSecret: '6fcf26e3921b0e3ae7f54acdd49f319f04b11188',
    // }],
    
    '@vuepress/active-header-links',
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true],
    '@vuepress/nprogress',
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    'vuepress-plugin-reading-time',
    'vuepress-plugin-export'
  ],
  markdown: {
    // https://www.npmjs.com/package/markdown-it-linkify-images
    lineNumbers: true,
    config: md => {
      // /Users/huixisheng/.config/yarn/global/node_modules/markdown-it/lib/rules_core/linkify.js
      // Skip content of html tag links
      // md.options.linkify = true;
      md.configure({
        options: {
          linkify: true,
        }
      });
      // md.set({
      //   options: {
      //     linkify: true,
      //   },
      //   linkify: true,
      // });
      // // https://github.com/markdown-it/markdown-it/issues/367
      // md.enable('linkify');
      // md.linkify(md);
      // console.log(md);
    }
  },
  themeConfig: {
    nav: [
      {
        text: '使用文档', link: '/docs/' ,
      },
      // {
      //   text: '组件',
      //   items: [
      //   ]
      // }
    ],
    search: true,
    lastUpdated: 'Last Updated',
    searchMaxSuggestions: 10,

    // repo: 'huixisheng/WebColumns',
    // repoLabel: '查看源码',
    // docsRepo: 'huixisheng/WebColumns',
    // docsDir: '',
    // docsBranch: 'master',

    editLinks: false,
    smoothScroll: true,
    editLinkText: '帮助我们改善此页面！',
    displayAllHeaders: true,
    sidebar: 'auto',
    // sidebar: [
    //   {
    //     title: 'TypeScript',
    //     collapsable: true,
    //     children: ['/resources/typescript/', 'TypeScript'],
    //   },
    // ],
    serviceWorker: {
      // updatePopup: true // Boolean | Object, 默认值是 undefined.
      // 如果设置为 true, 默认的文本配置将是: 
      updatePopup: { 
         message: 'New content is available.', 
         buttonText: 'Refresh' 
      }
    }
  },
}

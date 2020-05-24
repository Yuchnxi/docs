const moment = require('moment');

module.exports = {
  base: "/docs/",
  title: "yuchenxi",
  description: "yuchenxi",
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta', { name: 'author', content: 'yuchenxi' }],
    ['meta', { name: 'keywords', content: 'vuepress 介绍, vuepress 说明, yuchenxi' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          moment.locale("zh-cn")
          return moment(timestamp).format('LLLL')
        }
      }
    ]
  ],
  themeConfig: {
    // 最后更新时间
    lastUpdated: '更新时间', // string | boolean
    // 导航栏logo
    // logo: '/assets/img/hero.png',
    // navbar: false, // 禁用所有页面的导航栏
    // 导航栏配置
    nav: [
      { text: 'Home', link: '/' },
      { text: '关于我', link: '/about' },
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [
            { text: 'Home', link: '/' },
            { text: '关于我', link: '/about' },
          ] },
          { text: 'Group2', items: [
            { text: 'Home', link: '/' },
            { text: '关于我', link: '/about' },
          ] }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    // 自动生成侧边栏
    sidebar: {
      '/css/': [
        'c-aaa',
        'c-bbb',
        'c-ccc',
      ],
      '/javascript/': [
        'j-aaa',
        'j-bbb',
        'j-ccc',
      ],
    },
  }
}
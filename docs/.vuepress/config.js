// .vuepress/config.js
const moment = require('moment');
moment.locale("zh-cn")
module.exports = {
  base:'/docs/',
  title:"HHH",
  description:'LLL',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'author', content: 'HJJ' }],
    ['meta', { name: 'keywords', content: 'vue[ress介绍，啥啥啥' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          
          return moment(timestamp).format('Y-MM-DD h:mm:ss')
        }
      }
    ]
  ],
  themeConfig: {
    lastUpdated: '更新时间', // string | boolean
    //   logo: '/assets/img/logo.png',
    // 导航
    nav: [
      { text: "Home", link: "/" },
      { text: "aboout", link: "/about/", target: "_blank", rel: "" },
      { text: "my", link: "https://google.com" },
    ],
    // sidebar:true,
    // sidebar: [
    //   '',
    //   '/about1',
    //   '/about/'
    // ]

    sidebar: [
      "",
      "/about2",
      "/about1",
      {
        title: 'Group about',   // 必要的
        path: '/about/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: ['/about/','/about/a','/about/bbb','/about/c']
      },
     ],


    // sidebar: {
    //   "/about/":["","a","bbb","c"],
    //   "/": ["","about1","about2"],

    // },
  },
};

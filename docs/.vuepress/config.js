// .vuepress/config.js
const moment = require("moment");
moment.locale("zh-cn");
module.exports = {
  base: "/docs/",
  title: "HHH",
  description: "LLL",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "author", content: "HJJ" }],
    ["meta", { name: "keywords", content: "vue[ress介绍，啥啥啥" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/icons/safari-pinned-tab.svg",
        color: "#3eaf7c",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "/icons/msapplication-icon-144x144.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#000000" }],
  ],
  plugins: {
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) =>  moment(timestamp).format("Y-MM-DD h:mm:ss")
    },
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新",
      },
    },
    "@vssue/vuepress-plugin-vssue": {
      // 设置 `platform` 而不是 `api`
      platform: "github-v4",

      // 其他的 Vssue 配置
      owner: "jiajia-hjj",
      repo: "docs",
      clientId: "35497241f274868c06ca",
      clientSecret: "dfedfa2f44ca6709229ab5fcee012e30cec8f345",
      autoCreateIssue:true
    },
  },
  themeConfig: {
    lastUpdated: "更新时间", // string | boolean
    //   logo: '/assets/img/logo.png',
    // 导航
    nav: [
      { text: "Home", link: "/" },
      { text: "aboout", link: "/about/", rel: "" },
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
        title: "Group about", // 必要的
        path: "/about/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1, // 可选的, 默认值是 1
        children: ["/about/", "/about/a", "/about/bbb", "/about/c"],
      },
    ],

    // sidebar: {
    //   "/about/":["","a","bbb","c"],
    //   "/": ["","about1","about2"],

    // },
  },
};

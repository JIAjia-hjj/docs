// .vuepress/config.js


const headConfig=require('./config/headConfig');
const pluginsConfig=require('./config/pluginsConfig');
const navConfig=require('./config/navConfig');
const sidebarConfig=require('./config/sidebarConfig');
module.exports = {
  base: "/docs/",
  title: "HHH",
  description: "LLL",
  head:headConfig,
  plugins:pluginsConfig,
  themeConfig: {
    lastUpdated: "更新时间", // string | boolean
    //   logo: '/assets/img/logo.png',
    // 导航
    nav:navConfig,
    sidebar:sidebarConfig,
  },
};

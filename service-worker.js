/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "05-css/css 实现上右下左三角.html",
    "revision": "d1a8eb2a4699041e9d992af2467ebf72"
  },
  {
    "url": "05-css/CSS高级常见技巧汇总.html",
    "revision": "8e6517d4cce55f5e18ffc86aab79ddcb"
  },
  {
    "url": "05-css/DIV水平垂直居中/retina屏幕1px边框问题.html",
    "revision": "372e3d261c5ffb7cc98df17a3eaaaa21"
  },
  {
    "url": "05-css/DIV水平垂直居中/大屏适配方案.html",
    "revision": "a5288211608be16d177746cf8d7a5b16"
  },
  {
    "url": "05-css/index.html",
    "revision": "44f0fb7e7c1b01f07a84c19f96af1fe8"
  },
  {
    "url": "05-css/retina屏幕1px边框问题.html",
    "revision": "78a8c33d6ecf72b0c334c8e7e718ce2c"
  },
  {
    "url": "05-css/大屏适配方案.html",
    "revision": "1cf410abba50fedb76af8acf493133d4"
  },
  {
    "url": "05-css/移动端适配方案 - 副本.html",
    "revision": "0bd067a32a753cfb36ecd348714c5771"
  },
  {
    "url": "05-css/设置input.html",
    "revision": "a8873330d8f306f41421677b2b26ae14"
  },
  {
    "url": "05-css/隐藏滚动条或更改滚动条样式.html",
    "revision": "92833cec3ec04c8e2c9d4ae35ac452a7"
  },
  {
    "url": "06-js/00-es6/async函数.html",
    "revision": "6f9b11e4a2408bf282c405b2f3c41660"
  },
  {
    "url": "06-js/00-es6/es6.html",
    "revision": "1ca8848ba61348e7f2921ff99e4a908f"
  },
  {
    "url": "06-js/00-es6/es6箭头函数.html",
    "revision": "33f3a8e54422acd93c01eedcab421902"
  },
  {
    "url": "06-js/js内置对象.html",
    "revision": "172317909ac912f5e765dfaba54492e4"
  },
  {
    "url": "06-js/js数据类型.html",
    "revision": "e4d08c8854126a0d41d16b1699b30463"
  },
  {
    "url": "06-js/js面向对象.html",
    "revision": "2fa748dc1bb214b6ac0d5622fa6d2513"
  },
  {
    "url": "404.html",
    "revision": "b8dd01cd6f7f09e48d61057da1671b72"
  },
  {
    "url": "about/a.html",
    "revision": "32a30cf1b9c7d160bf0c463176f70d7e"
  },
  {
    "url": "about/bbb.html",
    "revision": "c6fe1da0a13e73968dd8550c70f8b688"
  },
  {
    "url": "about/c.html",
    "revision": "9a3d5439592398caa32e424bc61d3b1a"
  },
  {
    "url": "about/index.html",
    "revision": "1de8b995246edad440ffc4008b2d8b1e"
  },
  {
    "url": "about1.html",
    "revision": "a7b724d01d1f382b5d4fddf6aad8d5f1"
  },
  {
    "url": "about2.html",
    "revision": "0e511d21f95e2b4620bfd24e8adf6ade"
  },
  {
    "url": "article.html",
    "revision": "418b8086b62501c6615fde78048f6cb2"
  },
  {
    "url": "assets/css/0.styles.09a72791.css",
    "revision": "e3116d9e169972b22cd7e9af478c6c07"
  },
  {
    "url": "assets/img/prize-box.png",
    "revision": "8fcc0ea39c026bb9cd8293b1f8e1e693"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6bdc4dd8.js",
    "revision": "2e7c287e9917fd84071258eb6dc8b0eb"
  },
  {
    "url": "assets/js/11.a053abc1.js",
    "revision": "5684458baee896fe6770de398610274e"
  },
  {
    "url": "assets/js/12.d4777868.js",
    "revision": "34298ec40561da7745e6da991c6d7aa9"
  },
  {
    "url": "assets/js/13.b0c169a2.js",
    "revision": "078653638e5a32dd3422a9be3c8c447d"
  },
  {
    "url": "assets/js/14.e365f036.js",
    "revision": "a15486b677edd070c0fa45464380de59"
  },
  {
    "url": "assets/js/15.73e99950.js",
    "revision": "3b75a5c6eb96aade853d092947284c32"
  },
  {
    "url": "assets/js/16.d2767207.js",
    "revision": "dcba0881f785d33bf54cbffa87e3610a"
  },
  {
    "url": "assets/js/17.09be30c0.js",
    "revision": "1172cb4717dc7b2c5ce51d910e83f50c"
  },
  {
    "url": "assets/js/18.f57eb329.js",
    "revision": "ce8cc88c6f74ca039b03a22a8053f516"
  },
  {
    "url": "assets/js/19.cb435bdf.js",
    "revision": "02539342b3b624b0e9f4f78e8bf02233"
  },
  {
    "url": "assets/js/2.3cfa2b4e.js",
    "revision": "45990e7ce99dd13213cf1c113f3f5098"
  },
  {
    "url": "assets/js/20.3fb6e545.js",
    "revision": "d77d49a250867017a358d4c9183f156d"
  },
  {
    "url": "assets/js/21.130c7703.js",
    "revision": "f2dbc6b77d25e49750ecd459b08d51a5"
  },
  {
    "url": "assets/js/22.b0cad573.js",
    "revision": "fe85322dda1e8903940a1843545f72bf"
  },
  {
    "url": "assets/js/23.5a47415e.js",
    "revision": "1603948e068f10a74fd4a75d9d78125f"
  },
  {
    "url": "assets/js/24.c839b120.js",
    "revision": "05c984c5f96a59c19034aa28eeaf249c"
  },
  {
    "url": "assets/js/25.334c396f.js",
    "revision": "6c0ad611c2a0c48254500f4ac2e662f9"
  },
  {
    "url": "assets/js/26.bb3312ff.js",
    "revision": "ea3471517cef7fd90ceefc631ef2e374"
  },
  {
    "url": "assets/js/27.09e4b40c.js",
    "revision": "ff873fac6fcc472ab403a0422b36a308"
  },
  {
    "url": "assets/js/28.8c7325ad.js",
    "revision": "9a116d05fcbe9ad29a2c4b77fe63aea5"
  },
  {
    "url": "assets/js/29.636cf6db.js",
    "revision": "fa88a93bad232084fb06f330580202aa"
  },
  {
    "url": "assets/js/3.6a1efbaa.js",
    "revision": "913390cd65c834ace7ba54fde62cb735"
  },
  {
    "url": "assets/js/30.d23d1476.js",
    "revision": "df106320cd1439e48f36b4e6efa9cd5e"
  },
  {
    "url": "assets/js/31.cf7289b8.js",
    "revision": "4db767bbedb2194dbdd03119e49da8af"
  },
  {
    "url": "assets/js/32.2c5c1569.js",
    "revision": "086688475fe90cbed3cd76c8ee0b8863"
  },
  {
    "url": "assets/js/33.ece982d0.js",
    "revision": "da7d6d1358cca512626a87aa461ce0fc"
  },
  {
    "url": "assets/js/34.6198aa94.js",
    "revision": "d4e966115cb1672301385986b62caa3f"
  },
  {
    "url": "assets/js/35.1432714f.js",
    "revision": "f8105398181131e187db7c2c8f8ef4ec"
  },
  {
    "url": "assets/js/36.11bef8a0.js",
    "revision": "c0c2983eb3364b00c3d0f831727c0578"
  },
  {
    "url": "assets/js/4.42d3ab57.js",
    "revision": "d5f8f0787c4852107375dfd8b363a517"
  },
  {
    "url": "assets/js/5.fd53b2ea.js",
    "revision": "0df9d427d258375cbc98fca315b2fce8"
  },
  {
    "url": "assets/js/6.fd3ce023.js",
    "revision": "a35251e8304b7325d3aada1505bb62db"
  },
  {
    "url": "assets/js/7.28834bf7.js",
    "revision": "bdd8efcca98f6b8ded4c90ac056d69ec"
  },
  {
    "url": "assets/js/8.7187f971.js",
    "revision": "be334752ae9b7f37515e1f60205f257b"
  },
  {
    "url": "assets/js/9.c25aaa63.js",
    "revision": "dfaeda29d18dce82cf7b53aecdc70c1c"
  },
  {
    "url": "assets/js/app.1512aaa2.js",
    "revision": "7aa9aa5f82271f4d53aa63bed3583952"
  },
  {
    "url": "countup.html",
    "revision": "5a9a7e8161ebc94fe3b3767ec4153174"
  },
  {
    "url": "icons/256.png",
    "revision": "d440f8adc25ce982cf991a180407e4a7"
  },
  {
    "url": "icons/afari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "b4b7828c79b8779cce9113926e6ce651"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "3dede8872d21fce0634c062bd5f83de4"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "ac452b49904040b55d43101a64e6dcd9"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "dc1cb297e83dee2974faf7bcb22adda6"
  },
  {
    "url": "index.html",
    "revision": "c7f424cc693dd52d1be19b8a89622188"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

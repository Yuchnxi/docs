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
    "url": "404.html",
    "revision": "57d91f140cb5fd549de58c1b6b678ae2"
  },
  {
    "url": "about.html",
    "revision": "2a917799ebf86fa0b9078eb5e9593ff5"
  },
  {
    "url": "about1.html",
    "revision": "a01f376d7b93006ff676b471f8e80297"
  },
  {
    "url": "about2.html",
    "revision": "10e524118d08dbec649c1fa37d2d59f0"
  },
  {
    "url": "assets/css/0.styles.f9fd2e3d.css",
    "revision": "b81e08f514ec890a4888270149839f2f"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2df6e6c8.js",
    "revision": "8e508cd21cedce6b98a240eaba7b63bf"
  },
  {
    "url": "assets/js/11.38c001b4.js",
    "revision": "54b66a5454a1b488df632304648e4f38"
  },
  {
    "url": "assets/js/12.191302f9.js",
    "revision": "cd7fa19d49f32744f497c0c88186a229"
  },
  {
    "url": "assets/js/13.2222a736.js",
    "revision": "116f42f3876c66c6b7ddba98da13d4ea"
  },
  {
    "url": "assets/js/14.dcc5a5c8.js",
    "revision": "31c570b42155a89922d2aa841bdb8a21"
  },
  {
    "url": "assets/js/15.98dcc5a6.js",
    "revision": "0f75e149f8347f5988370126ae31be50"
  },
  {
    "url": "assets/js/16.ce0ff359.js",
    "revision": "8efc605670428adf1c6d71a25a9e3288"
  },
  {
    "url": "assets/js/17.26552828.js",
    "revision": "91e2135394564f5766f937d06f5bd667"
  },
  {
    "url": "assets/js/2.d9dd3ea0.js",
    "revision": "508a2132e55f03ea735f1ee4196709f3"
  },
  {
    "url": "assets/js/3.bc022aab.js",
    "revision": "6fbdb942f4d5afbf725bc42a9e89a34a"
  },
  {
    "url": "assets/js/4.df375da2.js",
    "revision": "e92c92666192f525df0f31b5b387bf73"
  },
  {
    "url": "assets/js/5.8b0e7d4b.js",
    "revision": "7bd3659d5f05bf3c5567b4533181e215"
  },
  {
    "url": "assets/js/6.cf55056f.js",
    "revision": "f271e91b26b0aff97d4a95329017428b"
  },
  {
    "url": "assets/js/7.a40d1b9f.js",
    "revision": "c9b31af791a3001a609c077cf2e3565e"
  },
  {
    "url": "assets/js/8.9c42c296.js",
    "revision": "6b8afe99f2a47b898c3e9bddd21dfb66"
  },
  {
    "url": "assets/js/9.f12cce29.js",
    "revision": "4edb1bfcea3d6df4b16d55b2fabc8e37"
  },
  {
    "url": "assets/js/app.c9e8736b.js",
    "revision": "9e34cebafec121ce42158152f5d621c6"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "5159313f455838f30d0c48915143a54a"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "33e3e0b6b53799079367f0fd6b517e4a"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "c550cfb773918ffd2c232565bfdee7d9"
  },
  {
    "url": "css/index.html",
    "revision": "c4970acfc561e152c8a8a9b396a62c02"
  },
  {
    "url": "index.html",
    "revision": "c4ac89de3cb081fa493cd356d072f84a"
  },
  {
    "url": "javascript/j-aaa.html",
    "revision": "0ddf73c8a43b5255d8fda04c79a34c69"
  },
  {
    "url": "javascript/j-bbb.html",
    "revision": "506209de5b32ced6ac0549b95f1b8ef8"
  },
  {
    "url": "javascript/j-ccc.html",
    "revision": "2f62e1228836cf3cb5af4f12a5514b9b"
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

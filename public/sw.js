if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/HA5MS-pyMCYC5ebiR3L8L/_buildManifest.js",revision:"2b57cacd67752c8cb9af6cd4fddd53b1"},{url:"/_next/static/HA5MS-pyMCYC5ebiR3L8L/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/525-9c6fdcd8ecf59c7b.js",revision:"9c6fdcd8ecf59c7b"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-469bff521f7bfb26.js",revision:"469bff521f7bfb26"},{url:"/_next/static/chunks/pages/404-fbaf8de6093fe286.js",revision:"fbaf8de6093fe286"},{url:"/_next/static/chunks/pages/_app-852203444235cbd6.js",revision:"852203444235cbd6"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/index-e5a6ebe8b16279bd.js",revision:"e5a6ebe8b16279bd"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ee7e63bc15b31913.js",revision:"ee7e63bc15b31913"},{url:"/_next/static/css/5bdafbec28dfac17.css",revision:"5bdafbec28dfac17"},{url:"/_next/static/css/8a5540ae92c2199e.css",revision:"8a5540ae92c2199e"},{url:"/_next/static/css/cbea8ed3185cb036.css",revision:"cbea8ed3185cb036"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicons/app-icon-192.png",revision:"89356a5613bec7698d3601130f537cb1"},{url:"/favicons/app-icon-512.png",revision:"90628bcea9061597868bc7eb897093ba"},{url:"/favicons/app-icon.svg",revision:"05994fb09c2d33a9ec313fde405626cb"},{url:"/favicons/manifest.json",revision:"b05b587bd24ce9e0cef301cc68e19b70"},{url:"/fonts/Zebra-Bold.woff",revision:"8dbd03075d08c0be2c6521e4f48d7bb5"},{url:"/fonts/Zebra-Bold.woff2",revision:"d78f1499a6e0216ab146f909b103f410"},{url:"/fonts/Zebra-Medium.woff",revision:"e1b8c1fa76ec245de94f993db32b74cd"},{url:"/fonts/Zebra-Medium.woff2",revision:"7542a9234b3e5c3448cac7529344a8e7"},{url:"/fonts/Zebra-Regular.woff",revision:"7d254889b488cc571b8b1da6bbe4e4e2"},{url:"/fonts/Zebra-Regular.woff2",revision:"a0d7700e3fb2d200592d9ba1c4f9bd59"},{url:"/img/404/zebra.png",revision:"8ffc6fcb7d79a6a86fab30f6709dc259"},{url:"/img/gallery/next-icon-hover.svg",revision:"fa672b94e1143296be64a185930a6932"},{url:"/img/gallery/next-icon.svg",revision:"930d52a658186a6a7abc9e906f31a8eb"},{url:"/img/gallery/previous-icon-hover.svg",revision:"733db26a2edb21e4cb973f9f3d27eb3d"},{url:"/img/gallery/previous-icon.svg",revision:"f98e522891a4b7e06328c64c1569808e"},{url:"/img/home/first-screen/background-desktop.png",revision:"f9d86a4553203a6f39a09ede7ce6bd1c"},{url:"/img/home/first-screen/background-mobile.png",revision:"e095036adee9f2e0fdd1d0abfd75f828"},{url:"/img/home/first-screen/background-tablets.png",revision:"4bc5f82e817b9e47edbbc16f0ef84e03"},{url:"/img/layout/header/arrow-right-white.svg",revision:"5632fe634849a6117c3e335b02f78722"},{url:"/img/layout/header/arrow-right.svg",revision:"1959829c3e1895d4554993a152464aa6"},{url:"/img/layout/header/close-menu.svg",revision:"d75e017fac3868dd97b08289d5f7373c"},{url:"/img/layout/header/open-menu.svg",revision:"95f843e02a15277e9a261f29118ee461"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

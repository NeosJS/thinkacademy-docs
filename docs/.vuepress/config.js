const path = require("path");
const slugify = require("transliteration").slugify;
const tools = require("./theme/util/tools");
// const isEnvProduction = process.env.NODE_ENV === 'production'

module.exports = {
  title: "海外产品部 客户端开发文档",
  description: "海外产品部前端组文档",
  dest: "./dist",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", { src: "https://cdn.bootcss.com/vue/2.6.12/vue.min.js" }]
    // ["link", { rel: "stylesheet", href: "/tal-sc.min.css" }]
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "IpcMessage", link: "/ipc/" },
      { text: "NativeApi", link: "/native/" },
      { text: "Logger", link: "/logger/" }
      // { text: '大班(Live)', link: '/live/' },
      // { text: 'Native', link: '/native/' },
      // { text: 'UC', link: '/uc/' }
      // !isEnvProduction && { text: 'TEST', link: '/test/' }
    ],
    sidebar: {
      "/ipc/": getIpcSiderBar("IpcMessage"),
      "/native/": getNativeSiderBar("Native"),
      "/logger/": getLoggerSiderBar("日志系统")
    },
    lastUpdated: "上次更新",
    smoothScroll: true
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/last-updated",
      {
        transformer: (timestamp, lang) => {
          const moment = require("moment");
          moment.locale("zh-CN");
          return moment(timestamp).fromNow();
        }
      }
    ],
    ["@vuepress/register-components"],
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        popupComponent: "UpdatePopup",
        updatePopup: {
          message: "发现有新内容可用",
          buttonText: "刷 新"
        }
      }
    ],
    [
      "container",
      {
        type: "vue",
        before: '<pre class="vue-container"><code>',
        after: "</code></pre>"
      }
    ]
  ],
  markdown: {
    toc: {
      includeLevel: [2],
      slugify: slugify,
      forceFullToc: true
    },
    anchor: {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true
    },
    lineNumbers: false,
    extendMarkdown: md => {
      md.use(...tools.createContainer("tip"))
        .use(...tools.createContainer("info"))
        .use(...tools.createContainer("success"))
        .use(...tools.createContainer("danger"))
        .use(...tools.createContainer("error"))
        .use(...tools.createContainer("warning"))
        .use(...tools.createContainer("warn"))
        .use(...tools.createDemoContainer("demo"));
    }
  },
  chainWebpack(config) {
    config.resolve.alias.set("@imgs", path.resolve(__dirname, "public/")).end();
    config
      .externals({
        vue: "Vue"
      })
      .end();
    // config
    //   .merge({
    //     externals: {
    //       vue: {
    //         root: 'Vue',
    //         commonjs: 'vue',
    //         commonjs2: 'vue',
    //         amd: 'vue'
    //       }
    //     }
    //   })
    //   .end()
  },
  clientRootMixin: path.resolve(__dirname, "mixin.js")
  // devServer: {
  //   https: true
  // }
};

function getIpcSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "listener", "send", "call"]
    }
  ];
}
function getNativeSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [""]
    },
    {
      title: "APP",
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "getAppVersion",
        "getAppPath",
        "jumpPage",
        "relaunchApp",
        "exitApp",
        "snapShot",
        "setAlwaysOnTop",
        "openFileDialog",
        "openDirDialog",
        "openSaveDialog",
        "openFileOrDirBySystem"
      ]
    },
    {
      title: "窗口",
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "changeWindowState",
        "maximize",
        "minimize",
        "normal",
        "setSize",
        "fullScreen",
        "closeWindow",
        "reload",
        "openWindow",
        "getWindowBounds",
        "getWindowSize",
        "getWindowPosition",
        "setWindowAble",
        "setWindowPosition",
        "setWindowBounds"
      ]
    }
  ];
}
function getLoggerSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "",
        "start",
        "info",
        "error",
        "log",
        "readLog",
        "removeLog",
        "query"
      ]
    }
  ];
}
function getTestSiderBar(title) {
  return [
    {
      title,
      collapsable: false,
      sidebarDepth: 0,
      children: [["", "Demo"]]
    }
  ];
}

const path = require("path");
const slugify = require("transliteration").slugify;
const tools = require("./theme/util/tools");
// const isEnvProduction = process.env.NODE_ENV === 'production'

// if(typeof window !== 'undefined'){
//   head.push(['link',{href:'/libs/neosui/neosui.min.css',rel:"stylesheet"}])
//   head.push(['script',{src:'/libs/vue.min.js'}])
//   head.push(['script',{src:'/libs/neosui/neosui.umd.min.js'}])
// }
module.exports = {
  title: "NeosJS开发文档",
  description: "NeosJS文档",
  dest: "./dist",
  head:[
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    // ['link',{ href:'/libs/neosui/neosui.min.css',rel:"stylesheet" }],
    // ['script',{src:'/libs/vue.min.js'}],
    // ['script',{src:'/libs/neosui/neosui.umd.min.js'}]
  ],
  themeConfig: {
    nav: [
      // { text: "首页", link: "/" },
      { text: "IpcMessage", link: "/ipc/" },
      { text: "Native", link: "/native/get/getAppVersion.html" },
      { text: "Updater", link: "/updater/" },
      { text: "DataBase", link: "/db/" },
      // { text: "Downloader", link: "/downloader/", deprecated: true },
      { text: "Downloader 3.0", link: "/downloader/" },
      { text: "Recorder", link: "/recorder/" },
      { text: "Graffiti", link: "/graffiti/" },
      { text: "Camera", link: "/camera/" },
      { text: "Net", link: "/net/" },
      { text: "Like", link: "/like/" },
      // { text: "Logger", link: "/logger/" },
      { text: "Components", link: "/components/", new: true }
      // { text: "Utils", link: "/utils/is.html" }
    ],
    sidebar: {
      "/ipc/": getIpcSiderBar("IpcMessage"),
      "/native/": getNativeSiderBar("NativeApi"),
      "/updater/": getUpdaterSiderBar("UpdaterApi"),
      "/logger/": getLoggerSiderBar("LoggerApi"),
      "/db/": getDBSiderBar("DataBaseApi"),
      "/recorder/": getRecorderSiderBar("RecorderApi"),
      "/graffiti/": getGraffitiSiderBar("Graffiti"),
      "/camera/": getCameraSiderBar("Camera"),
      // "/downloader/": getDownloaderSiderBar2("DownloaderApi"),
      "/downloader/": getDownloaderSiderBar("DownloaderApi 3.0"),
      "/net/": getNetSiderBar("NetApi"),
      "/like/": getLikeSiderBar("LikeApi"),
      "/components/": getComponentsSiderBar("Components")
      // "/utils/": getUtilsSiderBar("UtilsApi")
    },
    lastUpdated: "上次更新",
    smoothScroll: true
  },
  plugins: [
    "@vuepress/back-to-top",
    [
      "@vuepress/last-updated",
      {
        transformer: timestamp => {
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
          message: "文档有更新啦 ^_^",
          buttonText: "获取新内容"
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
    // config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js').end();
    config.resolve.alias.set("@imgs", path.resolve(__dirname, "public/imgs/")).end();
    config.resolve.alias.set("utils", path.resolve(__dirname, "../../neosui/utils")).end();
    config.resolve.alias.set("packages", path.resolve(__dirname, "../../packages")).end();
    config.resolve.alias.set("neosui", path.resolve(__dirname, "../../neosui")).end();
    // config
    //   .externals({
    //     vue: "Vue"
    //   })
    //   .end();
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
      collapsable: true,
      sidebarDepth: 0,
      children: [""]
    },
    {
      title: "系统能力",
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "get/getAppVersion",
        "get/getAppPath",
        "get/getPathByName",
        "get/getClientInfo",
        "get/getMediaAccessStatus",
        "get/getMediaAccess",
        "get/getDeviceInfo",
        "jumpPage",
        "relaunchApp",
        "exitApp",
        "snapShot",
        "set/setAlwaysOnTop",
        "addElementDrag",
        "removeElementDrag",
        "registerShortcut",
        "open/openFileDialog",
        "open/openDirDialog",
        "open/openSaveDialog",
        "open/openDirBySystem",
        "open/openFile",
        "open/openFileBySystem",
        "open/openFileOrDirBySystem",
        "cleanCache",
        "cleanStorage",
        "cleanFiles",
        "clipboard"
        // {
        //   title: "通用",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "get/getAppVersion",
        //     "get/getAppPath",
        //     "get/getClientInfo",
        //     "jumpPage",
        //     "relaunchApp",
        //     "exitApp",
        //     "snapShot",
        //     "set/setAlwaysOnTop",
        //     "addElementDrag",
        //     "removeElementDrag",
        //     "registerShortcut"
        //   ]
        // },
        // {
        //   title: "目录、文件",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "open/openFileDialog",
        //     "open/openDirDialog",
        //     "open/openSaveDialog",
        //     "open/openDirBySystem",
        //     "open/openFileBySystem",
        //     "open/openFileOrDirBySystem"
        //   ]
        // },
        // {
        //   title: "缓存",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: ["cleanCache", "cleanStorage"]
        // }
      ]
    },
    {
      title: "窗口能力",
      collapsable: true,
      sidebarDepth: 0,
      children: [
        "elementDrag",
        "loadUrl",
        "loadFile",
        "set/setWindowState",
        "changeWindowState",
        "maximize",
        "minimize",
        "normal",
        "closeWindow",
        "reload",
        "open/openWindow",
        "get/getWindowState",
        "get/getWindowBounds",
        "get/getWindowSize",
        "get/getWindowPosition",
        "set/setSize",
        "set/setWindowMinSize",
        "set/setWindowMaxSize",
        "set/setWindowLimitSize",
        "set/setWindowCenter",
        "set/setFullscreen",
        "fullScreen",
        "set/setWindowAble",
        "set/setWindowPosition",
        "set/setWindowBounds"
        // {
        //   title: "通用",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "loadUrl",
        //     "loadFile",
        //     "set/setWindowState",
        //     "changeWindowState",
        //     "maximize",
        //     "minimize",
        //     "normal",
        //     "closeWindow",
        //     "reload",
        //     "open/openWindow",
        //     "get/getWindowState",
        //     "get/getWindowBounds",
        //     "get/getWindowSize",
        //     "get/getWindowPosition",
        //     "set/setSize",
        //     "set/setWindowMinSize",
        //     "set/setWindowMaxSize",
        //     "set/setWindowLimitSize",
        //     "set/setWindowCenter",
        //     "set/setFullscreen",
        //     "fullScreen",
        //     "set/setWindowAble",
        //     "set/setWindowPosition",
        //     "set/setWindowBounds"
        //   ]
        // },
        // {
        //   title: "获取",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "get/getWindowState",
        //     "get/getWindowBounds",
        //     "get/getWindowSize",
        //     "get/getWindowPosition"
        //   ]
        // },
        // {
        //   title: "设置",
        //   collapsable: true,
        //   sidebarDepth: 0,
        //   children: [
        //     "set/setSize",
        //     "set/setWindowMinSize",
        //     "set/setWindowMaxSize",
        //     "set/setWindowLimitSize",
        //     "set/setWindowCenter",
        //     "set/setFullscreen",
        //     "fullScreen",
        //     "set/setWindowAble",
        //     "set/setWindowPosition",
        //     "set/setWindowBounds"
        //   ]
        // }
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
      children: ["", "start", "info", "error", "log", "readLog", "removeLog", "query"]
    }
  ];
}
function getDBSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "createCol", "insert", "find", "update", "remove", "getState", "drop"]
    }
  ];
}

function getUpdaterSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "",
        "autoCheckUpdates",
        "checkUpdates",
        "downloadUpdates",
        "checkUpdatesMain",
        "download",
        "installUpdates"
      ]
    }
  ];
}

function getRecorderSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "",
        "isSupport",
        "init",
        "getDeviceLists",
        "open",
        "start",
        "stop",
        "close",
        "pause",
        "resume",
        "getBlob",
        "play",
        "destroy"
      ]
    }
  ];
}

function getDownloaderSiderBar2(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "",
        "extractZip",
        "checkCourseware",
        "downloadCourseware",
        "downloadFiles",
        "download",
        "downloadUpdates"
      ]
    }
  ];
}

function getDownloaderSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "checkCourseware", "downloadCourseware", "downloadUpdates", "downloadFile", "extractZip"]
    }
  ];
}

function getNetSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "checkNetSpeed", "reportNetSpeed", "getFastDomain"]
    }
  ];
}

function getUtilsSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["is", "get"]
    }
  ];
}

function getGraffitiSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: [
        "",
        "init",
        "lineColor",
        "lineSize",
        "eraserSize",
        "eraser",
        "prev",
        "next",
        "clear",
        "destroy",
        "createImage",
        "saveImage"
      ]
    }
  ];
}

function getCameraSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "init", "getDeviceLists", "startCapture", "stopCapture", "changeDeviceId", "photoShot", "destroy"]
    }
  ];
}

function getLikeSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "init", "destroy"]
    }
  ];
}

function getComponentsSiderBar(groupTitle) {
  return [
    {
      title: groupTitle,
      collapsable: false,
      sidebarDepth: 0,
      children: ["", "icon","loading", "clockCountdown", "pieCountdown"]
    }
  ];
}
function getTestSiderBar(title) {
  return [
    {
      title,
      collapsable: false,
      sidebarDepth: 0,
      children: [""]
    }
  ];
}

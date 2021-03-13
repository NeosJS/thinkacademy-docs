(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{444:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("监听消息 "),s("BadgeTip",{attrs:{text:"main",type:"green"}}),t._v(" "),s("BadgeTip",{attrs:{text:"renderer",type:"green"}}),t._v(" "),s("BadgeTip",{attrs:{text:"worker",type:"green"}})],1),t._v(" "),s("p",[t._v("监听进程之间的消息")]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"messagecenter.on-channel-listener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#messagecenter.on-channel-listener"}},[t._v("#")]),t._v(" "),s("code",[t._v("messageCenter.on(channel,listener)")])]),t._v(" "),s("p",[t._v("监听 "),s("code",[t._v("channel")]),t._v("，当接收到新的消息时 "),s("code",[t._v("listener")]),t._v(" 会以 "),s("code",[t._v("listener(args...)")]),t._v(" 的形式被调用。")]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"ipcmainmanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipcmainmanager"}},[t._v("#")]),t._v(" ipcMainManager")]),t._v(" "),s("p",[t._v("进程："),s("a",{attrs:{href:"https://www.electronjs.org/docs/glossary#main-process",target:"_blank",rel:"noopener noreferrer"}},[t._v("主进程"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("从主进程到渲染进程的异步通信。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipcMainManager "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/electron-ipc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messageCenter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ipcMainManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"shi-li-dai-ma"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shi-li-dai-ma"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("messageCenter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closeWindow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"ipcrenderermanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipcrenderermanager"}},[t._v("#")]),t._v(" ipcRendererManager")]),t._v(" "),s("p",[t._v("进程："),s("a",{attrs:{href:"https://www.electronjs.org/docs/glossary#renderer-process",target:"_blank",rel:"noopener noreferrer"}},[t._v("渲染进程"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("从渲染进程到主进程的异步通信。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipcRendererManager "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/electron-ipc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messageCenter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ipcRendererManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"shi-li-dai-ma-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shi-li-dai-ma-2"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("messageCenter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closeWindow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"ipcworkermanager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipcworkermanager"}},[t._v("#")]),t._v(" ipcWorkerManager")]),t._v(" "),s("p",[t._v("进程："),s("a",{attrs:{href:"https://nodejs.org/api/child_process.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("子进程"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("从渲染进程、主进程到子进程的异步通信。")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipcWorkerManager "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/electron-ipc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messageCenter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ipcWorkerManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"shi-li-dai-ma-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shi-li-dai-ma-3"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("messageCenter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closeWindow'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("message")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"params"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#params"}},[t._v("#")]),t._v(" Params")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("必选")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("channel")]),t._v(" "),s("td",[t._v("信号标示")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("是")])]),t._v(" "),s("tr",[s("td",[t._v("listener")]),t._v(" "),s("td",[t._v("侦听器")]),t._v(" "),s("td",[t._v("Function")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("否")])]),t._v(" "),s("tr",[s("td",[t._v("-- args")]),t._v(" "),s("td",[t._v("参数")]),t._v(" "),s("td",[t._v("any[]")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("否")])])])]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#api"}},[t._v("API")])]),s("li",[s("a",{attrs:{href:"#ipcmainmanager"}},[t._v("ipcMainManager")])]),s("li",[s("a",{attrs:{href:"#ipcrenderermanager"}},[t._v("ipcRendererManager")])]),s("li",[s("a",{attrs:{href:"#ipcworkermanager"}},[t._v("ipcWorkerManager")])]),s("li",[s("a",{attrs:{href:"#params"}},[t._v("Params")])])])]),s("p")])}),[],!1,null,null,null);a.default=n.exports}}]);
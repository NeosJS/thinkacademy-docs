(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{474:function(t,a,s){"use strict";s.r(a);var e=s(27),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",[t._v("拖拽元素")]),t._v(" "),s("p",[t._v("拖拽某个dom时，被拖拽的dom将在指定的节点内移动。")]),t._v(" "),s("h2",{attrs:{id:"api-jie-kou"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api-jie-kou"}},[t._v("#")]),t._v(" API 接口")]),t._v(" "),s("h3",{attrs:{id:"nativeapi.elementdrag-options-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nativeapi.elementdrag-options-object"}},[t._v("#")]),t._v(" "),s("code",[t._v("nativeApi.elementDrag(options: <Object>)")])]),t._v(" "),s("h3",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),s("h2",{attrs:{id:"shi-li-dai-ma"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shi-li-dai-ma"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" nativeApi "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/electron-ipc'")]),t._v("\n\nnativeApi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("elementDrag")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  dragDom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'drag'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要移动的dom节点")]),t._v("\n  areaDom"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'area'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移动范围的dom节点")]),t._v("\n  className"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// dom移动时需要额外添加的类名")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"can-shu"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-shu"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("可选值")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("是否必选")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("dragDom")]),t._v(" "),s("td",[t._v("需要移动的dom节点("),s("strong",[t._v("id选择器")]),t._v(")")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("是")])]),t._v(" "),s("tr",[s("td",[t._v("areaDom")]),t._v(" "),s("td",[t._v("移动范围的dom节点("),s("strong",[t._v("id选择器")]),t._v(")")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("是")])]),t._v(" "),s("tr",[s("td",[t._v("className")]),t._v(" "),s("td",[t._v("dom移动时需要额外添加的类名")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("—")]),t._v(" "),s("td",[t._v("否")])])])]),t._v(" "),s("div",{staticClass:"sealui-customblock is-info",staticStyle:{"padding-left":"3.5rem"}},[s("div",{staticClass:"sealui-customblock__icon"},[s("i",{staticClass:"sealui-icon-info"})]),t._v(" "),s("p",[t._v("请注意：该API功能和 "),s("RouterLink",{attrs:{to:"/native/addElementDrag.html"}},[t._v("addElementDrag")]),t._v(" 不一样。 addElementDrag 是添加一个元素，让其控制"),s("strong",[t._v("整个窗口移动")]),t._v("。本接口是控制某个元素在窗口范围内的移动。")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);
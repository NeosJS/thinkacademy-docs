(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{338:function(t,e,a){},339:function(t,e,a){},377:function(t,e,a){"use strict";var n=a(338);a.n(n).a},378:function(t,e,a){t.exports=a.p+"assets/img/bg.dc1e8779.jpg"},379:function(t,e,a){"use strict";var n=a(339);a.n(n).a},389:function(t,e,a){"use strict";a.r(e);var n=a(375),i=a.n(n),o=a(349),s={name:"BtnLink",props:{link:{required:!0}}},r=(a(377),a(27)),c=Object(r.a)(s,(function(){var t=this.$createElement;return(this._self._c||t)("RouterLink",{staticClass:"btn-link",attrs:{to:this.link}},[this._t("default")],2)}),[],!1,null,null,null).exports,d=a(378),l=a.n(d),u={components:{NavLink:o.a,BtnLink:c},data:function(){return{bg:l.a}},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}},actionLink1:function(){return{link:this.data.actionLink1,text:this.data.actionText1}},actionLink2:function(){return{link:this.data.actionLink2,text:this.data.actionText2}},actionLink3:function(){return{link:this.data.actionLink3,text:this.data.actionText3}},actionLink4:function(){return{link:this.data.actionLink4,text:this.data.actionText4}},actionLink5:function(){return{link:this.data.actionLink5,text:this.data.actionText5}},actionLink6:function(){return{link:this.data.actionLink6,text:this.data.actionText6}},actionLink7:function(){return{link:this.data.actionLink7,text:this.data.actionText7}},actionLink8:function(){return{link:this.data.actionLink8,text:this.data.actionText8}},actionLink9:function(){return{link:this.data.actionLink9,text:this.data.actionText9}},actionLink10:function(){return{link:this.data.actionLink10,text:this.data.actionText10}},actionLink11:function(){return{link:this.data.actionLink11,text:this.data.actionText11}}},mounted:function(){var t=i()();t.on("type:start, erase:start",(function(){t.getCurrentActor().$element.classList.add("typing")})).on("type:end, erase:end",(function(){t.getCurrentActor().$element.classList.remove("typing")})),t.addActor("mainTitle",{speed:1,accuracy:1}).addScene("mainTitle:".concat(this.$title),600),t.addActor("description",{speed:.5,accuracy:1}).addScene("description:".concat(this.data.tagline),600),t.addActor("line",{speed:.5,accuracy:1}).addScene(300).addScene("line:只为让你：",500).addScene((function(e){!function t(e){e.addScene("少加班，多恋爱",1800,-7,600).addScene("少搬砖，把酒干",1800,-7,700).addScene("少抓头发，把灯开",1800,-8,800).addScene((function(a){t(e),a()}))}(t),e()}))}},h=(a(379),Object(r.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[a("div",{staticClass:"bg",style:"background:url("+t.bg+") no-repeat;background-size:90%;background-position: 15rem top;opacity: .5;"}),t._v(" "),a("header",{staticClass:"hero"},[t.data.heroImage?a("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?a("h1",{staticStyle:{"text-align":"left","margin-left":"36rem",width:"50rem",height:"60px"},attrs:{id:"mainTitle"}}):t._e(),t._v(" "),a("p",{staticClass:"description",staticStyle:{"text-align":"left","margin-left":"36rem",width:"58rem",height:"33px"},attrs:{id:"description"}}),t._v(" "),a("p",{staticClass:"description",staticStyle:{"text-align":"left","margin-left":"36rem",width:"66rem",height:"33px","margin-top":"-20px"},attrs:{id:"line"}}),t._v(" "),t.data.features&&t.data.features.length?a("div",{staticClass:"features",staticStyle:{"margin-left":"36rem","text-align":"left"}},t._l(t.data.features,(function(e,n){return a("div",{key:n,staticClass:"feature"},[a("h2",[t._v(t._s(e.title))]),t._v(" "),a("p",[t._v(t._s(e.details))]),t._v(" "),a("BtnLink",{attrs:{link:e.link}},[t._v("查看详情")])],1)})),0):t._e()]),t._v(" "),a("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?a("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),f=a(357),p=a(354),g=a(360),m=a(313),b=(a(353),{components:{Home:h,Page:p.a,Sidebar:g.a,Navbar:f.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(m.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}}),k=Object(r.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar&&!t.$page.frontmatter.home?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),a("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?a("Home"):a("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=k.exports}}]);
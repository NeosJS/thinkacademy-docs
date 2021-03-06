<template>
<div class="theme-container components" :class="pageClasses" @touchstart="onTouchStart" @touchend="onTouchEnd">
    <Navbar v-if="shouldShowNavbar && !$page.frontmatter.home" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)"></div>

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <main class="page">
      <div class="theme-default-content content__default">
        <h1>组件列表 <badge-tip text="组件暂未发布至安装源" type="danger" /></h1>
        <p>提供一些常用的基础组件。</p>

        <div class="ui-list">
          <nav class="list-group">
            <RouterLink class="list-group-item list-group-item-action" to="colors">
              <strong>Colors</strong> — <span>避免视觉传达差异，使用一套特定的调色板来规定颜色，为产品提供一致的外观视觉感受。</span>
            </RouterLink>
            <!-- <RouterLink class="list-group-item list-group-item-action" to="logo">
              <strong>Logo</strong> — <span></span>
            </RouterLink> -->
            <RouterLink class="list-group-item list-group-item-action" to="button">
              <strong>Button</strong> — <span>标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。</span>
            </RouterLink>
            <RouterLink class="list-group-item list-group-item-action" to="icon">
              <strong>Icon</strong> — <span>提供了一套项目里常用的图标集合。</span>
            </RouterLink>
            <RouterLink class="list-group-item list-group-item-action" to="tooltip">
              <strong>Tooltip</strong> — <span>文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。</span>
            </RouterLink>
            <RouterLink class="list-group-item list-group-item-action" to="toast">
              <strong>Toast</strong> — <span>Toast。</span>
            </RouterLink>
            <RouterLink class="list-group-item list-group-item-action" to="alert">
              <strong>Alert</strong> — <span>Alert。</span>
            </RouterLink>
            <RouterLink class="list-group-item list-group-item-action" to="progress">
              <strong>Progress</strong> — <span>Progress。</span>
            </RouterLink>
            <RouterLink class="list-group-item list-group-item-action" to="loader">
              <strong>Loader</strong> — <span>加载数据时显示动效。</span>
            </RouterLink>
            <RouterLink class="list-group-item list-group-item-action" to="clockCountdown">
              <strong>ClockCountdown</strong> — <span>指针倒计时。指针倒计时，指针走动一圈，倒计时结束。</span>
            </RouterLink>
            <RouterLink class="list-group-item list-group-item-action" to="clockCountdown">
              <strong>PieCountdown</strong> — <span>扇形倒计时。扇形倒计时，转动一圈倒计时结束。</span>
            </RouterLink>

          </nav>
        </div>
      </div>
    </main>

    <PageEdit />
    <PageNav v-bind="{ sidebarItems }" />

</div>
</template>

<script>
import Navbar from '@theme/components/Navbar.vue'
import Sidebar from '@theme/components/Sidebar.vue'
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import { resolveSidebarItems } from '../util'
import watermark from '../watermark'
export default {
  components: { PageEdit,PageNav,Sidebar, Navbar },
  data() {
    return {
      isSidebarOpen: false
    }
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site
      const { frontmatter } = this.$page
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false
      }
      return this.$title || themeConfig.logo || themeConfig.repo || themeConfig.nav || this.$themeLocaleConfig.nav
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page
      return !frontmatter.home && frontmatter.sidebar !== false && this.sidebarItems.length
    },

    sidebarItems() {
      return resolveSidebarItems(this.$page, this.$page.regularPath, this.$site, this.$localePath)
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    })
    watermark.set('NeosJS')
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
      this.$emit('toggle-sidebar', this.isSidebarOpen)
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'
</style>
<style lang="scss" src="@theme/styles/ui.scss" scoped></style>
<style lang="scss">
.page{
  min-height: calc(100% - 12rem)
}
</style>

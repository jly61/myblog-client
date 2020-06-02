<template>
  <div class="nav-wrapper">
    <h1>橘·瑠衣</h1>
    <nav v-if="showNav" @click="onCloseClick">
      <router-link to="/" class="router">首页</router-link>
      <router-link to="/blog" class="router">分类</router-link>
<!--      <router-link to="/" class="router">杂项</router-link>-->
      <router-link to="/self" class="router">个人</router-link>
      <a href="https://github.com/Lovelesss" class="router" target="_blank">GitHub</a>
    </nav>
    <div class="nav-bar-menu" :class="{transparent: showNav}">
      <i class="iconfont icon-caidan" @click="onMenuClick" v-if="!showNav"></i>
      <i class="iconfont icon-guanbi" @click="onCloseClick" v-if="showNav"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    data () {
      return {
        showNav: false,
        toShow: 'toShow',
        toHidden: 'toHidden',
        clientWidth: 0
      }
    },
    watch: {
      clientWidth (val) {
        this.clientWidth = val
        this.showNav = this.clientWidth > 769
      }
    },
    created () {
      this.clientWidth = document.body.clientWidth
      window.addEventListener('resize', () => {
        this.clientWidth = document.body.clientWidth
      })
    },
    methods: {
      onMenuClick () {
        this.showNav = true
        document.documentElement.style.overflowY = 'hidden'
      },
      onCloseClick () {
        if (this.clientWidth <= 768) {
          this.showNav = false
        }
        document.documentElement.style.overflowY = 'scroll'
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 80px;
    position: fixed;
    height: 60px;
    background: #fff;
    z-index: 999;
    box-sizing: border-box;
    color: #444;
    h1 {
      font-size: 22px;
    }
    nav {
      .router {
        margin-left: 40px;
        color: #444;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    .nav-bar-menu {
      display: none;
    }
  }
  @media (max-width: 769px) {
    .nav-wrapper {
      padding: 0 20px;
      /*opacity: .95;*/
      border: none;
      h1 {
      }
      nav {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        background: #fff;
        .router {
          box-sizing: border-box;
          border-bottom: 1px solid #eee;
          padding-left: 20px;
          background: #fff;
          height: 40px;
          line-height: 40px;
          margin-left: 0;
          &:hover {
            text-decoration: none;
          }
        }
      }
      .nav-bar-menu {
        display: block;
        i {
          font-size: 36px;
        }
      }
    }
  }
</style>

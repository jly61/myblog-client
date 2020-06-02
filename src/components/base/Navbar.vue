<template>
  <div class="nav-bar-wrapper">
    <div class="nav-bar">
      <h1 class="title" :class="{show: showNav}">橘·瑠衣</h1>
      <div class="nav-bar-menu" :class="{transparent: showNav}">
        <i class="iconfont icon-caidan" @click="onMenuClick" v-if="!showNav"></i>
        <i class="iconfont icon-guanbi" @click="onCloseClick" v-if="showNav"></i>
      </div>
    </div>
    <div class="nav-info" v-if="showNav" :class="showNav ? toShow : toHidden">
      <ul @click="onCloseClick">
        <router-link to="/" class="router">首页</router-link>
        <router-link to="/blog" class="router">博文</router-link>
        <router-link to="/" class="router">杂项</router-link>
        <router-link to="/" class="router">个人</router-link>
        <a href="https://github.com/Lovelesss" class="router" target="_blank">GitHub</a>
        <router-link to="/login" class="router">登录</router-link>
        <router-link to="/register" class="router">注册</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    data () {
      return {
        showNav: false,
        toShow: 'toShow',
        toHidden: 'toHidden'
      }
    },
    methods: {
      onMenuClick () {
        this.showNav = true
        document.documentElement.style.overflowY = 'hidden'
      },
      onCloseClick () {
        this.showNav = false
        document.documentElement.style.overflowY = 'scroll'
      }
    }
  }
</script>

<style scoped lang="scss">
  .nav-bar-wrapper {
    position: relative;
    .nav-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      width: 100%;
      top: 70px;
      padding: 0 60px;
      box-sizing: border-box;
      z-index: 99;
      .title {
        color: #fff;
        font-size: 26px;
      }
      // 导航栏展开时logo的样式
      .show {
        color: #666;
      }
      .nav-bar-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 32px;
        height: 32px;
        background: #fff;
        .transparent {
          background: red;
        }
        &:hover {
          cursor: pointer;
        }
        i {
          color: red;
          font-size: 24px;
        }
      }
    }
    .nav-info {
      position: fixed;
      padding-top:200px;
      box-sizing: border-box;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: aquamarine;
      z-index: 90;
      background: rgba(255, 255, 255, .96);
      ul {
        text-align: center;
       .router {
         box-sizing: border-box;
         font-size: 20px;
         color: #666;
         margin-right: 20px;
        }
      }
    }
  }
  // 动画
  .toShow {
    animation: fadeInDown 1s;
  }
  // 暂时没用
  .toHidden {
    animation: fadeOutDown 1s;
  }
  // 从上淡入
  @keyframes fadeInDown {
    from {
      transform: translate(0, -100vh);
    }
    to {
      transform: translate(0, 0);
    }
  }
  // 从下淡出
  @keyframes fadeOutDown {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, -100vh);
    }
  }
  // 兼容移动端
  @media (max-width: 768px) {
    .nav-bar-wrapper {
      .nav-bar {
        top: 30px;
        padding: 0 20px;
      }
      .nav-info {
        ul {
          width: 60%;
          margin:  0 auto;
          display: flex;
          flex-flow: wrap;
          justify-content: center;
          align-items: center;
          .router {
            height: 30px;
            line-height: 30px;
            font-size: 16px;
            width: 30%;
            box-sizing: border-box;
            margin: 0;
          }
        }
      }
    }
  }
</style>

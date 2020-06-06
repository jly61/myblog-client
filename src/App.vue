<template>
  <div id="app">
<!--    <Loading v-if="isShowLoading" />-->
    <Nav/>
    <BackTop/>
    <transition :name="transitionName" mode="out-in">
      <keep-alive>
        <router-view class="view" v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition :name="transitionName" mode="out-in">
      <router-view class="view" v-if="!$route.meta.keepAlive" />
    </transition>
<!--    <Footer />-->
  </div>
</template>

<script>
  import Nav from './components/base/Nav'
  import BackTop from './components/base/BackTop'
  // import Footer from './components/base/Footer'
  // import Loading from './components/base/Loading'

  export default {
    components: {
      Nav,
      BackTop
      // Footer
      // Loading
    },
    data () {
      return {
        transitionName: ''
        // isShowLoading: true
      }
    },
    created () {
      window.addEventListener('beforeunload', () => {
        window.scrollTo(0, 0)
      })
    },
    watch: {
      $route (to, from) {
        this.isShowFooter = false
        setTimeout(() => {
          // this.isShowLoading = false
        })
        if (to.meta.index > from.meta.index) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
      }
    }
  }
</script>
<style lang="scss">
  #app {
    width: 100%;
    min-height: 100vh;
    position: relative;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    .slide-right-enter-active,
    .slide-right-leave-active,
    .slide-left-enter-active,
    .slide-left-leave-active {
      will-change: transform;
      transition: all 300ms;
      position: absolute;
    }
    .slide-right-enter {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    .slide-right-leave-active {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .slide-left-enter {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    .slide-left-leave-active {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
</style>

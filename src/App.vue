<template>
  <div id="app">
    <Nav/>
    <BackTop/>
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view class="transitionBody" v-if="$route.meta.keepAlive" />
      </keep-alive>
    </transition>
    <transition name="fade" mode="out-in">
      <router-view class="transitionBody" v-if="!$route.meta.keepAlive" />
    </transition>
    <Footer/>
  </div>
</template>

<script>
  import Nav from './components/base/Nav'
  import BackTop from './components/base/BackTop'
  import Footer from './components/base/Footer'

  export default {
    components: {
      Nav,
      BackTop,
      Footer
    }
  }
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    .fade-enter {
      opacity: 0;
    }

    .fade-leave {
      opacity: 1;
    }

    .fade-enter-active {
      transition: opacity 1s;
    }

    .fade-leave-active {
      opacity: 0;
      transition: opacity .3s;
    }
  }
</style>

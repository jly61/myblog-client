<template>
    <div class="back-top" v-if="isShow" @click="onBackTop">
      <i class="iconfont icon-huojian"></i>
    </div>
</template>

<script>
  export default {
    name: 'BackTop',
    data () {
      return {
        scrollTop: 0
      }
    },
    computed: {
      isShow () {
        return this.scrollTop > 200
      }
    },
    mounted () {
      window.addEventListener('scroll', this.getScrollTop)
    },
    methods: {
      getScrollTop () {
        this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      },
      onBackTop () {
        document.documentElement.scrollTop = document.body.scrollTop = 0
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.getScrollTop)
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/iconfont/iconfont.css";
  .back-top {
    position: fixed;
    right: 10px;
    bottom: 40px;
    z-index: 1000;
    &:hover {
      cursor: pointer;
    }
    i {
      font-size: 50px;
    }
  }
  @media (max-width: 768px) {
    .back-top {
      i {
        font-size: 40px;
        color: #8a8a8a;
      }
    }
  }
</style>

<template>
    <div class="self">
<!--      <Banner />-->
      <SelfAbout />
    </div>
</template>

<script>
  import SelfAbout from '../../components/self/SelfAbout'
  export default {
    name: 'self',
    components: {
      SelfAbout
    },
    beforeRouteLeave (to, from, next) {
      to.meta.keepAlive = false
      next()
    }
  }
</script>

<style scoped lang="scss">
  .self {
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    padding: 100px 0 80px;
    min-height: calc(100vh - 200px);
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
    .self {
      height: 90vh;
      padding: 50px 20px 80px;
      box-sizing: content-box;
    }
  }
</style>
<style lang="scss">
  /*.home-footer {*/
  /*  display: none !important;*/
  /*}*/
</style>

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
    }
  }
</script>

<style scoped lang="scss">
  .self {
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    padding-top: 150px;
    min-height: 90vh;
    box-sizing: border-box;
  }
  @media (max-width: 768px) {
    .self {
      height: 90vh;
      padding: 50px 20px 0;
    }
  }
</style>
<style lang="scss">
  .home-footer {
    display: none !important;
  }
</style>

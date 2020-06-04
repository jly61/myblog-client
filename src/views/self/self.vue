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
    align-items: center;
    height: 80vh;
  }
  @media (max-width: 768px) {
    .self {
      height: 90vh;
      padding: 0 20px;
    }
  }
</style>
<style lang="scss">
  .home-footer {
    display: none !important;
  }
</style>

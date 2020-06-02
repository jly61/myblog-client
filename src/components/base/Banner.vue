<template>
  <div class="banner">
  </div>
</template>

<script>
  export default {
    name: 'Banner'
  }
</script>

<style scoped lang="scss">
  .banner {
    height: 300px;
    background: url("../../assets/images/home_banner.png") no-repeat center center;
  }
  @media (max-width: 768px) {
    .banner {
      max-height: 240px;
    }
  }
</style>

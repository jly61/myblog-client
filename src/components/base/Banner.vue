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
    background: url("http://qbaj8dxcr.bkt.clouddn.com/bg.jpg") no-repeat center center;
    background-size: cover;
  }
  @media (max-width: 768px) {
    .banner {
      max-height: 240px;
    }
  }
</style>

<template>
  <div class="loading">
    <div class="dialog">
      欢迎进入
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style scoped lang="scss">
  .loading {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #efefef;
    width: 100%;
    height: 100vh;
    z-index: 10000;
    /*animation: fadeOut 3s;*/
    -webkit-animation-fill-mode: forwards;
    .dialog {
      width: 80px;
      height: 60px;
      line-height: 60px;
      font-size: 14px;
      text-align: center;
      color: #fff;
      opacity: .8;
      background: #666666;
      border-radius: 10px;
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>

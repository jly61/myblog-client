<template>
    <div class="dialog">
      <button>
        {{msg}}
      </button>
    </div>
</template>

<script>
  export default {
    name: 'MessageDialog',
    props: {
      msg: String
    }
  }
</script>

<style scoped lang="scss">
  .dialog {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 150;
    animation: btnFadeIn 2s;
    -webkit-animation-fill-mode: forwards;
    button {
      padding: 5px 15px;
      height: 30px;
      outline: none;
      font-size: 12px;
      color: #555;
      border: 1px solid #eaeaea;
      border-radius: 5px;
      background: #fff;
      box-shadow: 5px 5px -5px -5px #eaeaea;
    }
    @keyframes btnFadeIn {
      0% {
        opacity: 0;
        top: 10%
      }
      100% {
        opacity: 1;
        top: 20%
      }
    }
  }
</style>

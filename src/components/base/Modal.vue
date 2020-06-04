<template>
    <div class="modal"></div>
</template>

<script>
  export default {
    name: 'Modal'
  }
</script>

<style scoped>
  .modal {
    position: fixed;
    /*bottom: 10px;*/
    width: 100%;
    height: 100vh;
    z-index: 50;
    background: rgba(0, 0, 0, .2);
  }
</style>

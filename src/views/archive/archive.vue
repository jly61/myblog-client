<template>
    <div class="archive">
      <ArchiveMain />
    </div>
</template>

<script>
  import ArchiveMain from '../../components/archive/ArchiveMain'
  import { getContentList } from '../../api'

  export default {
    name: 'archive',
    components: {
      ArchiveMain
    },
    created () {
      this.getContentList()
    },
    methods: {
      getContentList () {
        getContentList().then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style scoped>
  .archive {
    display: flex;
    justify-content: center;
    height: 100vh;
    padding-top: 100px;
    background: #efefef;
  }
</style>

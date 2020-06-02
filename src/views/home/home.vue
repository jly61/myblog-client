<template>
  <div class="home">
    <HomeBanner />
    <HomeContent
      :contentList="contentList"
      @onMoreClick="onMoreClick"
    />
    <MessageDialog v-if="isShowDialog" msg="没有更多文章了"/>
  </div>
</template>

<script>
  import HomeBanner from '../../components/home/HomeBanner'
  import HomeContent from '../../components/home/HomeContent'
  import MessageDialog from '../../components/base/MessageDialog'
  import { getContentList } from '../../api'

  export default {
    name: 'home',
    components: {
      HomeBanner,
      HomeContent,
      MessageDialog
    },
    data () {
      return {
        contentList: [],
        page: 1,
        isShowDialog: false
      }
    },
    created () {
      this.$nextTick(() => {
        this.getContentList()
      })
    },
    mounted () {
    },
    methods: {
      // 获取文章列表
      getContentList () {
        const params = {
          page: this.page
        }
        getContentList(params).then(res => {
          const data = res.data
          if (data.status === 0) {
            if (data.result.length === 0) {
              this.isShowDialog = true
              setTimeout(() => {
                this.isShowDialog = false
              }, 2000)
              return
            }
            this.contentList.push(...data.result)
          }
        })
      },
      // 点击加载更多
      onMoreClick () {
        this.page++
        this.getContentList()
      }
    }
  }
</script>

<style scoped lang="scss">
</style>

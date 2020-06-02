<template>
    <div class="blog-category">
        <Banner />
        <BlogContent :contentList="contentList" :category="category"/>
    </div>
</template>

<script>
  import Banner from '../../components/base/Banner'
  import BlogContent from '../../components/blog/BlogContent'
  import { getContentList, getCategory } from '../../api'
  export default {
    name: 'blog',
    components: {
      Banner,
      BlogContent
    },
    data () {
      return {
        contentList: [],
        category: [],
        page: 1,
        isShowDialog: false
      }
    },
    created () {
      this.$nextTick(() => {
        this.getCategory()
        this.getContentList()
      })
    },
    methods: {
      // 获取文章分类
      getCategory () {
        getCategory().then(res => {
          const data = res.data
          if (data.status === 0) {
            this.category = data.result
          }
        })
      },
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

<style scoped>
</style>

<template>
  <div class="detail">
    <Banner/>
    <DetailArticle :content="content"/>
    <!--    <DetailShare :like="like"/>-->
  </div>
</template>

<script>
  import Banner from '../../components/base/Banner'
  import DetailArticle from '../../components/detail/DetailArticle'
  // import DetailShare from '../../components/detail/DetailShare'
  import { getArticle } from '../../api'

  export default {
    name: 'detail',
    components: {
      Banner,
      DetailArticle
      // DetailShare
    },
    data () {
      return {
        content: {},
        like: {},
        lastRouter: ''
      }
    },
    mounted () {
      if (this.$route.query.title) {
        window.scrollTo(0, 0)
        this.getArticle()
      } else {
        this.$router.push('/')
      }
    },
    // 判断去往的路由是否是进来的路由，从而判断是否缓存进来的路由
    beforeRouteEnter (to, from, next) {
      from.meta.keepAlive = true
      next(vm => {
        vm.lastRouter = from.path
      })
    },
    beforeRouteLeave (to, from, next) {
      if (to.path !== this.lastRouter) {
        to.meta.keepAlive = false
        this.$store.commit('changeScrollTop', 0)
      }
      next()
    },
    methods: {
      getArticle () {
        const params = {
          title: this.$route.query.title
        }
        getArticle(params).then(res => {
          const data = res.data
          if (data.status === 0) {
            this.content = data.result[0]
            this.like = {
              likeCount: this.content.like_number,
              collectCount: this.content.collect_number
            }
            this.content.update_time = this.content.update_time.split('T')[0]
            this.content.html_str = unescape(this.content.html_str)
            this.content.md_str = unescape(this.content.md_str)
          } else {
            this.$router.push('/')
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @media (max-width: 768px) {
    .detail {
      width: 100%;
      /*padding-top: 70px;*/
      /*padding: 100px 15px;*/
      box-sizing: border-box;
    }
  }
</style>

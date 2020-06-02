<template>
  <div class="home-content">
    <div class="article-wrapper" v-for="(content, index) in contentList" :key="index">
      <a class="article-img" href="#" @click="onArticleClick(content.title)" >
        <img src="../../assets/images/article_1.jpg">
      </a>
      <div class="article">
        <div class="article-info">
          <p class="article-time">{{content.update_time}}</p>
          <h2 class="article-title">{{content.title}}</h2>
          <p class="article-desc">
            {{content.article_desc}}
          </p>
        </div>
<!--        <div class="article-icon">-->
<!--          <span>-->
<!--            <i class="iconfont icon-yanjing"></i>-->
<!--            {{content.scan_number}}围观-->
<!--          </span>-->
<!--          <span class="icon-common">-->
<!--            <i class="iconfont icon-dianzan"></i>-->
<!--            {{content.like_number}}点赞-->
<!--          </span>-->
<!--          <span class="icon-common">-->
<!--            <i class="iconfont icon-xihuan"></i>-->
<!--            {{content.collect_number}}收藏-->
<!--          </span>-->
<!--        </div>-->
      </div>
    </div>
<!--    <div class="more">-->
<!--      <button @click="onMoreClick">加 载 更 多</button>-->
<!--    </div>-->
  </div>
</template>

<script>
  export default {
    name: 'HomeContent',
    props: {
      contentList: Array
    },
    filters: {
      contentDesc (value) {
        return value.substr(0, 50)
      }
    },
    mounted () {
      this.$nextTick(() => {
        for (let i = 0; i < this.contentList.length; i++) {
          this.contentList[i].md_str = unescape(this.contentList[i].md_str)
          this.contentList[i].html_str = unescape(this.contentList[i].html_str)
        }
        console.log(this.contentList)
      })
    },
    methods: {
      onArticleClick (title) {
        this.$router.push(`/detail?title=${title}`)
      },
      onMoreClick () {
        this.$emit('onMoreClick')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/iconfont/iconfont.css";
  .home-content {
    overflow: hidden;
    padding-bottom: 100px;
    .article-wrapper {
      position: relative;
      display: flex;
      margin-top: 100px;
      justify-content: center;
      align-items: center;
      &:before {
        content: '';
        display: block;
        left: 50%;
        top: -100px;
        height: 100px;
        position: absolute;
        width: 1px;
        background: #eaeaea;
      }
      .article-img {
        width: 680px;
        height: 440px;
      }
      .article {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        width: 500px;
        height: 400px;
        box-sizing: border-box;
        padding: 80px 80px 80px 50px;
        border: 1px solid #eaeaea;
        .article-info {
          .article-time {
            font-size: 12px;
            color: #999;
          }
          .article-title {
            margin-top: 10px;
            font-size: 30px;
            color: #333;
          }
          .article-desc {
            margin-top: 20px;
            font-size: 14px;
            color: #555;
          }
        }
        .article-icon {
          font-size: 13px;
          color: #999;
          .icon-common {
            margin-left: 10px;
          }
        }
      }
    }
    .more {
      margin-top: 50px;
      text-align: center;
      button {
        width: 140px;
        outline: none;
        font-size: 14px;
        height: 40px;
        color: #555;
        border: 1px solid #eaeaea;
        background: #fff;
        border-radius: 5px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .home-content {
      .article-wrapper {
        margin-top: 50px;
        flex-flow: column;
        &:before {
          top: -50px;
          height: 50px;
        }
        .article-img {
          width: 100%;
          height: 240px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .article {
          width: 100%;
          height: 300px;
          padding: 25px 40px 50px 25px;
          .article-info {
            .article-time {
            }
            .article-title {
            }
            .article-desc {
            }
          }
          .article-icon {
            .icon-common {
            }
          }
        }
      }
    }
  }
</style>

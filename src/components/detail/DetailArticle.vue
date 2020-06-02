<template>
  <div class="detail-article">
    <div class="article-info">
      <h1>{{content.title}}</h1>
      <div class="article-desc">
        <span>最后更新时间：{{content.update_time}}</span>
<!--        <span class="icon-common">围观 {{content.scan_number}}</span>-->
<!--        <span class="icon-common">点赞 {{content.like_number}}</span>-->
<!--        <span class="icon-common">收藏 {{content.collect_number}}</span>-->
      </div>
    </div>
    <mavon-editor
      class="md"
      :value="content.md_str"
      :subfield="prop.subfield"
      :defaultOpen="prop.defaultOpen"
      :toolbarsFlag="prop.toolbarsFlag"
      :editable="prop.editable"
      :scrollStyle="prop.scrollStyle"
    />
  </div>
</template>

<script>
  export default {
    name: 'DetailArticle',
    components: {},
    props: {
      content: Object
    },
    data () {
      return {}
    },
    computed: {
      prop () {
        return {
          subfield: false, // 单双栏模式
          defaultOpen: 'preview', // edit： 默认展示编辑区域 ， preview： 默认展示预览区域
          editable: false,
          toolbarsFlag: false,
          scrollStyle: true
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .detail-article {
    max-width: 1000px;
    padding: 15px 15px 50px;
    box-sizing: border-box;
    margin: 0 auto;

    .article-info {
      text-align: center;
      border-bottom: 1px solid #eaeaea;
      padding-bottom: 20px;

      h1 {
        color: #333;
      }

      .article-desc {
        margin-top: 20px;
        font-size: 13px;
        color: #666;

        .icon-common {
          margin-left: 20px;
        }
      }
    }

    .article {
      padding-top: 20px;
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    .detail-article {
      width: 100%;
      .article-info {
        h1 {
          font-size: 20px;
        }

        .article-desc {
          .icon-common {
            margin-left: 10px;
          }
        }
      }

      .article {
      }
    }
  }
</style>
<style lang="scss">
  .md {
    z-index: 70 !important;
  }
</style>

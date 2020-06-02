<template>
  <div class="detail-share">
    <div class="share-left">
      分享到:
      <i class="iconfont icon-QQ1"></i>
      <i class="iconfont icon-weixin"></i>
      <i class="iconfont icon-weibo"></i>
    </div>
    <div class="share-right">
      <button class="btn">
        <i></i>
        喜欢 |
        <span>{{like.likeCount}}</span>
      </button>
      <button class="btn">
        <i></i>
        收藏 |
        <span>{{like.collectCount}}</span>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailShare',
    props: {
      like: Object
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/iconfont/iconfont.css";
  .detail-share {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .share-left {
      i {
        margin-left: 10px;
      }
    }
    .share-right {
      .btn {
        /*width: 60px;*/
        padding: 0 5px;
        height: 32px;
        color: green;
        background: white;
        outline: none;
        border: 1px solid green;
        border-radius: 15px;
        margin-right: 10px;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
</style>

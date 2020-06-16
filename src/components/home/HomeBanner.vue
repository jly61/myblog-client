<template>
  <div class="home-banner">
    <svg height="100%" class="bg-svg" viewBox="0 0 2880 1620" preserveAspectRatio="xMaxYMax slice">
      <polygon opacity=".7" points="0,0 600,0 2000,1620 0,1620" style="fill: rgb(176, 14, 37)"></polygon>
    </svg>
    <div class="home-desc">
      <p class="desc-time">五月 29, 2020</p>
      <div class="desc-title">前端爱好者</div>
      <p class="desc-content">终有一日，现在的我们，也终将在未来成为某人手中的古典吧！</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeBanner',
    methods: {
    }
  }
</script>

<style scoped lang="scss">
  .home-banner {
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    /*padding-left: 190px;*/
    background-size: cover;
    background: rgb(176, 14, 37) url("../../assets/images/bg.jpg") no-repeat center center;
    /*background: rgb(176, 14, 37) url("http://qbaj8dxcr.bkt.clouddn.com/bg.jpg") no-repeat center center;*/
    background-size: cover;
    color: #fff;
    box-sizing: border-box;
    .bg-svg {
      position: absolute;
    }
    .home-desc {
      position: absolute;
      max-width: 520px;
      margin-left: 190px;
      box-sizing: border-box;
      .desc-time {
        font-size: 12px;
      }
      .desc-title {
        margin-top: 15px;
        font-size: 28px;
      }
      .desc-content {
        margin-top: 20px;
        font-size: 14px;
      }
    }
  }
  @media (max-width: 768px) {
    .home-banner {
      align-items: flex-end;
      .bg-svg {
        polygon {
          opacity: .3;
        }
      }
      .home-desc {
        max-width: 68%;
        box-sizing: border-box;
        padding: 0 0 50px 15px;
        margin-left: 0;
        .desc-time {
          display: none;
        }

        .desc-title {
          font-size: 20px;
        }

        .desc-content {
          margin-top: 20px;
          font-size: 12px;
        }
      }
    }
  }
</style>

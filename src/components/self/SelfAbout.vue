<template>
  <div class="about">
    <h2>关于我</h2>
    <p>前端新人，喜欢前端。</p>
    <p>追求简单，橘瑠衣是动漫人名。</p>
    <p>喜欢看动漫，现在不怎么看了。<span>(时间)</span></p>
    <p>乒乓球也喜欢，但现在也不怎么打了。<span>(打的人太少，没人一起)</span></p>
    <h2>关于博客</h2>
    <p>之前用VuePress搭建过静态博客，觉得能自由发挥的方面太少，所以打算自行搭建。</p>
    <p>目前博客由VuePress迁移到这，刚刚上线，还存在很多问题，希望多多指出，后续不会不断完善。</p>
    <h2>博客源码</h2>
    <p>
      客户端源码：
      <a href="https://github.com/Lovelesss/myblog-client">
        https://github.com/Lovelesss/myblog-client
      </a>
    </p>
    <p>
      服务端源码：
      <a href="https://github.com/Lovelesss/myblog-server">
        https://github.com/Lovelesss/myblog-server
      </a>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'SelfAbout'
  }
</script>

<style scoped lang="scss">
  .about {
    max-width: 700px;
    color: #555;
    h2 {
      margin-top: 15px;
      font-size: 26px;
    }
    p {
      margin-top: 20px;
      span {
        text-decoration: line-through;
      }
    }
  }
  @media (max-width: 768px) {
    .about {
      color: #555;
      h2 {
        margin-top: 15px;
        font-size: 26px;
      }
      p {
        margin-top: 20px;
        span {
          text-decoration: line-through;
        }
      }
    }
  }
  a {
    color: #555;
    text-decoration: underline;
  }
</style>

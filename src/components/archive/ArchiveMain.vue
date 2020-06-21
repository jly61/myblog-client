<template>
  <div class="main">
    <div class="banner">
      <img src="https://iph.href.lu/1000x250?text=%20%E5%BD%92%E6%A1%A3&fg=666666&bg=cccccc" alt="">
    </div>
    <div class="article-wrapper">
      <div class="article-list">
        <div class="article-item">
          <ul class="year">
            2020年(多少篇)
            <li class="month">
              06月
              <ul>
                <li>
                  学习css
                </li>
                <li>
                  学习javascript
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ArchiveMain'
  }
</script>

<style scoped lang="scss">
  .main {
    max-width: 1000px;
    background: #fff;
    .banner {
      max-width: 100%;
      img {
        width: 100%;
      }
    }
    .article-wrapper {
      padding: 30px;
      .article-list {
        .article-item {
          color: #656565;
          .year {
            font-size: 24px;
            .month {
              height: 50px;
              line-height: 50px;
              font-size: 16px;
              margin-left: 20px;
              li {
                margin-left: 40px;
                height: 30px;
                line-height: 30px;
              }
            }
          }
        }
      }
    }
  }
</style>

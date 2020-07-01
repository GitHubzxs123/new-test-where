<template>
  <div>
    <div class="titles">热销推荐</div>
    <ul>
          <router-link tag="li" class="items border-bottom" to="/Detail1">
            <img class="img" src="https://p1.meituan.net/200.0/tdctraveldark/b8f37ee3aceb61a683ae9d747f72a78b4291511.jpg.webp" alt="" />
            <div class="info">
              <p class="title">失恋博物馆</p>
              <p class="desc">带给您美妙的休闲时光</p>
              <button class="button">查看详情</button>
            </div>
          </router-link>
          <router-link tag="li" class="items border-bottom" to="/Detail2">
            <img class="img" src="https://p0.meituan.net/200.0/travel/7b632c8fe4c26eea4d7a89b1387b8a24141495.jpg.webp" alt="" />
            <div class="info">
              <p class="title">北普陀山</p>
              <p class="desc">洞天福地，人间圣境</p>
              <button class="button">查看详情</button>
            </div>
          </router-link>
          <router-link tag="li" class="items border-bottom" to="/Detail3">
            <img class="img" src="https://p1.meituan.net/200.0/travel/3ad551b8f72c56a2e7b7b6de131479dc292910.png.webp" alt="" />
            <div class="info">
              <p class="title">笔架山风景区</p>
              <p class="desc">山有三峰，二低一高，形如笔架，佳景奇观</p>
              <button class="button">查看详情</button>
            </div>
          </router-link>
          <router-link tag="li" class="items border-bottom" to="/Detail4">
            <img class="img" src="https://p0.meituan.net/200.0/hotel/ec555f79b0fb92708a4913ba3a276a42436839.png.webp" alt="" />
            <div class="info">
              <p class="title">九华山温泉山城</p>
              <p class="desc">融合温泉景观和水上体验</p>
              <button class="button">查看详情</button>
            </div>
          </router-link>
          <router-link tag="li" class="items border-bottom" to="/Detail5">
            <img class="img" src="https://p0.meituan.net/200.0/travel/3f1a95342a4c2a09320c1e40598401b2721585.png.webp" alt="" />
            <div class="info">
              <p class="title">锦州世博园</p>
              <p class="desc">一园一花一特色，好山好水好风景</p>
              <button class="button">查看详情</button>
            </div>
          </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .titles
    background: #eee
    line-height: .6rem
    text-indent: .2rem
    margin-top: .2rem
  .items
    height: 1.9rem
    display: flex
    overflow: hidden
    .img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
    .info
      flex: 1
      padding: .15rem .1rem .1rem .1rem
      min-width: 0
      .title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .desc
        line-height: .4rem
        color: #ccc
        ellicpsis()
      .button
        background: #ff9300
        line-height: .44rem
        margin-top: .16rem
        border-redius: .06rem
        color: #fff
</style>

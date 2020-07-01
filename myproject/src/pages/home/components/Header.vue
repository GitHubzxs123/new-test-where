<template>
    <div class="header">
        <div class="left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/City">
          <div class="right">
              {{ this.city }}
              <span class="iconfont arrow-icon">&#xe6aa;</span>
          </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
    .header
      display:flex
      line-height: .86rem
      background: $bgColor
      color: #fff
      .left
        width: .64rem
        float: left
        .back-icon
          font-size: .4rem
          text-align: center
      .input
        flex: 1
        background: #fff
        border-radius: .1rem
        height .62rem
        line-height: .62rem
        margin-top: .12rem
        margin-left: .2rem
        color: #ccc
        padding-left: .2rem
        padding-bottom: .05rem
      .right
        padding: 0 .1rem
        min-width: 1.04rem
        float: right
        text-align: center
        color: #fff
        .arrow-icon
          margin-left: -.08rem
</style>

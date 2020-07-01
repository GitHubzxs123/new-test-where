<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
            景点详情
            <router-link tag="div" to="/" class="header-abs">
              <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // console.log(document.documentElement.scrollTop)
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let linear = top / 160
        linear = linear > 1 ? 1 : linear
        this.opacityStyle = {opacity: linear}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () { // 页面即将被隐藏时要执行的生命周期函数 解绑全局事件 在其他页面不在执行此函数
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    top: .2rem
    left: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    text-align: center
    .header-abs-back
      color: #fff
      font-size: .4rem
      background: rgba(0, 0, 0, .8)
      border-radius: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    line-height: .86rem
    height: .86rem
    color: #fff
    text-align: center
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: -.18rem
      left: 0
      font-size: .4rem
      width: .64rem
      text-align: center
      color: #fff
</style>

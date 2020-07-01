<template>
  <div>
    <div class="top border-bottom">
      <div class="cen">
        <div class="iconfont right">&#xe624;</div>
        <div class="left"> <span>网友点评</span><span>(16866)</span></div>
      </div>
    </div>
    <div class="content">
      <div class="cont_one border-bottom" v-for="item of commentlist" :key="item.userId">
          <div class="left">
            <img class="cont_one_img" :src="item.userImg" alt="" />
          </div>
          <div class="proview">
              <div class="cont_one_name">{{ item.userName }}</div>
              <span class="cont_one_time">{{ item.userTime }}</span>
              <div class="cont_one_math">
                打分
                <span>{{ item.userScore }}</span>
              </div>
                <p class="cont_one_con">{{ item.userWords }}</p>
                <img class="cont_one_play" v-for="item of userPlay" :key="item.Photoid" :src="item.Photo" alt="" />
                <div class="cont_one_view">浏览 {{ item.userView }}</div>
          </div>
      </div>
    </div>
    <div class="footer">
      查看全部评价
      <span class="iconfont bottom">&#xe612;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailComment',
  props: {
    commentlist: Array,
    userImg: String,
    userName: String,
    userTime: String,
    userScore: String,
    userWords: String,
    userView: String,
    userPlay: Array,
    userId: String
  }
}
</script>

<style lang="stylus" scoped>
  .top
    height: .8rem
    .cen
      padding: .25rem
    .right
      transform: rotate(180deg)
      float: right
      font-size: .24rem
      margin-top: .07rem
  .cont_one
    width: 7.12rem
    min-height: 3.9rem
    padding: .18rem
    .left
      width: 1rem
      height: 1rem
      float: left
      margin-right: .12rem
      .cont_one_img
        width: 100%
        height: 100%
        border-radius: 100%
    .proview
      position: relative
      width: 6rem
      float: left
      padding-top: .1rem
      .cont_one_name
        width: 4rem
        height: .33rem
        line-height: .33rem
        font-size: .3rem
        color: #446889
      .cont_one_time
        position: absolute
        top: .1rem
        right: 0.1rem
        color: #cccccc
      .cont_one_math
        margin: .12rem 0 .16rem 0
        font-size: .24rem
        span
          color: #FF9900
          font-size .28rem
      .cont_one_con
        display: -webkit-box
        width: 5.7rem
        line-height: .4rem
        height: .8rem
        font-size: .3rem
        text-overflow:ellipsis
        overflow: hidden
        -webkit-line-clamp: 2
        -webkit-box-orient: vertical
      .cont_one_play
        width: 1.5rem
        height: 1.4rem
        margin: 0 .02rem
      .cont_one_view
        font-size: .24rem
        margin-top: .4rem
  .footer
    height: .3rem
    text-align: center
    padding: .3rem
</style>

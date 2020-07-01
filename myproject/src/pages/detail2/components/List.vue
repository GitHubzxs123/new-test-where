<template>
    <div>
       <div class="address">
         <div class="top border-bottom">
           <span class="iconfont smile">&#xe688;</span>
           <span class="font">★★★★★</span>
           <span class="font">4.7分</span>
           <div class="iconfont words right-s">&#xe624;</div>
           <div class="words">11972条评论</div>
         </div>
         <div class="bottom">
           <span class="iconfont addr-img">
             &#xe656;
           </span>
           <span>古塔区中屯乡北普陀山风景名胜区</span>
           <div class="iconfont words right-s right">&#xe624;</div>
         </div>
       </div>
       <div class="ticket">
         <div class="gray"></div>
         <div class="ttop border-bottom">
           <div class="img">
             <img class="IMG" src="https://p0.meituan.net/deal/393ac3d22d7d657e2da7ca929e18d3c41882.png" alt="" />
           </div>
           <div class="tic1">门票(1)</div>
         </div>
         <div class="bbottom">
           <div class="wrapper">
             <p class="ppp">北普陀山门票成人票</p>
             <div class="info">
               <i>可订今日</i>
               <i>预定一小时后可用</i>
               <i>官方</i>
             </div>
             <div class="sell">
               <span>已售5000+</span>
               <span>|</span>
               <span>购买须知</span>
               <span>></span>
             </div>
           </div>
         </div>
         <div class="order">
           <div class="price">
             <span class="nowPrice">￥</span>48.9
             <span class="prePrice">￥80</span>
           </div>
           <button class="online">在线预定</button>
         </div>
       </div>
       <div class="gray"></div>
    </div>
</template>

<script>
export default {
  name: 'DetailList'
}
</script>

<style lang="stylus" scoped>
  .address
    height: 1.6rem
    overflow: hidden
    .top
      height: .8rem
      line-height: .8rem
      font-size: .3rem
      padding-left: .2rem
      .smile
        font-size: .4rem
      .font
        color: #FF9900
      .words
        font-size: .3rem
        float: right
      .right-s
        transform: rotate(180deg)
        font-size: .26rem
        padding-right: .06rem
    .bottom
      height: .8rem
      line-height: .8rem
      font-size: .3rem
      padding-left: .2rem
      .addr-img
        font-size: .4rem
      .right
        float: right
        transform: rotate(180deg)
        font-size: .26rem
        margin-top: .04rem
  .ticket
    height: 2.9rem
    .gray
      height: .2rem
      background: #eee
    .ttop
      height: .8rem
      line-height: .8rem
      font-size: .3rem
      padding-left: .2rem
      .img
        width: .4rem
        height: .4rem
        float: left
        margin-right: .1rem
        margin-top: -.04rem
        .IMG
          width: 100%
      .tic1
        float: left
    .bbottom
      width: 4.64rem
      float: left
      height: 1.64rem
      padding: .14rem .15rem .1rem .2rem
      white-space: nowrap
      .wrapper
        width: 4.64rem
        .ppp
          font-size: .28rem
          padding-top: .16rem
          color: #000
          letter-spacing: .01rem
        .info
          color: rgb(62, 166, 249)
          margin: .26rem 0 .29rem 0
          i
            font-size: .2rem
            border: .02rem solid rgb(62, 166, 249)
            border-radius: .04rem
            padding: .04rem
        .sell
          font-size: .26rem
          color: #999999
    .order
      width: 2.4rem
      height: 1.9rem
      float: right
      padding: .2rem
      box-sizing: border-box
      .price
        width: 1.6rem
        height: 0.45rem
        margin: .32rem 0 .08rem .15rem
        color: red
        font-size: .36rem
        .nowPrice
          font-size: .26rem
        .prePrice
          color: #000
          text-decoration: line-through
          font-size: .23rem
    button
      color: #fff
      background: #f90
      font-size: .28rem
      border-radius: .04rem
      padding: .08rem .14rem
      margin-left: .2rem
  .gray
    height: .2rem
    background: #eee
</style>

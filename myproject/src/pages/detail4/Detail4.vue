<template>
    <div>
        <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <detail-list></detail-list>
        <detail-comment :commentlist="commentlist" :userImg="userImg" :userName="userName" :userTime="userTime" :userScore="userScore" :userWords="userWords" :userView="userView" :userPlay="userPlay" :userId="userId"></detail-comment>
    </div>
</template>

<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import DetailComment from './components/Comment.vue'
import axios from 'axios'
export default {
  name: 'Detail4',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList,
    DetailComment
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      commentlist: [],
      userImg: '',
      userName: '',
      userTime: '',
      userScore: '',
      userWords: '',
      userView: '',
      userPlay: [],
      userId: ''
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail4.json').then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.commentlist = data.commentlist
        this.userImg = data.userImg
        this.userName = data.userName
        this.userId = data.userId
        this.userTime = data.userTime
        this.userScore = data.userScore
        this.userWords = data.userWords
        this.userView = data.userView
        this.userPlay = data.userPlay
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>

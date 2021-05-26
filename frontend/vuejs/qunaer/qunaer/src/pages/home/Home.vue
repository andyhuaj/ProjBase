<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
   <!--  <div class="home">home</div>
    <router-link to='/list' class="home">列表页</router-link> -->
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data: function () {
    return {
      city: '',
      iconList: [],
      swiperList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState({
      currentCity: 'newcity'
    })
  },
  methods: {
    getHomeInfo: function () {
      axios.get('/api/index.json?city=' + this.currentCity)
        .then((res) => {
          // console.log(res)
          const data = res.data.data
          this.city = data.city
          this.iconList = data.iconList
          this.swiperList = data.swiperList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        })
    }
  },
  // keep-alive 用了他之后，不会每次都回到页面都调用mounted
  mounted: function () {
    // console.log('mountedmounted...')
    this.lastCity = this.currentCity
    this.getHomeInfo()
  },
  // 在上面mounted不会被每次调用之后， 但activated会每次都调用
  // 下面代码是说当城市切换了之后才会再次去请求数据
  activated: function () {
    if (this.lastCity !== this.currentCity) {
      this.lastCity = this.currentCity
      this.getHomeInfo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home {
  font-size: 50px;
}
</style>

<template>
  <div>
    <div class="banner" @click="handleGalleryShow">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">
          <!-- 不负嵊夏好时光，泗乎太安逸(AAAA景区) -->
          {{this.sightName}}
        </div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe6de;</span>39</div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgArray="gallaryImgs" v-show="showGallery"
      @close="handleCloseGallery"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/Gallery.vue'
import FadeAnimation from 'common/fade/Fade.vue'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  data: function () {
    return {
      showGallery: false,
      imgArray: ['https://img1.qunarzz.com/travel/d1/1807/51/c1006abfd2de9fb5.jpg_r_680x451x95_7e9d76ec.jpg', 'https://img1.qunarzz.com/travel/d5/1807/f7/4b6cfebbd2f794b5.jpg_r_680x451x95_4e68ed93.jpg']
    }
  },
  methods: {
    handleGalleryShow: function () {
      this.showGallery = true
    },
    handleCloseGallery: function () {
      this.showGallery = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.banner
  position: relative
  overflow: hidden
  height: 0
  padding-bottom: 55%
  .banner-img
    height: 4.07rem
    width: 100%
  .banner-info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: .6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex: 1
      font-size: .32rem
      padding: 0 .1rem
    .banner-number
      padding: 0 .4rem
      height: .4rem
      margin-top: .14rem
      line-height: .4rem
      border-radius: .2rem
      background: rgba(0, 0, 0, .8)
      font-size: .24rem
      .banner-icon
        font-size: .24rem
        padding: 0 .05rem
</style>

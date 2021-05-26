<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="showSwiper">
          <!-- //v-if 用来解决默认显示最后一张slider的问题 -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
             <img class="swiper-img" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper: function () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
 .wrapper >>> .swiper-pagination-bullet-active //可以不受scoped的影响，穿透它
     background: red !important
 .wrapper
   overflow: hidden
   width: 100%
   // height: 31.25%
   // padding-bottom: 31.25%
   background: #eee
   .swiper-img
      width: 100%
      height: 117.19px
</style>

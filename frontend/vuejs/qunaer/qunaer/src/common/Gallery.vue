<template>
  <div class="container" @click="handleGallerClose">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgArray" :key="index">
             <img class="gallery-img" :src="item"/>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gallery',
  props: {
    imgArray: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallerClose: function () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      background: #fff
      // height: 0
      // width: 100%
      .gallery-img
        width: 100%
      .swiper-pagination
        bottom: -1rem // 要去掉上面的所有overflow才能显示出来
        color: #fff
</style>

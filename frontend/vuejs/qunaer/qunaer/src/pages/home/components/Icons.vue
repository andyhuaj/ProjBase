<template>
    <div class="icons">
            <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script >
export default {
  name: 'Icons',
  props: {
    iconList: Array
  },
  data: function () {
    return {
      swiperOption: {
        // loop: true,
        autoplay: false
      }
    }
  },
  computed: {
    pages: function () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}

</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
    .icons >>> .swiper-container //为了解决一个图标时，点空白地方不能滑动的问题
      height: 0
      padding-bottom: 50%
    .icon
      position: relative
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      // background: green
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        // background: blue
        padding: .1rem
        .icon-img-content
          height: 100%
          display: block
          margin: 0 auto
       .icon-desc
          position: absolute
          height: .44rem
          line-height: .44rem
          text-align: center
          left: 0
          right: 0
          bottom:0
          color: #333
          ellipsis()
</style>

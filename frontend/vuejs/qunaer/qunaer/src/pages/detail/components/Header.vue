<template>
  <div>
    <router-link tag="div" to="/" class="header-abs"
      v-show="showAbs">
      <div class="iconfont back-icon">&#xe610;</div>
    </router-link>
    <div class="header-fixed"
      v-show="!showAbs"
      :style="opactityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe610;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data: function () {
    return {
      showAbs: true,
      opactityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll: function () {
      // console.log(11111)
      const index = document.documentElement.scrollTop
      if (index > 60) {
        let opacity = index / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opactityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated: function () {
    // 这种全局window绑定事件很危险，在每个页面都会触发
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated: function () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
.header-abs
  position: absolute
  left: .2rem
  top: .2rem
  width: .8rem
  height: .8rem
  line-height: .8rem
  border-radius: .4rem
  text-align: center
  background: rgba(0, 0, 0, .8)
  .back-icon
    color: #fff
    font-size: .4rem
.header-fixed
  z-index 2
  position: fixed
  top: 0
  left: 0
  right: 0
  // overflow: hidden
  height: .86rem
  line-height: .86rem
  text-align: center
  color: #fff
  background: $bgColor
  font-size: .32rem
  .header-fixed-back
    position: absolute
    top: 0
    left: 0
    width: .64rem
    font-size: .4rem
    text-align: center
    color: #fff
</style>

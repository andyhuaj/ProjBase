<template>
  <div class="alpha-list">
    <div class="item" v-for="(item, key) of cities" :key="key"
    @click="changeLetter"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    :ref="key"
    >{{key}}</div>
  </div>
      <!-- touchstart.prevent 解决拖动字母表时，页面也跟着拖动了 -->
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data: function () {
    return {
      touchStatus: false,
      startYY: 0,
      timer: null
    }
  },
  updated: function () {
    this.startYY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters: function () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    changeLetter: function (e) {
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart: function () {
      this.touchStatus = true
    },
    handleTouchMove: function (e) {
      if (this.touchStatus) {
        // const startYY = this.$refs['A'][0].offsetTop // 性能优化
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = Math.floor((e.touches[0].clientY - 79 - this.startYY) / 20)
          this.$emit('change', this.letters[touchY])
        }, 16)
      }
    },
    handleTouchEnd: function () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .alpha-list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>

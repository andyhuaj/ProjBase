<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="keyword">
    </div>
    <div class="search-content" v-show="this.keyword.length" ref="content">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item)">{{item}}</li>
        <li class="search-item border-bottom" v-show="!list.length">没有找到匹配数据</li>
      </ul>
    </div>
    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data: function () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleCityClick: function (city) {
      // alert(city)
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      // 也可以直接调用mutations，也对
      this.$router.push('/')
    }
  },
  watch: {
    keyword: function () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const cityitems = []
        for (let i in this.cities) {
          this.cities[i].forEach((item) => {
            if (item.name.indexOf(this.keyword) > -1 ||
              item.spell.indexOf(this.keyword) > -1) {
              cityitems.push(item.name)
            }
          })
        }
        this.list = cityitems
      }, 100)
    }
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.content)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      width: 100%
      height: .62rem
      box-sizing: border-box
      line-height: .62rem
      padding: 0 .1rem
      text-align: center
      color: #666
      border-radius: .1rem
  .search-content
    z-index: 1
    background: #fff
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .search-item
      line-height: .62rem
      padding-left: .2rem
      color: #666
      background: #fff
</style>

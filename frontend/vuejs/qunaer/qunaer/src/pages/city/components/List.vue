<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <!-- <div class="button">{{this.$store.state.newcity}}</div> -->
            <!-- 用了mapState之后就可以把上面的一行变成下面的一行 -->
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of this.hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="subitem of item" :key="subitem.id" @click="handleCityClick(subitem.name)">{{subitem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick: function (city) {
      // alert(city)
      // this.$store.dispatch('changeCity', city)
      // this.$store.commit('changeCity', city)
      // 也可以直接调用mutations，也对
      this.$router.push('/')
      this.changeCity(city)
    },
    ...mapMutations(['changeCity'])
    // 有了50行的代码之后，44，45行的代码可以写成48行的样子
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter: function () {
      const element = this.$refs[this.letter][0]
      // console.log(element)
      this.scroll.scrollToElement(element)
    }
  },
  computed: {
    ...mapState({
      currentCity: 'newcity'
    })
  }
}
</script>
<style lang="stylus" scoped>
.list
  position : absolute
  overflow: hidden
  // background: red
  top: 1.58rem
  right: 0
  left: 0
  bottom: 0
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
      &:before
        border-color: #ccc
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
   .item-list
     .item
       line-height: .76rem
       color: #666
       padding-left: .2rem
</style>

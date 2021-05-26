<template>
  <div class="header">
      <div class="header-left"><div class="iconfont back-icon">&#xe610;</div></div>
      <div class="header-input"><span class="iconfont">&#xe61e;</span>输入城市/景点/游玩主题</div>
      <router-link to="/city">
        <!-- <div class="header-right">{{this.$store.state.newcity}} -->
          <div class="header-right">{{this.newcity}}
          <span class="iconfont">&#xe6aa;</span></div>
      </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  props: {
    city: String
  },
  computed: {
    ...mapState(['newcity'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  //@import '../../../assets/styles/variables.styl'
     // @import '~@/assets/styles/variables.styl'
         @import '~styles/variables.styl'
         //因为在webpack.base.config.js中配置了 resolve
 .header
    display: flex
    line-height: .86rem
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
    .header-input
       flex: 1
       height: .64rem
       line-height: .64rem
       margin-top: .12rem
       margin-left: .2rem
       padding-left: .2rem
       background: #fff
       border-radius: .12rem
       color: #ccc
    .header-right
       min-width: 1.04rem
       padding: 0 .1rem
       float: header-right
       text-align: center
       color: #fff
</style>

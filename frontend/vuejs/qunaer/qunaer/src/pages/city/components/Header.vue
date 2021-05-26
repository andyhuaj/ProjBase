<template>
    <div class="header">城市选择
      <router-link to="/">
        <div class="iconfont city-back-icon">&#xe610;</div>
      </router-link>
    </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .city-back-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
      font-size: .4rem
      text-align: center
      color: #fff
</style>

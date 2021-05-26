<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="infoItem of weekendList" :key="infoItem.id">
                <div class="item-img-wrapper">
                  <img class="item-img" :src="infoItem.imgUrl">
                </div>
                <div class="item-info">
                    <p class="item-title">{{infoItem.title}}</p>
                    <p class="item-desc">{{infoItem.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .recommend-title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
   .item
     // overflow hidden
     // display: flex
     // height: 1.9rem
     // background: red
     .item-img-wrapper
        overflow hidden
        height: 0
        padding-bottom: 30.9%
        .item-img
          width: 100%
     .item-info
         // flex: 1
         padding: .1rem
         // min-width: 0  //为了让....显示出来
         .item-title
           line-height: .54rem
           font-size: .32rem
           ellipsis()
         .item-desc
           color: #ccc
           line-height: .4rem
           ellipsis()
</style>

<template>
  <div>
    <detail-banner
       :sightName="sightName"
       :bannerImg="bannerImg"
       :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>
<script>
import DetailBanner from './components/Banner.vue'
import DetailHeader from './components/Header.vue'
import DetailList from './components/List.vue'
import axios from 'axios'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data: function () {
    return {
      list: [{
        'title': '成人票',
        'children': [{
          'title': '成人三馆联票',
          'children': [{
            'title': '成人三馆联票 - 某一连锁店销售'
          }]
        }, {
          'title': '成人五馆联票'
        }]
      }, {
        'title': '学生票'
      }, {
        'title': '儿童票'
      }, {
        'title': '特惠票'
      }],
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  mounted: function () {
    axios.get('/api/detail.json', {
      params: {
        id: this.$route.params.id
      }
    }).then((res) => {
      // console.log(res)
      const result = res.data.data
      this.sightName = result.sightName
      this.bannerImg = result.bannerImg
      this.gallaryImgs = result.gallaryImgs
      this.categoryList = result.categoryList
      console.log(this.bannerImg)
    })
  }
}
</script>
<style lang="stylus" scoped>
.content
  height: 50rem
</style>

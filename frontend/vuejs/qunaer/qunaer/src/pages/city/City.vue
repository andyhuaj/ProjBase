<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="changeLetterDetect"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
import axios from 'axios'

export default {
  name: 'City',
  data: function () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  mounted: function () {
    axios.get('/api/city.json').then((res) => {
      const data = res.data.data
      this.hotCities = data.hotCities
      this.cities = data.cities
    })
  },
  methods: {
    changeLetterDetect: function (letter) {
      // console.log(letter)
      this.letter = letter
    }
  }
}
</script>
<style lang="stylus" scoped></style>

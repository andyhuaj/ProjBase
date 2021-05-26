/*
* @Author: Andy Hua
* @Date:   2021-05-23 12:06:47
* @Last Modified by:   Andy Hua
* @Last Modified time: 2021-05-23 13:14:34
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '上海'

try {
  if (localStorage.newcity) {
    defaultCity = localStorage.newcity
  }
} catch (e) {}

// 可以把下面的state, actions, mutations分别写到不同的js文件中去
export default new Vuex.Store({
  state: {
    newcity: defaultCity
  },
  actions: {
    changeCity: function (ctx, city) {
      // console.log(city)
      // this.state.newcity = city
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity: function (state, city) {
      state.newcity = city
      try {
        localStorage.newcity = city
      } catch (e) {}
    }
  }
})

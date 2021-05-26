import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home 变成下面的异步加载组件
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/pages/city/City')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPostition) {
    return {x: 0, y: 0}
  }
})

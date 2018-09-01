import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Release from '@/pages/release/Release'
import Circle from '@/pages/circle/Circle'
import My from '@/pages/my/My'


// 发布页面
import HouseSale  from '@/pages/release/components/housesale/housesale.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'Home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/release',
      name: 'Release',
      component: Release
    },
    {
      path: '/circle',
      name: 'myCircle',
      component: Circle
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },

    // 发布
    {
      path:'/housesale',
      name:'HouseSale',
      component:HouseSale
    }
  ]
})

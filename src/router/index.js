import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/components/bottom/bottom'),
      children:[
        {
          path:'index',
          component:() => import('@/view/Home/Home')
        },
        {
          path:'inform',
          component:() => import('@/view/Inform/Inform')
        },
        {
          path:'/mine',
          component:() => import('@/view/Mine/Mine')
        }
      ]
    },
    {
      path:'/login',
      component:() => import('@/view/Login/Login')
    },
    {
      path:`/inform/content`,
      component:() => import('@/view/Inform/Inform-content')
    },
    {
      path:'/index/slide',
      component:() => import('@/view/Home/Slide')
    },
    {
      path:'/index/news',
      component:() => import('@/view/Component/News')
    },
    {
      path:'/index/news/content',
      component: () => import('@/view/Component/NewsContent')
    },
    {
      path:'/index/mobile',
      component: () => import('@/view/Mobile/Mobile')
    },
    {
      path:'/index/map',
      component: () => import('@/view/Mobile/Map')
    },
    {
      path:'/mine/user',
      component: () => import('@/view/Mine/MineInfo')
    },
    {
      path:'/mine/user/change',
      component: () => import('@/view/Mine/MineInfoChange')
    },
    {
      path:'/mine/user/integray',
      component: () => import('@/view/Mine/Integray')
    }
  ]
})

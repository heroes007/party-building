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
      path:'/mine/integral',
      component: () => import('@/view/Mine/Integral')
    },
    {
      path:'/mine/integral/detail',
      component: () => import('@/view/Mine/IntegralDetail')
    },
    {
      path:'/mine/password',
      component: () => import('@/view/Mine/Password')
    },
    {
      path:'/mine/cost',
      component: () => import('@/view/Mine/Cost')
    },
    {
      path:'/index/history',
      component: () => import('@/view/Component/History')
    },
    {
      path:'/index/photo',
      component: () => import('@/view/Component/Photo')
    },
    {
      path:'/index/comment',
      component: () => import('@/view/Component/Comment')
    },
    {
      path:'/index/comment/reply',
      name:'reply',
      component: () => import('@/view/Component/Reply')
    },
    {
      path:'/index/sammary',
      component: () => import('@/view/Mobile/Sammary')
    },
    {
      path:'/index/sammary/person',
      component: () => import('@/view/Mobile/Person')
    },
    {
      path:'/index/sammary/public',
      component: () => import('@/view/Mobile/Public')
    },
    {
      path:'/index/sammary/people',
      component: () => import('@/view/Mobile/People')
    },
    {
      path:'/index/loading',
      component: () => import('@/view/Mobile/Loading')
    }
  ]
})

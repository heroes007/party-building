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
    }
  ]
})

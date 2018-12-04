import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'

    },
    {
      path: '/login',
      name: 'login',
      component: () => import("../pagers/Login"),

    },
    {
      path: '/index',
      name: 'index',
      component: () => import("../pagers/index"),
      children: [
        {
          path: '/helloworld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/echarts',
          name: 'echarts',
          component: () => import("../pagers/echarts"),
        },
        {
          path: '/waterfall',
          name: 'waterfall',
          component: () => import("../pagers/waterfall"),
        },
        {
          path: '/table',
          name: 'table',
          component: () => import("../pagers/BaseTable"),
        },
        {
          path: '/form',
          name: 'form',
          component: () => import("../pagers/form"),
        },
        {
          path: '/enlarge',
          name: 'enlarge',
          component: () => import("../pagers/enlarge"),
        },
        {
          path: '/mock',
          name: 'mock',
          component: () => import("../pagers/testmock"),
        },
        {
          path: '/directive',
          name: 'directive',
          component: () => import("../pagers/directive"),
        }
      ]
    }
  ]
})

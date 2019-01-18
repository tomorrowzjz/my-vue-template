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
          path: '/vuedraggable',
          name: 'vuedraggable',
          component: () => import("../pagers/vuedraggable"),
        },
        {
          path: '/form',
          name: 'form',
          component: () => import("../pagers/form"),
        },
        {
          path: '/imageEditor',
          name: 'imageEditor',
          component: () => import("../pagers/imageEditor"),
        },
        {
          path: '/caneditortable',
          name: 'caneditortable',
          component: () => import("../pagers/caneditortable"),
        },
        {
          path: '/better-scroll',
          name: 'better-scroll',
          component: () => import("../pagers/better-scroll"),
        },
        {
          path: '/eleeditortable',
          name: 'eleeditortable',
          component: () => import("../pagers/eleeditortable"),
        },
        {
          path: '/imagecropper',
          name: 'imagecropper',
          component: () => import("../pagers/imagecropper"),
        },
        {
          path: '/menu',
          name: 'menu',
          component: () => import("../pagers/menu"),
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

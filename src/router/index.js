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
      redirect: '/helloworld',
      component: () => import("../pagers/layout/index"),
      children: [
        {
          path: '/helloworld',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/testv-model',
          name: 'testv-model',
          component: () => import("../pagers/testv-model"),
        },{
          path: '/testcascader',
          name: 'testcascader',
          component: () => import("../pagers/testcascader"),
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
          path: '/betterTables',
          name: 'betterTables',
          component: () => import("../pagers/betterTables"),
        },
        {
          path: '/vuedraggable',
          name: 'vuedraggable',
          component: () => import("../pagers/vuedraggable"),
        },
        {
          path: '/vuedraggable_test',
          name: 'vuedraggable_test',
          component: () => import("../pagers/vuedraggable_test"),
        },
        {
          path: '/mergeTable',
          name: 'mergeTable',
          component: () => import("../pagers/mergeTable"),
        },
        {
          path: '/SKU',
          name: 'SKU',
          component: () => import("../pagers/SKU"),
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
        },
        {
          path: '/handsontable',
          name: 'handsontable',
          component: () => import("../pagers/handsontable"),
        },
        {
          path: '/fatherdrag',
          name: 'fatherdrag',
          component: () => import("../pagers/fatherdrag"),
        },
        {
          path: '/scrollTo',
          name: 'scrollTo',
          component: () => import("../pagers/scrollTo"),
        },
        {
          path: '/brotherone',
          name: 'brotherone',
          component: () => import("../pagers/brotherone"),
        },
        {
          path: '/brothertwo',
          name: 'brothertwo',
          component: () => import("../pagers/brothertwo"),
        },
        {
          path: '/image-lazy',
          name: 'image-lazy',
          component: () => import("../pagers/image-lazy"),
        },
        {
          path: '/mixins',
          name: 'mixins',
          component: () => import("../pagers/mixins"),
        },
        {
          path: '/html2canvas',
          name: 'html2canvas',
          component: () => import("../pagers/html2canvas"),
        },
        {
          path: '/loading',
          name: 'loading',
          component: () => import("../pagers/loading"),
        },{
          path: '/validtorForm',
          name: 'validtorForm',
          component: () => import("../pagers/validatorForm"),
        },
        {
          path: '/xmForm',
          name: 'xmForm',
          component: () => import("../pagers/form/xmForm"),
        },
        {
          path: '/sync',
          name: 'sync',
          component: () => import("../pagers/sync"),
        },{
          path: '/transitions',
          name: 'transitions',
          component: () => import("../pagers/transitiontest/demo"),
        },
        {
          path: '/two-lists',
          name: 'two-lists',
          component: () => import("../pagers/VueDraggable/two-lists"),
        },
        {
          path: '/qrcode',
          name: 'qrcode',
          component: () => import("../pagers/qrcode/index"),
        },
        {
          path: '/provideInject',
          name: 'provideInject',
          component: () => import("../pagers/vue-demo/provideInject/index"),
        },
        {
          path: '/attrListener',
          name: 'attrListener',
          component: () => import("../pagers/vue-demo/attrListener/index"),
        },
        {
          path: '/render',
          name: 'render',
          component: () => import("../pagers/field/index"),
        },
        {
          path: '/renderindex',
          name: 'renderindex',
          component: () => import("../pagers/field/renderindex"),
        },
        {
          path: '/jsonEditor',
          name: 'jsonEditor',
          component: () => import("../pagers/jsonEditor/index"),
        },
        {
          path: '/transfer',
          name: 'transfer',
          component: () => import("../pagers/element-demo/transferDemo"),
        },
      ]
    }
  ]
})

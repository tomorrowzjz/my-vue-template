import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld1 from '@/components/HelloWorld1'
import echartsMap from '@/components/echartsMap'

Vue.use(Router)



export const sidebarRoutes = [
  {
    path: '/Vue',
    name: 'Vue',
    meta :{
      title: 'Vue',
      icon: 'message',
    },
    redirect: '/helloworld',
    component: () => import("../pagers/layout/index"),
    children: [
      {
        path: '/testv-model',
        name: 'testv-model',
        component: () => import("../pagers/testv-model"),
      },
      {
        path: '/testcascader',
        name: 'testcascader',
        component: () => import("../pagers/testcascader"),
      },
      {
        path: '/mixins',
        name: 'mixins',
        component: () => import("../pagers/mixins"),
      },
      {
        path: '/sync',
        name: 'sync',
        component: () => import("../pagers/sync"),
      },
      {
        path: '/transitions',
        name: 'transitions',
        component: () => import("../pagers/transitiontest/demo"),
      },
      {
        path: '/directive',
        name: 'directive',
        component: () => import("../pagers/directive"),
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
        path: '/testThrottle',
        name: 'testThrottle',
        component: () => import("../pagers/vue-demo/testThrottle/index"),
      },
      {
        path: '/NativeDrag',
        name: 'NativeDrag',
        component: () => import("../pagers/own/NativeDrag"),
      },
      {
        path: '/extendTable',
        name: 'attrListener',
        component: () => import("../pagers/vue-demo/table/extendTable"),
      },
    ]
  },
  {
    path: '/ELEMENTUI',
    name: 'ELEMENTUI',
    meta :{
      title: 'ELEMENTUI',
      icon: 'eleme',
    },
    redirect: '/helloworld',
    component: () => import("../pagers/layout/index"),
    children: [
      {
        path: '/table',
        name: 'table',
        component: () => import("../pagers/BaseTable"),
      },
      {
        path: '/myUI',
        name: 'myUI',
        component: () => import("../pagers/myUI/index"),
      },
      {
        path: '/form',
        name: 'form',
        component: () => import("../pagers/form"),
      },
      {
        path: '/Tree',
        name: 'Tree',
        component: () => import("../pagers/element-demo/treeDemo"),
      },
      {
        path: '/transfer',
        name: 'transfer',
        component: () => import("../pagers/element-demo/transferDemo"),
      },
      {
        path: '/checkboxDemo',
        name: 'checkboxDemo',
        component: () => import("../pagers/element-demo/checkboxDemo"),
      },
      {
        path: '/validtorForm',
        name: 'validtorForm',
        component: () => import("../pagers/validatorForm"),
      },
      {
        path: '/mock',
        name: 'mock',
        component: () => import("../pagers/testmock"),
      },
      {
        path: '/caneditortable',
        name: 'caneditortable',
        component: () => import("../pagers/caneditortable"),
      },
      {
        path: '/eleeditortable',
        name: 'eleeditortable',
        component: () => import("../pagers/eleeditortable"),
      },
      {
        path: '/fatherdrag',
        name: 'fatherdrag',
        component: () => import("../pagers/fatherdrag"),
      },
      {
        path: '/mergeTable',
        name: 'mergeTable',
        component: () => import("../pagers/mergeTable"),
      },
      {
        path: '/betterTables',
        name: 'betterTables',
        component: () => import("../pagers/betterTables"),
      },
      {
        path: '/two-lists',
        name: 'two-lists',
        component: () => import("../pagers/VueDraggable/two-lists"),
      },
    ]
  },
  {
    path: '/thirdLibrary',
    name: '第三方类库',
    redirect: '/helloworld',
    meta :{
      title: 'ELEMENTUI',
      icon: 'menu',
    },
    component: () => import("../pagers/layout/index"),
    children: [
      {
        path: '/SKU',
        name: 'SKU',
        component: () => import("../pagers/SKU"),
      },
      {
        path: '/handsontable',
        name: 'handsontable',
        component: () => import("../pagers/handsontable"),
      },
      {
        path: '/image-lazy',
        name: 'image-lazy',
        component: () => import("../pagers/image-lazy"),
      },
      {
        path: '/html2canvas',
        name: 'html2canvas',
        component: () => import("../pagers/html2canvas"),
      },
      {
        path: '/enlarge',
        name: 'enlarge',
        component: () => import("../pagers/enlarge"),
      },
      {
        path: '/better-scroll',
        name: 'better-scroll',
        component: () => import("../pagers/better-scroll"),
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
        path: '/qrcode',
        name: 'qrcode',
        component: () => import("../pagers/qrcode/index"),
      },
      {
        path: '/imageEditor',
        name: 'imageEditor',
        component: () => import("../pagers/imageEditor"),
      },
      {
        path: '/imagecropper',
        name: 'imagecropper',
        component: () => import("../pagers/imagecropper"),
      },
      {
        path: '/vue-scrollto',
        name: 'vue-scrollto',
        component: () => import("../pagers/third-part/scroll"),
      },
      {
        path: '/photoswipe',
        name: 'photoswipe',
        component: () => import("../pagers/third-part/PhotoSwipe"),
      },
      {
        path: '/jsPDF',
        name: 'jsPDF',
        component: () => import("../pagers/third-part/jsPDF"),
      },
      {
        path: '/vue-fabric',
        name: 'vue-fabric',
        component: () => import("../pagers/third-part/vue-fabric"),
      },
      {
        path: '/mergeImages',
        name: 'mergeImages',
        component: () => import("../pagers/third-part/mergeImages"),
      },
      {
        path: '/baidu-map',
        name: 'baidu-map',
        component: () => import("../pagers/map/index"),
      },
      {
        path: '/animate',
        name: 'animate',
        component: () => import("../pagers/animate/index"),
      },
    ]
  },
  {
    path: '/NetWork',
    name: 'NetWork',
    redirect: '/helloworld',
    meta:{
      title: 'NetWork',
      icon: 'document',
    },
    component: () => import("../pagers/layout/index"),
    children: [
      {
        path: '/loading',
        name: 'loading',
        component: () => import("../pagers/loading"),
      },
      {
        path: '/scrollTo',
        name: 'scrollTo',
        component: () => import("../pagers/scrollTo"),
      },
      {
        path: '/xmForm',
        name: 'xmForm',
        component: () => import("../pagers/form/xmForm"),
      },
      {
        path: '/TESTS',
        name: 'TESTS',
        component: () => import("../pagers/TESTS"),
      },
    ]
  },
  {
    path: '/Example',
    name: 'Example',
    meta:{
      title: 'Example',
      icon: 'postcard',
    },
    redirect: '/helloworld',
    component: () => import("../pagers/layout/index"),
    children: [
      {
        path: '/menu',
        name: 'menu',
        component: () => import("../pagers/menu"),
      },
      {
        path: '/xiaoguo',
        name: 'xiaoguo',
        component: () => import("../pagers/example/xiaoguo"),
      },
      {
        path: '/yanzheng',
        name: 'yanzheng',
        component: () => import("../pagers/example/yanzheng"),
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
        path: '/render',
        name: 'render',
        component: () => import("../pagers/field/index"),
      },
      {
        path: '/renderindex',
        name: 'renderindex',
        component: () => import("../pagers/field/renderindex"),
      },
    ]
  },
  {
    path: '/Editor',
    name: '编辑器',
    meta:{
      title: 'Example',
      icon: 'postcard',
    },
    redirect: '/helloworld',
    component: () => import("../pagers/layout/index"),
    children: [
      {
        path: '/jsonEditor',
        name: 'jsonEditor',
        component: () => import("../pagers/jsonEditor/index"),
      },
      {
        path: '/jsonEditor1',
        name: 'jsonEditor1',
        component: () => import("../pagers/jsonEditor/index"),
      },
    ]
  },
]

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
          path: '/helloworld1',
          name: 'HelloWorld1',
          component: HelloWorld1
        },
        {
          path: '/echartsMap',
          name: 'echartsMap',
          component: echartsMap
        },
        {
          path: '*',
          name: '404',
          component: () => import("../pagers/404"),
        },
      ]
    },
    ...sidebarRoutes
  ]
})

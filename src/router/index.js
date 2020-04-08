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
        meta: {
            title: 'Vue',
            icon: 'message',
        },
        redirect: '/helloworld',
        // eslint-disable-next-line
        component: () => import("../pagers/layout/index"),
        children: [
            {
                path: '/testv-model',
                name: 'testv-model',
                component: () => import("../pagers/vue-demo/TestModel/testv-model"),
            },
            {
                path: '/test-drag',
                name: 'test-drag',
                component: () => import("../pagers/vue-demo/drag/drag"),
            },
            {
                path: '/dragReplace',
                name: 'dragReplace',
                component: () => import("../pagers/vue-demo/dragReplace"),
            },
            {
                path: '/testcascader',
                name: 'testcascader',
                component: () => import("../pagers/vue-demo/testcascader"),
            },
            {
                path: '/mixins',
                name: 'mixins',
                component: () => import("../pagers/vue-demo/mixins"),
            },
            {
                path: '/sync',
                name: 'sync',
                component: () => import("../pagers/vue-demo/sync"),
            },
            {
                path: '/transitions',
                name: 'transitions',
                component: () => import("../pagers/vue-demo/transitiontest/demo"),
            },
            {
                path: '/directive',
                name: 'directive',
                component: () => import("../pagers/vue-demo/directive"),
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
                component: () => import("../pagers/vue-demo/own/NativeDrag"),
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
        meta: {
            title: 'ELEMENTUI',
            icon: 'eleme',
        },
        redirect: '/helloworld',
        component: () => import("../pagers/layout/index"),
        children: [
            {
                path: '/table',
                name: 'table',
                component: () => import("../pagers/element-demo/Table/BaseTable/BaseTable"),
            },
            {
                path: '/myUI',
                name: 'myUI',
                component: () => import("../pagers/element-demo/myUI/index"),
            },
            {
                path: '/form',
                name: 'form',
                component: () => import("../pagers/element-demo/Form/form"),
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
                component: () => import("../pagers/element-demo/Form/validatorForm"),
            },
            {
                path: '/mock',
                name: 'mock',
                component: () => import("../pagers/element-demo/TestMock/testmock"),
            },
            {
                path: '/caneditortable',
                name: 'caneditortable',
                component: () => import("../pagers/element-demo/Table/CanEditorTable/caneditortable"),
            },
            {
                path: '/eleeditortable',
                name: 'eleeditortable',
                component: () => import("../pagers/element-demo/Table/EleEditorTable/eleeditortable"),
            },
            {
                path: '/fatherdrag',
                name: 'fatherdrag',
                component: () => import("../pagers/element-demo/Drag/fatherdrag"),
            },
            {
                path: '/mergeTable',
                name: 'mergeTable',
                component: () => import("../pagers/element-demo/Table/MergeTable/mergeTable"),
            },
            {
                path: '/betterTables',
                name: 'betterTables',
                component: () => import("../pagers/element-demo/Table/BetterTable/betterTables"),
            },
            {
                path: '/two-lists',
                name: 'two-lists',
                component: () => import("../pagers/element-demo/VueDraggable/two-lists"),
            },
        ]
    },
    {
        path: '/thirdLibrary',
        name: '第三方类库',
        redirect: '/helloworld',
        meta: {
            title: 'ELEMENTUI',
            icon: 'menu',
        },
        component: () => import("../pagers/layout/index"),
        children: [
            {
                path: '/handsontable',
                name: 'handsontable',
                component: () => import("../pagers/third-part/HandSonTable/handsontable"),
            },
            {
                path: '/clickoutsize',
                name: 'clickoutsize',
                component: () => import("../pagers/third-part/ClickOutSize"),
            },
            {
                path: '/image-lazy',
                name: 'image-lazy',
                component: () => import("../pagers/third-part/image-lazy"),
            },
            {
                path: '/html2canvas',
                name: 'html2canvas',
                component: () => import("../pagers/third-part/Html2Canvas/html2canvas"),
            },
            {
                path: '/enlarge',
                name: 'enlarge',
                component: () => import("../pagers/third-part/enlarge"),
            },
            {
                path: '/better-scroll',
                name: 'better-scroll',
                component: () => import("../pagers/third-part/BetterScroll/better-scroll"),
            },
            {
                path: '/echarts',
                name: 'echarts',
                component: () => import("../pagers/third-part/Echarts/echarts"),
            },
            {
                path: '/waterfall',
                name: 'waterfall',
                component: () => import("../pagers/third-part/waterfall"),
            },
            {
                path: '/qrcode',
                name: 'qrcode',
                component: () => import("../pagers/third-part/qrcode/index"),
            },
            {
                path: '/imageEditor',
                name: 'imageEditor',
                component: () => import("../pagers/third-part/imageEditor"),
            },
            {
                path: '/imagecropper',
                name: 'imagecropper',
                component: () => import("../pagers/third-part/imagecropper"),
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
                component: () => import("../pagers/third-part/jspdfDemo"),
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
                component: () => import("../pagers/third-part/map/index"),
            },
            {
                path: '/animate',
                name: 'animate',
                component: () => import("../pagers/third-part/animate/index"),
            },
        ]
    },
    {
        path: '/NetWork',
        name: 'NetWork',
        redirect: '/helloworld',
        meta: {
            title: 'NetWork',
            icon: 'document',
        },
        component: () => import("../pagers/layout/index"),
        children: [
            {
                path: '/SKU',
                name: 'SKU',
                component: () => import("../pagers/NetWork/SKU"),
            },
            {
                path: '/loading',
                name: 'loading',
                component: () => import("../pagers/NetWork/loading"),
            },
            {
                path: '/scrollTo',
                name: 'scrollTo',
                component: () => import("../pagers/NetWork/scrollTo"),
            },
            {
                path: '/xmForm',
                name: 'xmForm',
                component: () => import("../pagers/NetWork/form/xmForm"),
            },
            {
                path: '/TESTS',
                name: 'TESTS',
                component: () => import("../pagers/NetWork/TESTS"),
            },
        ]
    },
    {
        path: '/Example',
        name: 'Example',
        meta: {
            title: 'Example',
            icon: 'postcard',
        },
        redirect: '/helloworld',
        component: () => import("../pagers/layout/index"),
        children: [
            {
                path: '/menu',
                name: 'menu',
                component: () => import("../pagers/example/menu"),
            },
            {
                path: '/vuediff',
                name: 'vuediff',
                component: () => import("../pagers/example/vuediff"),
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
                component: () => import("../pagers/example/brotherone"),
            },
            {
                path: '/brothertwo',
                name: 'brothertwo',
                component: () => import("../pagers/example/brothertwo"),
            },
            {
                path: '/render',
                name: 'render',
                component: () => import("../pagers/example/field/index"),
            },
            {
                path: '/renderindex',
                name: 'renderindex',
                component: () => import("../pagers/example/field/renderindex"),
            },
        ]
    },
    {
        path: '/Editor',
        name: '编辑器',
        meta: {
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
    mode: 'history',
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
        ...sidebarRoutes,
        {
            path: '*',
            name: '404',
            component: () => import("../pagers/404"),
        }
    ]
})

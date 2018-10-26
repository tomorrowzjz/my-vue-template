import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/index',
            name: 'index',
            component: ()=>import("../pagers/index"),
            children:[
                {
                    path: '/helloworld',
                    name: 'HelloWorld',
                    component: HelloWorld
                },
                {
                    path: '/table',
                    name: 'table',
                    component: ()=>import("../pagers/BaseTable"),
                },
                {
                    path: '/form',
                    name: 'form',
                    component: ()=>import("../pagers/form"),
                }
            ]
        },

    ]
})

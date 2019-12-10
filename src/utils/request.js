import axios from 'axios'
import qs from 'qs'
import { Message, MessageBox, Loading } from 'element-ui'
import store from '../store'
import router from '../router'
import { getToken, removeToken } from '@/utils/auth'

let loading // 定义loading变量

function startLoading() { // 使用Element loading-start 方法
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.3)'
    })
}

function endLoading() { // 使用Element loading-close 方法
    loading.close()
}

// 那么 showFullScreenLoading() tryHideFullScreenLoading() 要干的事儿就是将同一时刻的请求合并。
// 声明一个变量 needLoadingRequestCount，每次调用showFullScreenLoading方法 needLoadingRequestCount + 1。
// 调用tryHideFullScreenLoading()方法，needLoadingRequestCount - 1。needLoadingRequestCount为 0 时，结束 loading。
let needLoadingRequestCount = 0

export function showFullScreenLoading() {
    if (needLoadingRequestCount === 0) {
        startLoading()
    }
    needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
    if (needLoadingRequestCount <= 0) return
    needLoadingRequestCount--
    if (needLoadingRequestCount === 0) {
        endLoading()
    }
}

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
    timeout: 50000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        // showFullScreenLoading()
        if (config.method === 'get') {
            config.paramsSerializer = function(params) {
                //                 1、qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'indices' })
                // 输出结果：'a[0]=b&a[1]=c'
                //                 2、qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'brackets' })
                // // 输出结果：'a[]=b&a[]=c'
                //                 3、qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'repeat' })
                // // 输出结果：'a=b&a=c'
                //                 4、qs.stringify({ a: ['b', 'c'] }, { arrayFormat: 'comma' })
                // 输出结果：'a=b,c'
                return qs.stringify(params)
            }
        }
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非20000是抛错 可结合自己业务进行修改
         */
        const res = response.data
        if (res.message === 'Unauthorized') {
            MessageBox.confirm(
                '没有找到该用户信息，请核对后重新登录',
                '确定登出',
                {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
            ).then(() => {
                store.dispatch('LogOut').then(() => {
                    location.reload() // 为了重新实例化vue-router对象 避免bug
                })
            })
        }
        // tryHideFullScreenLoading()
        return response.data
    },
    error => {
        tryHideFullScreenLoading()
        // console.log(error.response.data.code) // for debug
        const dataCode = error.response && error.response.data && error.response.data.code
        const responseCode = error.response && error.response.status
        switch (responseCode) {
        // 401：未登录
        case 401:
            // 跳转登录页
            if (sessionStorage.getItem('count')) {
                console.log(1)
            } else {
                sessionStorage.setItem('count', 1)
            }
            MessageBox.confirm(
                '没有找到该用户信息，请核对后重新登录!',
                '确定登出',
                {
                    confirmButtonText: '重新登录',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
            ).then(() => {
                // store.dispatch('FedLogOut').then(() => {
                store.dispatch('LogOut').then(() => {
                    router.replace({
                        path: '/login',
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
                    location.reload() // 为了重新实例化vue-router对象 避免bug
                })
            })

            break
        // 403: token过期
        case 403:
            if (dataCode === 43431 || dataCode === 43432) {
                removeToken()
                router.replace({
                    path: '/login',
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                })
            } else if (dataCode === 43433) {
                MessageBox.alert('当前用户沒有实名认证，请先实名认证', '去认证', {
                    confirmButtonText: '确定',
                    showClose: false,
                    callback: action => {
                        router.push({
                            path: '/identity',
                            query: {
                                redirect: router.currentRoute.fullPath
                            }
                        })
                    }
                })
            } else if (dataCode === 43434 || dataCode === 43435) {
                router.push({
                    path: '/usercenter/index',
                    query: {
                        redirect: router.currentRoute.fullPath
                    }
                })
            } else {
                Message({
                    message: `${responseCode}错误`,
                    type: 'error'
                })
            }

            break
        // // 404请求不存在
        // case 404:
        //   Message({
        //     message: '网络请求不存在',
        //     type: 'error'
        //   })
        //   break
        // 其他错误，直接抛出错误提示
        default:
            Message({
                message: `${responseCode}错误`,
                type: 'error'
            })
        }

        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
        return Promise.reject(error)
    }
)

export default service

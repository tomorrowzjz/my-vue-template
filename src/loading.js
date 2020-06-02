import { Loading } from 'element-ui'
/* 全局多彩加载层 */

Vue.prototype.$baseColorfullLoading = (index, text, callback) => {
    let loading
    if (!index) {
        loading = Loading.service({
            lock: true,
            text: text || 111,
            spinner: 'dots-loader',
            background: 'hsla(0,0%,100%,.8)'
        })
    } else {
        switch (index) {
        case 1:
            index = 'dots'
            break
        case 2:
            index = 'gauge'
            break
        case 3:
            index = 'inner-circles'
            break
        case 4:
            index = 'plus'
            break
        }
        loading = Loading.service({
            lock: true,
            text: text || loadingText,
            spinner: index + '-loader',
            background: 'hsla(0,0%,100%,.8)'
        })
    }
    if (callback) {
        callback(loading)
    } else {
        setTimeout(() => {
            loading.close()
        }, messageDuration)
    }
}

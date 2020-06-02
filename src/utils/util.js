export function objDeepCopy(source) {
    const sourceCopy = source instanceof Array ? [] : {}
    for (const item in source) {
        sourceCopy[item] = typeof source[item] === 'object' ? this.objDeepCopy(source[item]) : source[item]
    }
    return sourceCopy
}

export function MP(ak) {
    return new Promise(function(resolve, reject) {
        window.onload = function() {
            // eslint-disable-next-line
            resolve(BMap)
        }
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init&s=1'
        script.onerror = reject
        document.head.appendChild(script)
    })
}
/**
 * 从url里面的查询字符串中匹配参数返回一个对象
 * @param {*} str
 */
export function parser(str) {
    const obj = {}
    str.replace(/([^=&]+)=([^=&]+)/g, function() {
        obj[arguments[1]] = arguments[2]
    })
    return obj
}
/**
 * 把一个对象处理为查询字符串
 * @param {*} obj
 */
export function stringify(obj) {
    const arr = []
    for (const key in obj) {
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&')
}

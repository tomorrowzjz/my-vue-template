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
// let authList = [
//     {
//       pid:-1,
//       id:1,
//       name: '商品管理'
//     },
//     {
//       pid:1,
//       id:2,
//       name: '创建商品'
//     },
//     {
//       pid:1,
//       id:3,
//       name: '商品列表'
//     },
//     {
//       pid:-1,
//       id:4,
//       name: '首页'
//     },
//     {
//       pid:-1,
//       id:5,
//       name: '发布管理'
//     },
//     {
//       pid:5,
//       id:6,
//       name: '平台上货'
//     },
//     {
//       pid:5,
//       id:7,
//       name: '发布列表'
//     }
//   ]
/**
 * 把一个有父子关系的一个数组变为类似于树状结构的数组
 * @param {*} authList 一个数组
 */
export function getTreeList(arr) {
    const menu = []
    const menuMap = {}
    arr.forEach(m => {
        m.children = []
        menuMap[m.id] = m
        if (m.pid === -1) {
            menu.push(m)
        } else {
            menuMap[m.pid] && menuMap[m.pid].children.push(m)
        }
    })
    return menu
}

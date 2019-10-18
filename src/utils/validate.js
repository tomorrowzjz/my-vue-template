import store from '../store'

export function isvalidUsername(str) {
    const valid_map = ['admin', 'editor']
    return valid_map.indexOf(str.trim()) >= 0
}

/* 合法uri*/
export function validateURL(textval) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return urlregex.test(textval)
}

/* 小写字母*/
export function validateLowerCase(str) {
    const reg = /^[a-z]+$/
    return reg.test(str)
}

/* 大写字母*/
export function validateUpperCase(str) {
    const reg = /^[A-Z]+$/
    return reg.test(str)
}

/* 大小写字母*/
export function validatAlphabets(str) {
    const reg = /^[A-Za-z]+$/
    return reg.test(str)
}
/* 一个汉字占多个字符*/
export function validateChar(str, cn_weight = 1) {
    let length = 0
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            length += cn_weight
        } else {
            length++
        }
    }
    return length
}
export function isCardNo(card) {
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    if (reg.test(card) === false) {
        return false
    }
    return true
}

export function validSocialCredit(card) {
    // 只能包括字母、数字、—，8-30个字符
    const reg = /(^[a-zA-Z][a-zA-Z0-9_]{7,29}$)/
    if (reg.test(card) === false) {
        return false
    }
    return true
}

export function isInArray(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return true
        }
    }
    return false
}

export function evaluate(expression) {
    let res
    if (typeof expression === 'string' || typeof expression === 'number' || typeof expression === 'boolean' || typeof expression === 'undefined') {
        res = expression
    } else if (typeof expression === 'object') {
        if (Array.isArray(expression)) {
            res = expression
        } else {
            const op = expression['$op']
            let params = expression['$params']

            params = params.map(function(expr) {
                return evaluate(expr)
            })

            switch (op) {
            case 'strLen':
                // 判断是否有单位
                if (params.length === 1) {
                    res = validateChar(params[0])
                } else if (params.length === 2) {
                    res = validateChar(params[0], params[1])
                }
                break
            case 'contains':
                if (params.length === 2) {
                    if (params[0]) {
                        res = !(params[0].indexOf(params[1]) === -1)
                    }
                }
                break
            case 'startsWith':
                if (params.length === 2) {
                    if (params[0]) {
                        res = params[0].startsWith(params[1])
                    }
                }
                break
            case 'endsWith':
                if (params.length === 2) {
                    if (params[0]) {
                        res = params[0].endsWith(params[1])
                    }
                }
                break
            case 'min':
                if (params.length === 1) {
                    res = Math.min.apply(Math, params[0])
                }
                break
            case 'max':
                if (params.length === 1) {
                    res = Math.max.apply(Math, params[0])
                }
                break
            case 'sum':
                if (params.length === 1) {
                    if (params[0]) {
                        let sum = 0
                        for (let i = 0; i < params[0].length; i++) {
                            if (params[0][i]) {
                                sum += parseInt(params[0][i])
                            }
                        }
                        res = sum
                    }
                }
                break
            case 'len':
                if (params.length === 1) {
                    if (params[0]) {
                        res = params[0].length
                    }
                }
                break
            case 'not':
                if (params.length === 1) {
                    res = !(params[0])
                }
                break
            case 'eq':
                if (params.length === 2) {
                    res = params[0] === params[1]
                }
                break
            case 'valueOf':
                // 有bug, TODO
                for (let i = 0; i < store.state.props.submit_form.length; i++) {
                    if (store.state.props.submit_form[i][params[0]]) {
                        res = store.state.props.submit_form[i][params[0]].value
                    }
                }
                break

            case 'notesOf':
                // 有bug, TODO
                for (let i = 0; i < store.state.props.submit_form.length; i++) {
                    if (store.state.props.submit_form[i][params[0]]) {
                        res = store.state.props.submit_form[i][params[0]].notes
                    }
                }
                break
            case 'attrOf':
                // 有bug, TODO
                if (params.length === 2) {
                    if (params[0]) {
                        console.log(1)
                    } else {
                        for (let i = 0; i < store.state.props.submit_form.length; i++) {
                            if (store.state.props.submit_form[i][params[0]]) {
                                res = store.state.props.submit_form[i][params[0]].notes
                            }
                        }
                    }
                }
                break
            case 'gt':
                if (params.length === 2) {
                    res = true
                    if (Array.isArray(params[0])) {
                        for (let j = 0; j < params[0].length; j++) {
                            if (params[0][j] && !(params[0][j] > params[1])) {
                                res = false
                            }
                        }
                    } else {
                        if (params[0]) {
                            res = params[0] > params[1]
                        }
                    }
                }
                break
            case 'gte':
                if (params.length === 2) {
                    res = true
                    if (Array.isArray(params[0])) {
                        for (let j = 0; j < params[0].length; j++) {
                            if (params[0][j] && !(params[0][j] >= params[1])) {
                                res = false
                            }
                        }
                    } else {
                        if (params[0]) {
                            res = params[0] >= params[1]
                        }
                    }
                }
                break
            case 'lte':
                if (params.length === 2) {
                    res = true
                    if (Array.isArray(params[0])) {
                        for (let j = 0; j < params[0].length; j++) {
                            if (params[0][j] && !(params[0][j] <= params[1])) {
                                res = false
                            }
                        }
                    } else {
                        if (params[0]) {
                            res = params[0] <= params[1]
                        }
                    }
                }
                break
            case 'lt':
                if (params.length === 2) {
                    res = true
                    if (Array.isArray(params[0])) {
                        for (let j = 0; j < params[0].length; j++) {
                            if (params[0][j] && !(params[0][j] < params[1])) {
                                res = false
                            }
                        }
                    } else {
                        if (params[0]) {
                            res = params[0] < params[1]
                        }
                    }
                }
                break
            case 'ne':
                if (params.length === 2) {
                    res = params[0] !== params[1]
                }
                break
            case 'in':
                if (params.length === 2) {
                    return isInArray(params[1], params[0])
                }
                break
            case 'nin':
                if (params.length === 2) {
                    return !isInArray(params[1], params[0])
                }
                break
            case 'regex':
                if (params.length === 2) {
                    const regex = new RegExp(params[1])
                    res = regex.test(params[0])
                }
                break
            default:
                console.log('Unknown $op')
            }
        }
    }

    console.log(res)
    return res
}


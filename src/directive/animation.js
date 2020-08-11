// 动画函数
const animationType = {
    skipTime: Math.floor(1000 / 60),
    // 获取dom上的属性
    getStyle(dom, attr) {
        if (window.getComputedStyle) {
            return window.getComputedStyle(dom, null)[attr]
        } else {
            return dom.currentStyle[attr]
        }
    },
    // 匀速直线运动
    uniform(dom, attr, target, speed) {
        clearInterval(dom.timer)
        let iSpeed = null, iCur = parseInt(this.getStyle(dom, attr))
        iSpeed = target - iCur > 0 ? speed : -speed
        dom.timer = setInterval(() => {
            iCur = parseInt(this.getStyle(dom, attr))
            if (Math.abs(target - iCur) < Math.abs(iSpeed)) {
                clearInterval(dom.timer)
                dom.style[attr] = target + 'px'
            } else {
                dom.style[attr] = iCur + iSpeed + 'px'
            }
        }, this.skipTime)
    },
    // 弹性直线运动
    elastic(dom, attr, target) {
        clearInterval(dom.timer)
        let iSpeed = 0,
            // 运动中的速度和加速度实际上都是用dom和target的距离来决定的，在缓冲运动中iSpeed随着距目标点的位移矢量来决定iSpeed的方向为大小
            // 这里不用iSpeed直接控制，弹性运动中为了实现在目标线左右来回运动用a做变化的矢量来控制iSpeed的方向和大小
            a = 1,
            u = 0.8
        dom.timer = setInterval(() => {
            a = (target - parseInt(this.getStyle(dom, attr))) / 5
            iSpeed += a
            iSpeed *= u
            if (Math.abs(iSpeed) < 1 && Math.abs(target - parseInt(this.getStyle(dom, attr))) < 1) {
                // 经测如果if里填dom.style.left == target + 'px'也是可以进入if停止定时器的，不会永远不到target
                // 到一定程度系统直接取到target值
                dom.style[attr] = target + 'px'
                clearInterval(dom.timer)
            } else {
                dom.style[attr] = parseInt(this.getStyle(dom, attr)) + iSpeed + 'px'
            }
        }, this.skipTime + 4)
    }
}
// 初始化运动函数
function animation(el, binding, positon = '0', direction = 'x', mode = 'uniform') {
    el.style.position = 'absolute'
    // 选择方向
    switch (direction) {
    case 'x':
        direction = 'left'
        break
    case 'y':
        direction = 'top'
        break
    default:
        throw new Error('direction 的只能传x或y')
    }
    // 选择运动函数
    switch (mode) {
    case 'uniform':
        animationType.uniform(el, direction, positon, 8)
        break
    case 'elastic':
        animationType.elastic(el, direction, positon)
        break
    default:
        throw new Error('没有注册运动函数')
    }
}

export default {
    update(el, binding) {
        // 位移量
        const position = binding.value
        // 方向
        const direction = binding.arg
        // 运动模式
        if (Object.keys(binding.modifiers).length > 1) {
            throw new Error('运动模式只能有一个')
        }
        const mode = Object.keys(binding.modifiers)[0] ? Object.keys(binding.modifiers)[0] : 'uniform'
        animation(el, binding, position, direction, mode)
    }
    // componentUpdated 和 update 差不太多
    // componentUpdated(el, binding){
    //   const position = binding.value;
    //   animation(el, binding, position,binding.arg)
    // },
}

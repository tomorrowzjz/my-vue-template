<template>
    <div class="magnify">
        <div ref="previewBox" class="preview-box" @mousemove="move($event)" @mouseout="out">
            <img :src="previewImg" width="100%" alt="">
            <div ref="hoverBox" class="hover-box"/>
        </div>
        <div v-show="zoomVisiable" ref="zoomBox" class="zoom-box">
            <img ref="bigImg" :src="zoomImg" alt="">
        </div>
    </div>
</template>

<script>
    function offset(el) {
        let top = el.offsetTop
        let left = el.offsetLeft
        while (el.offsetParent) {
            el = el.offsetParent
            top += el.offsetTop
            left += el.offsetLeft
        }
        return {
            left: left,
            top: top
        }
    }
    export default {
        name: 'Magnify',
        props: {
            previewImg: {
                type: String,
                default: ''
            },
            zoomImg: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                zoomVisiable: false,
                hoverVisiable: false
            }
        },
        methods: {
            out() {
                this.zoomVisiable = false
            },
            move(ev) {
                this.init()
                // 鼠标距离屏幕距离
                const moveX = ev.clientX
                const moveY = ev.clientY
                // 大盒子距离顶部的距离
                const offsetLeft = offset(this.oPreviewBox).left

                const offsetTop = offset(this.oPreviewBox).top
                let left = moveX - offsetLeft - this.houverWidth / 2
                let top
                if (this.scroll > 0) {
                    top = moveY - offsetTop + this.scroll - this.houverHeight / 2
                } else {
                    top = moveY - offsetTop - this.houverHeight / 2
                }
                const maxWidth = this.pWidth - this.houverWidth
                const maxHeight = this.pWidth - this.houverHeight
                left = left < 0 ? 0 : left > maxWidth ? maxWidth : left
                top = top < 0 ? 0 : top > maxHeight ? maxHeight : top
                const percentX = left / (maxWidth)
                const percentY = top / (maxHeight)
                this.oHoverBox.style.left = left + 'px'
                this.oHoverBox.style.top = top + 'px'
                this.oBigImg.style.left = percentX * (this.bWidth - this.imgWidth) + 'px'
                this.oBigImg.style.top = percentY * (this.bHeight - this.imgHeight) + 'px'
                this.$emit('move', ev)
                this.zoomVisiable = true
            },
            init() {
                this.oHoverBox = this.$refs.hoverBox
                this.oPreviewBox = this.$refs.previewBox
                this.oBigImg = this.$refs.bigImg
                this.imgBox = this.$refs.zoomBox
                this.houverWidth = this.oHoverBox.offsetWidth
                this.houverHeight = this.oHoverBox.offsetHeight
                this.pWidth = this.oPreviewBox.offsetWidth
                this.pHeight = this.oPreviewBox.offsetHeight
                this.imgWidth = this.oBigImg.offsetWidth
                this.imgHeight = this.oBigImg.offsetHeight
                this.bWidth = this.imgBox.offsetWidth
                this.bHeight = this.imgBox.offsetHeight
                this.scroll = document.documentElement.scrollTop || document.body.scrollTop
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .magnify {
        position: relative;
    .preview-box {
        width: 480px;
        height: 480px;
        border: 1px solid #dededd;
        position: relative;
    &:hover .hover-box{
         display: block;
     }
    .hover-box {
        position: absolute;
        display: none;
        left: 0;
        top: 0;
        width: 100px;
        height: 100px;
        border: 1px solid #545454;
        /*background: url('https://img-tmdetail.alicdn.com/tps/i4/T12pdtXaldXXXXXXXX-2-2.png') repeat 0 0;*/
        cursor: move;
        user-select: none;
    }
    }
    .zoom-box {
        width: 480px;
        height: 480px;
        overflow: hidden;
        position: absolute;
        left: 485px;
        border: 1px solid #dc7a7a;;
        top: 0;
    img {
        position: absolute;
        top: 0;
        left: 0;
    }
    }
    }
</style>

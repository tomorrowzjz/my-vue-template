<template>
    <div class="banner">
        <div
            ref="bg"
            class="bg"
            @mouseover="Over($refs.bg)"
            @mousemove="Move($refs.bg,$event)"
            @mouseout="Out($refs.bg)">
            <transition name="fade">
                <img src="../../assets/11.jpg" width="100%">
            </transition>
        </div>
    </div>
</template>

<script>

    export default {
        name: '',
        components: {},
        data() {
            return {
                bgOpt: {
                    px: 0,
                    py: 0,
                    w: 0,
                    h: 0
                }
            }
        },

        computed: {},
        watch: {},
        created() {

        },

        mounted() {

        },
        methods: {
            Over(e) {
                this.bgOpt.px = e.offsetLeft
                this.bgOpt.py = e.offsetTop
                this.bgOpt.w = e.offsetWidth
                this.bgOpt.h = e.offsetHeight
            },
            Move(dom, eve) {
                const bgOpt = this.bgOpt
                let X; let Y
                const mouseX = eve.pageX - bgOpt.px
                const mouseY = eve.pageY - bgOpt.py
                if (mouseX > bgOpt.w / 2) {
                    X = mouseX - (bgOpt.w / 2)
                } else {
                    X = mouseX - (bgOpt.w / 2)
                }
                if (mouseY > bgOpt.h / 2) {
                    Y = bgOpt.h / 2 - mouseY
                } else {
                    Y = bgOpt.h / 2 - mouseY
                }
                dom.style['transform'] = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
                dom.style.transform = `rotateY(${X / 50}deg) rotateX(${Y / 50}deg)`
            },
            Out(dom) {
                dom.style['transform'] = 'rotateY(0deg) rotateX(0deg)'
                dom.style.transform = 'rotateY(0deg) rotateX(0deg)'
            }
        }
    }
</script>

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .banner{
    transition: all .9s;
    transition-timing-function: linear;
  }
  .bg {
    /*position: relative;*/
    /*width: 1220px;*/
    /*height: 500px;*/
    /*margin: 20px auto;*/
    /*background-size: 100% 100%;*/
    /*border-radius: 10px;*/
    /*transform-style: preserve-3d;*/
    /*transform-origin: 50% 50%;*/
    /*transform: rotateY(0deg) rotateX(0deg);*/
  }
</style>

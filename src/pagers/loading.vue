<template>
    <div id="loading-wrapper">
        <div :style="ringStyle" class="loading-ring">
            <div class="outer" />
            <div class="middle" />
            <div class="inner" />
        </div>
        <div v-if="text" :style="textStyle" class="text">
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: {
            text: {
                type: String,
                default: '拼命加载中...'
            },
            textStyle: {
                type: Object,
                default: function() {
                    return {
                        fontSize: '14px',
                        color: '#fff'
                    }
                }
            },
            ringStyle: {
                type: Object,
                default: function() {
                    return {
                        width: '100px',
                        height: '100px',
                        color: '#407af3'
                    }
                }
            }
        },
        mounted() {
            document
                .querySelector('body')
                .addEventListener('touchmove', this.preventDefault)
        },
        destroyed() {
            document
                .querySelector('body')
                .removeEventListener('touchmove', this.preventDefault)
        },
        methods: {
            preventDefault(e) {
                // 禁止body的滚动
                console.log(e)
                e.preventDefault()
                e.stopPropagation()
            }
        }
    }
</script>

<style lang="scss" scoped>
    #loading-wrapper {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    .loading-ring {
        position: relative;
        width: 200px;
        height: 200px;
    .outer,
    .inner,
    .middle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        color: currentColor;
    &::after {
         content: "";
         display: block;
         width: 100%;
         height: 100%;
         border-radius: 100%;
         border-left: 10px solid currentColor;
         border-right: 10px solid currentColor;
         border-top: 10px solid currentColor;
         border-bottom: 10px solid transparent;
     }
    }

    .outer {
        width: 100%;
        height: 100%;
    &::after {
         animation: anticlockwise 1.5s infinite linear;
     }
    }
    .inner {
        width: calc(100% * 0.6);
        height: calc(100% * 0.6);
    &::after {
         animation: anticlockwise 1.5s infinite linear;
     }
    }
    .middle {
        width: calc(100% * 0.8);
        height: calc(100% * 0.8);
    &::after {
         animation: clockwise 1.5s infinite linear;
     }
    }
    }

    .text {
        color: #fff;
        font-size: 14px;
        padding: 30px;
        width: 250px;
        text-align: center;
    }
    }

    @keyframes clockwise {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes anticlockwise {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
</style>

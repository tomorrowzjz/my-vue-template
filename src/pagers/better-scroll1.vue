<template>
    <div>
        <div ref="menuWrapper" class="menu-wrapper">
            <ul style="display: flex;list-style: none;justify-content: space-between">
                <li v-for="index in 8" :key="index" class="menu-item" @click="selectMenu(index, $event)">
                    <span>
                        <span/>11111
                    </span>
                </li>
            </ul>
        </div>
        <div ref="bscroll" class="bscroll">
            <div>
                <div class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                </div>
                <div class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>

                </div>
                <div class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>

                </div>
                11111111111111111111
                <div ref="test" class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>

                </div>
                <div class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>

                </div>

                <div class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>

                </div>

                <div class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>

                </div>

                <div class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>

                </div>

                <div class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>

                </div>

                <div class="demo">
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>
                    <p>nihao</p>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: '',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                menuScroll: '',
                scroll: ''
            }
        },
        mounted() {
            this.$nextTick(() => {
                this.menuScroll = new BScroll(this.$refs.menuWrapper, {
                    click: true
                })
                this.scroll = new BScroll(this.$refs.bscroll, {
                    click: true,
                    probeType: 3
                })
                console.log(this.$refs.test)
                //        this.scroll.scrollToElement( this.$refs.test, 0)
            })
        },
        methods: {
            selectMenu(index, event) {
                this.scroll.scrollToElement(this.$refs.test, 0)
                //        this.scroll.scrollTo(0,-event.clientY )
            }
        }
    }
</script>

<style scoped>
    .bscroll{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .menu-wrapper{
        height: 50px;
        width: 100%;
        /*overflow: hidden;*/
        z-index: 10001;
        position: fixed;
        top:100px;
    }
</style>

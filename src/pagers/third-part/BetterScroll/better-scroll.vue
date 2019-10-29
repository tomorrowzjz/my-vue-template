<template>
    <div>
        <div class="goods">
            <div ref="menuWrapper" class="menu-wrapper">
                <ul>
                    <li
                        v-for="(item,index) in 8"
                        ref="menuList"
                        :key="index"
                        :class="{'current': currentIndex === index}"
                        class="menu-item"
                        @click="selectMenu(index,$event)">
                        你好
                    </li>
                </ul>
            </div>
            <Scroll
                ref="foodsWrapper"
                :data="initData"
                :mouse-wheel="true"
                :click="false"
                :scrollbar="true"
                :pull-up-load="true"
                :pull-down-refresh="true"
                class="foods-wrapper"
                @pullingDown="pullingDown"
                @pullingUp="pullingUp"
            >
                <ul class="ul">
                    <li v-for="(food,index) in initData" ref="foodList" :key="index" class="demo">
                        <h1>{{ index }}</h1>
                        <ul>
                            <li @click.stop="testClick">11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                            <li>11111111111111111111111111</li>
                        </ul>
                    </li>
                </ul>
            </Scroll>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Scroll from '../../../components/Scroll.vue'

    export default {
        components: {
            Scroll
        },
        data() {
            return {
                listHeight: [],
                scrollY: 0,
                selectedFood: {},
                initData: []
            }
        },
        computed: {
            currentIndex() {
                for (let i = 0; i < this.listHeight.length; i++) {
                    const height1 = this.listHeight[i]
                    const height2 = this.listHeight[i + 1]
                    if (this.scrollY >= height1 && this.scrollY < height2) {
                        return i
                    }
                }
                return 0
            }
        },
        created() {
            this.getData()
            //          this.$nextTick(() => {
            //            this._initScroll();
            //            this._calculateHeight();
            //          });
        },
        methods: {
            pullingUp() {
                console.log('pullingUp')
            },
            pullingDown() {
                console.log('pullingDown')
                this.initData = this.initData.concat([777])
                this.$refs.foodsWrapper.finishPullDown()
            },
            testClick() {
                this.$message.info('click')
            },
            getData() {
                console.log('test')
                setTimeout(() => {
                    this.initData = [[1111111111111111], [22222222222222222], [333333333333333333333], [8888888], [999999]]
                }, 1000)
            },
            selectMenu(index, event) {
                const foodList = document.querySelectorAll('.demo')
                const el = foodList[index]
                this.foodScroll.scrollToElement(el, 300)
            },
            _initScroll() {
                this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
                    click: true,
                    probeType: 3,
                    mouseWheel: true
                })
                this.foodScroll.on('scroll', (pos) => {
                    this.scrollY = Math.abs(Math.round(pos.y))
                })
            },
            _calculateHeight() {
                const foodList = this.$refs.foodsWrapper.getElementsByClassName('demo')
                let height = 0
                this.listHeight.push(height)
                for (let i = 0; i < foodList.length; i++) {
                    const item = foodList[i]
                    height += item.clientHeight
                    this.listHeight.push(height)
                }
            }
        }
    }
</script>
<style>
.menu-wrapper{
    height: 100px;
    /*overflow: hidden;*/
}
.menu-wrapper li{
    list-style: none;
    margin-left: 100px;
    float: left;
}
.foods-wrapper{
/*必须要有定位*/
    position: absolute;
    width: 80%;
    height: 500px;
    overflow: hidden;
}
.ul{
    overflow: hidden;
}
.current{
    background-color: #cccccc;
}
</style>


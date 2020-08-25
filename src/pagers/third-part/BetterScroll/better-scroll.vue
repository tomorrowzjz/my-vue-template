<template>
    <div>
        <div class="goods">
            <div>
                下滑加载
                <el-input-number v-model="scrollVal"/><el-button style="margin-right:100px" @click="scrollTo">滚动到像素</el-button>
                <el-input-number v-model="position"/>
                <el-button @click="handleScrollToElement">滚动到具体某个元素位置</el-button>
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
                <div>
                    <ul class="ul">
                        <li v-for="(i,index) in initData" :key="index" :id="`bs-item-${index}`" class="demo">
                            <h3>序号：{{ index }},数字：{{ i }}</h3>
                        </li>
                    </ul>
                    <div v-show="loading" class="loading-box">
                        <i class="el-icon-loading"/> 正在加载。。。
                    </div>
                </div>
            </Scroll>
        </div>
    </div>
</template>

<script>
    import Scroll from '@/components/Scroll.vue'
    export default {
        components: {
            Scroll
        },
        data() {
            return {
                letNum: 40,
                initData: [],
                loading: false,
                scrollVal: 0,
                position: 0
            }
        },
        computed: {

        },
        created() {
            this.getData()
        },
        methods: {
            getData() {
                setTimeout(() => {
                    for (let i = 0; i < this.letNum; i++) {
                        this.initData.push(Math.random())
                    }
                }, 1000)
            },
            pullingUp() {
                if (this.loading) {
                    return
                }
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    for (let i = 0; i < 5; i++) {
                        this.initData.push(Math.random())
                    }
                }, 1000)
            },
            handleScrollToElement() {
                if (this.initData.length < this.position) {
                    this.$message.error('位置不存在')
                    return
                }
                this.$refs.foodsWrapper.handleScrollToElement(`#bs-item-${this.position}`)
            },
            scrollTo(val) {
                this.$refs.foodsWrapper.handleScrollTo(this.scrollVal)
            },
            pullingDown() {
                // console.log('pullingDown')
                // this.loading = true
                // setTimeout(() => {
                //     this.loading = false
                //     this.initData.shift(Math.random())
                // }, 1000)
            }
        }
    }
</script>
<style>
.ul{
    overflow: hidden;
}
li{
    list-style: none;
}
.loading-box{
    margin: 10px;
    text-align: center;
}
.foods-wrapper{
/*必须要有定位*/
    position: absolute;
    width: calc(100% - 300px);
    height: calc(100% - 250px);
    overflow: hidden;
}
</style>


<template>
    <div class="animate-box">
        <div ref="ani">111111111111</div>
        <div class="animated swing">111111111111</div>
        <el-button @click="animate">dianji</el-button>
        <transition
            name="fade"
            appear
            enter-active-class="animated swing"
            leave-active-class="animated shake"
            appear-active-class="animated swing">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="date"
                    label="日期"
                    width="180"/>
                <el-table-column
                    prop="name"
                    label="姓名"
                    width="180"/>
                <el-table-column
                    prop="address"
                    label="地址"/>
            </el-table>
        </transition>

    </div>
</template>

<script>

    export default {
        name: 'Animate11',
        components: {},
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },

        computed: {},
        watch: {},
        created() {

        },

        mounted() {

        },
        methods: {
            animate() {
                console.log(this.$refs.ani)
                this.$refs.ani.classList.add('animated', 'bounceOutLeft')
            }
        }
    }
</script>

<style scoped lang="scss">

</style>

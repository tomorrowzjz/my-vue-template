<template>
    <el-button @click="test">test兄弟组件传值</el-button>
</template>

<script>
//    import bus from '../js/eventBus'
    export default {
        name: '',
        data() {
            return {
                msg: 'bortherone'
            }
        },

        methods: {
            test() {
                console.log('brotherone')
                console.log('brotherone')
                // 重点在keep-alive包裹起来<router-view/>或者一个页面中两个不同的组件直接的传值
                this.bus.$emit('brothertest', 'zjz')
            }
        }
    }
</script>

<style scoped>

</style>

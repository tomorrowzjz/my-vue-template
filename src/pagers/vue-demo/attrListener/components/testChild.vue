<template>
    <div>
        <p>{{ attr }}</p>
        <el-button @click="startUpRocket">listener</el-button>
        <el-divider content-position="center">attr listener</el-divider>

        <p>$attrs类似于不定参数可以把子组件没有用props接收的参数传递给下一层级的子组件，高阶组件常用到，扩展性好</p>
    </div>

</template>

<script>
    export default {
        name: 'TestChild',
        props: {
            attr: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                msg: ''
            }
        },
        methods: {
            startUpRocket() {
                this.$emit('upRocket')
            }
        }
    }
</script>

<style scoped>

</style>

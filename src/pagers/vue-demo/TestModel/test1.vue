<template>
    <div>
        <div>{{ testone }}</div>
        <el-button @click="testmethod">组件的v-model</el-button>
    </div>
</template>

<script>
    export default {
        name: '',
        model: {
            // eslint-disable-next-line
            prop: 'testone',
            event: 'testmethod'
        },
        props: {
            testone: {
                type: Number,
                default: 0
            }
        },

        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },

        methods: {
            testmethod() {
                this.$emit('testmethod', 6)
            }
        }
    }
</script>

<style scoped>

</style>

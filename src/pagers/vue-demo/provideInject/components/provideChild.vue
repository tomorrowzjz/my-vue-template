<template>
    <testChild/>
</template>

<script>
    import testChild from './testChild.vue'
    export default {
        name: '',
        components: {
            testChild
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>

</style>

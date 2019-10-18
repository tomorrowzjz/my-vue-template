<template>
    <testChild v-bind="$attrs" v-on="$listeners"/>
</template>

<script>
    import testChild from './testChild.vue'
    export default {
        name: 'AttrListenerChild',
        components: {
            testChild
        },
        inheritAttrs: false, // attr属性就不会显示在testChild根节点上了。
        props: {
            msg: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
            }
        }
    }
</script>

<style scoped>

</style>

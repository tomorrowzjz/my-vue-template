<template>
    <div>
        <field label="标题" type="input" />
        <field label="内容" type="textarea" />
    </div>
</template>

<script>
    import field from './slot-render.vue'
    export default {
        name: '',
        components: {
            field
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

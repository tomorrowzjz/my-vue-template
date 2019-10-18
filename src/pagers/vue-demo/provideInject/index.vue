<template>
    <div class="provideInject">
        <provideChild/>
    </div>
</template>

<script>
    import provideChild from './components/provideChild.vue'
    export default {
        name: 'ProvideInject',
        provide: {
            testProvide: 'haha'
        },
        components: {
            provideChild
        },
        data() {
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>

</style>

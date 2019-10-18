<template>
    <div class="provideInject">
        <attrListenerChild
            :msg="msg"
            :attr="attr"
            @upRocket="reciveRocket"
        />
    </div>
</template>

<script>
    import attrListenerChild from './components/attrListenerChild.vue'
    export default {
        name: 'AttrListener',
        components: {
            attrListenerChild
        },
        data() {
            return {
                msg: 'mag',
                attr: 'attr11111'
            }
        },
        methods: {
            reciveRocket() {
                console.log('listener')
            }
        }
    }
</script>

<style scoped>

</style>

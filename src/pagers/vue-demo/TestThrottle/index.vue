<template>
    <div>
        111
        <Throttle :time="3000" events="click">
            <button @click="clickBtn" >click {{ count }}</button>
        </Throttle>
    </div>
</template>

<script>
    import Throttle from '@/components/Throttle/Throttle.js'
    export default {
        name: 'Index',
        components: {
            Throttle
        },
        data() {
            return {
                count: 1
            }
        },
        methods: {
            clickBtn() {
                console.log(111)
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <span>{{ msg }}</span>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                msg: 'test'
            }
        },

        mounted() {
            this.getData()
        },

        methods: {
            getData() {
                console.log('brothertwo')
                const that = this
                this.bus.$on('brothertest', function(e) {
                    console.log(e)
                    that.msg = e
                })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="myInput">
        <input type="text" @input="input">
    </div>
</template>

<script>

    export default {
        name: 'MyInput',
        components: {},
        data() {
            return {
                msg: 'hello'
            }
        },

        computed: {},
        watch: {},
        created() {

        },

        mounted() {

        },
        methods: {
            input(e) {
                this.$emit('input', e.target.value)
                this.$parent.$emit('doValidate', e.target.value)
            }
        }
    }
</script>

<style scoped lang="scss">
  .myInput{
    margin: 5px 10px;
  }
</style>

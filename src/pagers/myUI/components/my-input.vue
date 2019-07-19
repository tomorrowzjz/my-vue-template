<template>
  <div class="myInput">
    <input type="text" @input="input">
  </div>
</template>

<script>

  export default {
    name: 'myInput',
    created() {

    },
    data() {
      return {
        msg: 'hello'
      }
    },

    computed: {},

    mounted(){

    },
    methods: {
      input(e){
        this.$emit('input',e.target.value);
        this.$parent.$emit('doValidate',e.target.value);
      }
    },
    watch: {},
    components: {},
  }
</script>

<style scoped lang="scss">
  .myInput{
    margin: 5px 10px;
  }
</style>

<template>
  <testChild></testChild>
</template>

<script>
  import testChild from './testChild.vue'
  export default {
    name: '',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      testChild
    }
  }
</script>

<style scoped>

</style>

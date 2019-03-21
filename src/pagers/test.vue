<template>
    <div>
        <div>{{test}}</div>
        <el-button @click="testmethod">testbtn</el-button>
    </div>
</template>

<script>
  export default {
    name: '',
    props:{
      test:{
        type:Number
      }
    },

    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

    methods:{
      testmethod(){
        this.$emit("testmodel",6)
      }
    }
  }
</script>

<style scoped>

</style>

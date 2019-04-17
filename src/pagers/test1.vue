<template>
    <div>
        <div>{{testone}}</div>
        <el-button @click="testmethod">testbtn</el-button>
    </div>
</template>

<script>
  export default {
    name: '',
    model: {
      prop: 'testone',
      event: 'testmethod'
    },
    props:{
      testone:{
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
        this.$emit("testmethod",6)
      }
    }
  }
</script>

<style scoped>

</style>

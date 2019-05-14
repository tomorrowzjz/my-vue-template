<template>
  <div>
    <div>{{msg}}</div>
    <el-divider content-position="center">provide inject</el-divider>

    <p>父组件通过provide选项给后代组件提供值，不论且套层级有几层，子组件通过inject选项接收值</p>
  </div>

</template>

<script>
  export default {
    name: '',
    inject:['testProvide'],
    data () {
      return {
        msg: this.testProvide
      }
    }
  }
</script>

<style scoped>

</style>

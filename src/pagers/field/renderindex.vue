<template>
  <div>
    <field label="标题" type="input" />
    <field label="内容" type="textarea" />
  </div>
</template>

<script>
  import field from './slot-render.vue'
  export default {
    name: '',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components:{
      field
    }
  }
</script>

<style scoped>

</style>

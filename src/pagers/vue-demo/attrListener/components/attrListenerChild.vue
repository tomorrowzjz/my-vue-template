<template>
  <testChild v-bind="$attrs" v-on="$listeners"></testChild>
</template>

<script>
  import testChild from './testChild.vue'
  export default {
    name: 'attrListenerChild',
    inheritAttrs: false,//attr属性就不会显示在testChild根节点上了。
    props:{
      msg:String
    },
    data () {
      return {
      }
    },
    components:{
      testChild
    }
  }
</script>

<style scoped>

</style>

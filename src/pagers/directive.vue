<template>
    <div>
        <input type="text" v-focus>
    </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    directives: {
      focus: {
        // 指令的定义
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
</script>

<style scoped>

</style>

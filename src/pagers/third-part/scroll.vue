<template>
    <div>
        <button v-scroll-to="{ el: '#element',container: '.el-main', }">
            Scroll to #element
        </button>
        <div class="demo"/>
        <div id="element">
            Hi. I'm #element.
        </div>
        <div class="demo"/>
    </div>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style scoped>
  .demo{
    height: 1300px;
    background-color: #aaaaaa;
  }
</style>

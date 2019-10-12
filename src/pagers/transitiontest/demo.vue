<template>
    <div id="demo">
        <button @click="show = !show">
            Toggle
        </button>
        <transition name="fade">
            <p v-show="show">hello</p>
        </transition>
    </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
        /*transform: translateX(100%);*/
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>

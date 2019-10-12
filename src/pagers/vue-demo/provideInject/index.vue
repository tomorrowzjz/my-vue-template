<template>
  <div class="provideInject">
    <provideChild></provideChild>
  </div>
</template>

<script>
import provideChild from './components/provideChild.vue';
export default {
  name: 'provideInject',
  provide: {
    testProvide: 'haha',
  },
  data() {
    return {
      msg: '',
    };
  },
  components: {
    provideChild,
  },
};
</script>

<style scoped>

</style>

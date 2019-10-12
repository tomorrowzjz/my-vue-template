<template>
  <div class="provideInject">
    <attrListenerChild :msg="msg"
                         :attr="attr"
                         v-on:upRocket="reciveRocket"
    >
    </attrListenerChild>
  </div>
</template>

<script>
import attrListenerChild from './components/attrListenerChild.vue';
export default {
  name: 'attrListener',
  data() {
    return {
      msg: 'mag',
      attr: 'attr11111',
    };
  },
  methods: {
    reciveRocket() {
      console.log('listener');
    },
  },
  components: {
    attrListenerChild,
  },
};
</script>

<style scoped>

</style>

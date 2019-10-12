<template>
  <div class="myform">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'myform',
  created() {
    this.formItemList = [];
    this.$on('formItemAdd', this.formItemAdd);
  },
  props: {
    model: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
    },
  },
  provide() {
    return {
      form: this,
    };
  },
  data() {
    return {
      msg: 'hello',
    };
  },

  computed: {},

  mounted() {

  },
  methods: {
    formItemAdd(formItem) {
      this.formItemList.push(formItem);
    },
    async validate(callback) {
      const res = this.formItemList.map((item)=>{
        return item.doValidate();
      });
      const results = await Promise.all(res);
      let ret = true;
      results.map((result)=>{
        if (!result) {
          ret = false;
        }
      });
      callback(ret);
    },
  },
  watch: {},
  components: {},
};
</script>

<style scoped lang="scss">

</style>

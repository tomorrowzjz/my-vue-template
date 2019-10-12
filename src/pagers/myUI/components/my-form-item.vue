<template>
  <div class="formItem">
    <span v-if="label" class="label">{{label}}:</span>
    <slot></slot>
    <div class="error" v-show="errorMessage">
      {{errorMessage}}
    </div>
  </div>
</template>

<script>
import Schema from 'async-validator';
export default {
  name: 'formItem',
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String,
    },
  },
  created() {

  },
  inject: ['form'],
  data() {
    return {
      errorMessage: '',
    };
  },

  computed: {},

  mounted() {
    this.$on('doValidate', this.doValidate);
    if (this.prop) {
      this.$parent.$emit('formItemAdd', this);
    }
  },
  methods: {
    doValidate() {
      return new Promise((resolve) => {
        const des = {[this.prop]: this.form.rules[this.prop]};
        const validate = new Schema(des);
        validate.validate({[this.prop]: this.form.model[this.prop]}, (err)=>{
          if (!err) {
            this.errorMessage = '';
            resolve(true);
          } else {
            this.errorMessage = err[0].message;
            resolve(false);
          }
        });
      });
    },
  },
  watch: {},
  components: {},
};
</script>

<style scoped lang="scss">
  .formItem{
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .label{
    width: 100px;
  }
  .error{
    color: #ff0000;
  }
</style>

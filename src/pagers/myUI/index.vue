<template>
  <div class="">
    <my-form :model="ruleForm" :rules="rules" ref="myFrom">
      <my-form-item :label="label.name" prop="name" >
        <my-input v-model="ruleForm.name"></my-input>
      </my-form-item>
      <my-form-item :label="label.password" prop="pwd" >
        <my-input v-model="ruleForm.pwd"></my-input>
      </my-form-item>
      <my-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </my-form-item>
    </my-form>
  </div>
</template>

<script>
import myForm from './components/form.vue';
import myFormItem from './components/my-form-item.vue';
import myInput from './components/my-input.vue';
export default {
  name: '',
  created() {

  },
  data() {
    return {
      label: {
        name: '用户名',
        password: '密码',
      },
      ruleForm: {
        name: 'aa',
        pwd: '',
      },
      rules: {
        name: [
          {required: true, message: '用户名不能为空'},
          {min: 8, message: '用户名必须大于8个字符'},
          {max: 16, message: '用户名必须小于16个字符'},
        ],
        pwd: [
          {required: true, message: '密码不能为空'},
          {min: 8, message: '密码必须大于8个字符'},
          {max: 16, message: '密码必须小于16个字符'},
        ],
      },
    };
  },

  computed: {},

  mounted() {

  },
  methods: {
    submitForm() {
      this.$refs.myFrom.validate((ret) => {
        if (ret === false) {
          return false;
        } else {
          this.$message.success('校验通过');
        }
      });
    },
  },
  watch: {},
  components: {
    myForm,
    myFormItem,
    myInput,
  },
};
</script>

<style scoped lang="scss">

</style>

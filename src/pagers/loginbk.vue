<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-logo">
        <img src="../../assets/login-logo.png" height="54" width="46"/>
      </div>
      <p class="title">ECPro智能上货系统</p>
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules"  class="login-form" label-position="left">
        <p class="title-user">用户登录</p>
        <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
          <el-input v-model="loginForm.username" name="username" type="text" auto-complete="on" placeholder="用户名" />
        </el-form-item>
        <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
          <el-input
                  :type="pwdType"
                  v-model="loginForm.password"
                  name="password"
                  auto-complete="on"
                  placeholder="密码"
                  @keyup.enter.native="handleLogin" />
          <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
        </el-form-item>
        <div class="tips">
          <el-button type="text" class="loginbtn" @click="registerbtn">注册</el-button>
          <el-button type="text" class="loginbtn" @click="forgetPassword">忘记密码?</el-button>
        </div>
        <el-form-item>
          <el-button :loading="loading" type="primary" style="width:100%;height: 47px" @click.native.prevent="handleLogin(loginForm)">
            登录
          </el-button>
        </el-form-item>

      </el-form>
    </div>

  </div>
</template>

<script>
import {isvalidUsername} from '@/utils/validate';
import {getcategories} from '@/api/login';
import {removeToken} from '@/utils/auth';
import {getToken} from '@/utils/auth';

export default {
  name: 'Login',
  data() {
    const passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    const validateUsername = (rule, value, callback) => {
      if (value === undefined) {
        callback(new Error('请输入用户名'));
      } else {
        callback();
      }
    };
    // const validatePass = (rule, value, callback) => {
    //   if (value === undefined) {
    //      callback(new Error('请输入密码'))
    //   } else if(value && !passpattern.test(value)) {
    //       callback(new Error('密码格式有误,请重新输入!'))
    //   } else {
    //       callback()
    //   }
    // }
    return {
      loginForm: {
        username: '',
        password: '',
        auth_type: 'password',
      },
      loginRules: {
        username: [{trigger: 'blur', validator: validateUsername}],
      //  password: [{  trigger: 'blur', validator: validatePass }]
      },
      form: {
        name: '',
        region: '',
      },
      formLabelWidth: '120px',
      //      forgerPassworddialogVisible:false,
      loading: false,
      pwdType: 'password',
      redirect: undefined,
    };
  },
  mounted() {
    this.loginForm = this.$route.params;
    removeToken();
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    forgetPassword() {
      //      this.forgerPassworddialogVisible = true;
      this.$router.push( {
        path: '/forgetPassword',
      });
    },
    registerbtn() {
      this.$router.push( {
        path: '/register',
      });
    },
    showPwd() {
      if (this.pwdType === 'password') {
        this.pwdType = '';
      } else {
        this.pwdType = 'password';
      }
    },
    handleLogin(loginForm) {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.loading = true;
          this.loginForm.auth_type = 'password';
          this.$store.dispatch('userLogin', this.loginForm).then((res) => {
            if (res.code == 0) {
              this.loading = false;
              const token = getToken();
              const str = JSON.parse(window.atob(token.split('.')[1]));
              console.log(str);
              const user_status = str.user_status;
              const roles = str.user_roles[0];
              if (roles == 'admin') {
                if (user_status == 'enabled') {
                  this.$router.push({path: this.redirect || '/'});
                } else {
                  this.$router.push({path: 'usercenter/index'});
                }
              } else {
                this.$router.push({path: this.redirect || '/'});
              }

              //              this.$router.push({ path: this.redirect || '/' })
            } else {
              this.loading = false;
              this.$message.error(res.message);
            }
          }).catch(() => {
            this.loading = false;
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style rel="stylesheet/scss" lang="scss">
$bg:#2d3a4b;
$light_gray:#eee;
/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: #333;
      height: 47px;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0px 1000px #D8D8D8 inset ;
        -webkit-text-fill-color: #333 !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: #D8D8D8;
    border-radius: 5px;
    color: #454545;
  }
}

</style>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;
.login-box{
  position: fixed;
  top:50%;
  left: 50%;
  transform:translate(-50%,-50%);
}
.login-logo{
  text-align: center;
  margin-bottom: 20px;
}
.title-user{
  font-size: 26px;
  color: $light_gray;
  margin: 0px auto 40px auto;
  text-align: center;
  color: #333;
}
.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
background:url('../../assets/background-img.png') no-repeat;
background-position:center top;
  /*background-color: $bg;*/
  .login-form {
    /*position: absolute;*/
    /*left: 0;*/
    /*right: 0;*/
    width: 450px;
    max-width: 100%;
    padding: 35px 35px 15px 35px;
    margin: 10px auto;
    background: #FFFFFF;
    box-shadow: 0 0 9px 1px rgba(74,144,226,0.26);
    border-radius: 4px;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }
  .title {
    font-size: 30px;
    /*font-weight: 400;*/
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    /*font-weight: bold;*/
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

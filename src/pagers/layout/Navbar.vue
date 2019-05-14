<template>
  <div>
    <div class="isCollapse"
         @click="isCollapseMethod">
      <i class="el-icon-menu"></i>
    </div>
    <div>
      <el-dropdown trigger="click" style="cursor:pointer">
        <span class="el-dropdown-link">
            王小虎<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link class="homepage" to="/table">
            <el-dropdown-item>主页</el-dropdown-item>
          </router-link>
          <el-dropdown-item>
            <span @click="logOut">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
      }
    },
    methods:{
      isCollapseMethod(){
        this.$emit('isCollapseMethod')
      },
      logOut(){
        this.$emit('logOut')
      }
    }
  }
</script>

<style scoped>

</style>

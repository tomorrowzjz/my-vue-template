<template>
    <el-container>
        <el-aside width="" class="aside" style="background-color: rgb(84 , 92, 100); transition: width 2s;" ref="aside">
            <Sidebar :isCollapse="isCollapse"
                     :activeNav="activeNav"></Sidebar>
        </el-aside>
        <el-container>
            <el-header>
                <Navbar class="header"
                        @isCollapseMethod="isCollapseMethod"
                        @logOut="logOut"></Navbar>
            </el-header>
            <el-main>
                <AppMain id="main"></AppMain>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
  import Navbar from './Navbar.vue'
  import Sidebar from './Sidebar.vue'
  import AppMain from './AppMain.vue'
  const uuidv1 = require('uuid/v4');
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item),
        isCollapse: false,
        activeNav: this.$route.path
      }
    },
    methods:{
      logOut(){
        this.$router.push({path:'/login'})
      },
      isCollapseMethod(){
        this.isCollapse = !this.isCollapse;
      }
    },
    mounted(){
      console.log(uuidv1());
      console.log(uuidv1());
      console.log(uuidv1());
      console.log(uuidv1());
      console.log(uuidv1());
//      console.log(this.$router.history.current.path);
//      console.log(this.$route);
//      this.activeNav = this.$route.path;
      /*this.activeNav = this.$router.history.current.path||this.$router.path;
      console.log(this.$router.path);*/
    },
    components:{
      Navbar,
      Sidebar,
      AppMain
    }
  };
</script>

<style>
    .homepage{
        text-decoration: none;
    }
    .el-header {
        background-color: #FFFFFF;
        color: #333;
        padding-right: 20px;
        line-height: 60px;
        border-bottom: solid 1px #e6e6e6;
    }

    .el-aside {
        color: #333;
    }

    .el-footer {
        background-color: #FFFFFF;
        color: #333;
        text-align: center;
        line-height: 60px;
        border-top: solid 1px #e6e6e6;
        /*border-bottom: solid 1px #e6e6e6;*/
    }

    .el-menu {
        height: 100%;
        /*overflow: hidden;*/
    }

    .navigation {
        /*padding-right:25px ;*/
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }

    .el-menu-vertical-demo {
        width: 56px;
    }

    .el-scrollbar .el-scrollbar__wrap {
        overflow-x: hidden;
    }

    .isCollapse{
        line-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor:pointer;
        width:50px;
    }

    .header{
        text-align: right;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
    }
    .scrollbar-wrapper{
        height: 100%;
    }
</style>
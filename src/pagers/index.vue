<template>
    <el-container>
        <el-aside width="" style="background-color: rgb(84 , 92, 100); transition: width 2s;" :style="isCollapse?'width: auto':'width:216px'" ref="aside">
            <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
            <!--<el-radio-button :label="false">展开</el-radio-button>-->
            <!--<el-radio-button :label="true">收起</el-radio-button>-->
            <!--</el-radio-group>-->
            <!--<el-menu :default-openeds="['1', '3']" :default-active="this.$router.path" router :collapse="isCollapse">-->
            <el-menu :default-active="activeNav" router :collapse="isCollapse" class="el-menu-vertical-demo"
                     background-color="#545c64"
                     text-color="#fff" active-text-color="#ffd04b" style="border: none">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message navigation"></i><span slot="title">导航一</span>
                    </template>
                    <el-menu-item-group>
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="/table">table</el-menu-item>
                        <el-menu-item index="/form">form</el-menu-item>
                        <!--</el-menu-item-group>-->
                        <!--<el-menu-item-group>-->
                        <el-menu-item index="echarts">echarts</el-menu-item>
                        <el-menu-item index="waterfall">waterfall</el-menu-item>
                        <el-menu-item index="enlarge">enlarge</el-menu-item>
                        <el-menu-item index="mock">mock</el-menu-item>
                        <el-menu-item index="directive">directive</el-menu-item>
                        <el-menu-item index="imageEditor">imageEditor</el-menu-item>
                        <el-menu-item index="imagecropper">imagecropper</el-menu-item>
                        <el-menu-item index="vuedraggable">vuedraggable</el-menu-item>
                        <el-menu-item index="menu">menu</el-menu-item>
                        <el-menu-item index="caneditortable">caneditortable</el-menu-item>
                        <el-menu-item index="eleeditortable">eleeditortable</el-menu-item>
                        <el-menu-item index="better-scroll">better-scroll</el-menu-item>
                        <el-menu-item index="handsontable">handsontable</el-menu-item>
                        <el-menu-item index="fatherdrag">fatherdrag</el-menu-item>
                        <el-menu-item index="scrollTo">scrollTo</el-menu-item>
                        <el-menu-item index="vuedraggable_test">vuedraggable_test</el-menu-item>
                        <el-menu-item index="mergeTable">mergeTable</el-menu-item>
                        <el-menu-item index="SKU">SKU</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu navigation"></i><span slot="title">导航二</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="2-3">选项3</el-menu-item>

                    </el-menu-item-group>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting navigation"></i><span slot="title">导航三</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="3-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="3-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px;display: flex;justify-content: space-between;">
                <!--<el-button >dianji</el-button>-->
                <div style="line-height: 100%; display: flex;align-items: center;justify-content: center; cursor:pointer; width:50px;"
                     @click="isCollapseMethod">
                    <i class="el-icon-menu"></i>
                </div>
                <div>
                    <!--<el-dropdown>
                        <i class="el-icon-setting" style="margin-right: 15px"></i>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>查看</el-dropdown-item>
                            <el-dropdown-item>新增</el-dropdown-item>
                            <el-dropdown-item>删除</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                    <span>王小虎</span>-->
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
                            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
                            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
                            <!--<el-dropdown-item>双皮奶</el-dropdown-item>-->
                            <!--<el-dropdown-item>蚵仔煎</el-dropdown-item>-->
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-header>

            <el-main>
                <transition name="fade-transform" mode="out-in">
                    <router-view/>
                </transition>
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </el-container>
</template>

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
</style>

<script>
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
//        console.log(this.$refs['aside'].$el.style.width);
//        if(this.isCollapse){
//          this.$refs['aside'].$el.style.width = 'auto'
//        }
//        console.log(this.$refs['aside'].$el.style.width);
      }
    },
    mounted(){
      console.log(this.$router.history.current.path);
//      console.log(this.$route);
//      this.activeNav = this.$route.path;
      this.activeNav = this.$router.history.current.path;
      console.log(this.$router.path);
    }
  };
</script>
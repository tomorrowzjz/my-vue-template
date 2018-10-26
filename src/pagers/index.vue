<template>
    <el-container style=" border: 1px solid #eee">
        <el-aside width="" style="background-color: rgb(238, 241, 246)">
            <!--<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">-->
                <!--<el-radio-button :label="false">展开</el-radio-button>-->
                <!--<el-radio-button :label="true">收起</el-radio-button>-->
            <!--</el-radio-group>-->
            <!--<el-menu :default-openeds="['1', '3']" :default-active="this.$router.path" router :collapse="isCollapse">-->
            <el-menu :default-active="this.$router.path" router :collapse="isCollapse" class="el-menu-vertical-demo"  background-color="#545c64"
                     text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message navigation"></i><span slot="title">导航一</span></template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="/table">选项1</el-menu-item>
                        <el-menu-item index="/form">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu navigation"></i><span slot="title">导航二</span></template>
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
                    <template slot="title"><i class="el-icon-setting navigation"></i><span slot="title">导航三</span></template>
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
            <el-header style="text-align: right; font-size: 12px">
                <el-button @click="isCollapse=!isCollapse">dianji</el-button>
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
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
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 60px;
    }

    .el-aside {
        color: #333;
    }

    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-menu{
        height: 100%;
        /*overflow: hidden;*/
    }

    .navigation{
        /*padding-right:25px ;*/
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .el-menu-vertical-demo{
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
                isCollapse:false
            }
        }
    };
</script>
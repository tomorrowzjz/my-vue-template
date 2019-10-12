<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" style="height: 100%">
    <el-menu :default-active="activeNav" router :collapse="isCollapse" class="el-menu-vertical-demo"
             background-color="#545c64"
             unique-opened
             text-color="#fff" active-text-color="#ffd04b" style="border: none">
      <template v-for="(route,index) in sidebarRoutes">
        <el-submenu :index="index+''">
          <template slot="title">
            <i class="navigation" :class="'el-icon-'+route.meta.icon"></i>
            <!--<i class="el-icon-message navigation"></i>-->
            <span slot="title">{{route.name}}</span>
          </template>
          <el-menu-item-group>
            <template v-for = "child in route.children">
              <el-menu-item :index="child.path">{{child.name}}</el-menu-item>
            </template>

          </el-menu-item-group>
        </el-submenu>
      </template>

      <!--<el-submenu index="/2">-->
        <!--<template slot="title"><i class="el-icon-eleme navigation"></i><span slot="title">ELEMENTUI</span>-->
        <!--</template>-->
        <!--<el-menu-item-group>-->
          <!--<el-menu-item index="/table">table</el-menu-item>-->
          <!--<el-menu-item index="/form">form</el-menu-item>-->
          <!--<el-menu-item index="/transfer">transfer</el-menu-item>-->
          <!--<el-menu-item index="/checkboxDemo">checkboxDemo</el-menu-item>-->
          <!--<el-menu-item index="/validtorForm">validtorForm</el-menu-item>-->
          <!--<el-menu-item index="/mock">mock</el-menu-item>-->
          <!--<el-menu-item index="/caneditortable">caneditortable</el-menu-item>-->
          <!--<el-menu-item index="/eleeditortable">eleeditortable</el-menu-item>-->
          <!--<el-menu-item index="/fatherdrag">fatherdrag</el-menu-item>-->
          <!--<el-menu-item index="/mergeTable">mergeTable</el-menu-item>-->
          <!--<el-menu-item index="/betterTables">betterTables</el-menu-item>-->
          <!--<el-menu-item index="/two-lists">two-lists</el-menu-item>-->
        <!--</el-menu-item-group>-->
      <!--</el-submenu>-->
      <!--<el-submenu index="/3">-->
        <!--<template slot="title"><i class="el-icon-menu navigation"></i><span slot="title">第三方类库</span>-->
        <!--</template>-->
        <!--<el-menu-item-group>-->
          <!--<el-menu-item index="/SKU">SKU</el-menu-item>-->
          <!--<el-menu-item index="/handsontable">handsontable</el-menu-item>-->
          <!--<el-menu-item index="/image-lazy">image-lazy</el-menu-item>-->
          <!--<el-menu-item index="/html2canvas">html2canvas</el-menu-item>-->
          <!--<el-menu-item index="/enlarge">enlarge</el-menu-item>-->
          <!--<el-menu-item index="/better-scroll">better-scroll</el-menu-item>-->
          <!--<el-menu-item index="/echarts">echarts</el-menu-item>-->
          <!--<el-menu-item index="/waterfall">waterfall</el-menu-item>-->
          <!--<el-menu-item index="/qrcode">二维码</el-menu-item>-->
          <!--<el-menu-item index="/imageEditor">imageEditor</el-menu-item>-->
          <!--<el-menu-item index="/imagecropper">imagecropper</el-menu-item>-->
          <!--<el-menu-item index="/vue-scrollto">vue-scrollto</el-menu-item>-->
          <!--<el-menu-item index="/vue-fabric">vue-fabric</el-menu-item>-->
          <!--<el-menu-item index="/mergeImages">mergeImages</el-menu-item>-->
          <!--<el-menu-item index="/baidu-map">baidu-map</el-menu-item>-->
          <!--<el-menu-item index="/animate">animate</el-menu-item>-->
        <!--</el-menu-item-group>-->
      <!--</el-submenu>-->
      <!--<el-submenu index="/4">-->
        <!--<template slot="title"><i class="el-icon-document navigation"></i><span slot="title">NetWork</span>-->
        <!--</template>-->
        <!--<el-menu-item-group>-->
          <!--<el-menu-item index="/loading">loading</el-menu-item>-->
          <!--<el-menu-item index="/scrollTo">scrollTo</el-menu-item>-->
          <!--<el-menu-item index="/xmForm">xmForm(N)</el-menu-item>-->
          <!--<el-menu-item index="/TESTS">vuedraggable</el-menu-item>-->
        <!--</el-menu-item-group>-->
      <!--</el-submenu>-->
      <!--<el-submenu index="/5">-->
        <!--<template slot="title"><i class="el-icon-postcard navigation"></i><span slot="title">Example</span>-->
        <!--</template>-->
        <!--<el-menu-item-group>-->
          <!--<el-menu-item index="/menu">menu</el-menu-item>-->
          <!--&lt;!&ndash;<el-menu-item index="/vueScrollTo">menu</el-menu-item>&ndash;&gt;-->
          <!--<el-submenu index="/">-->
            <!--<template slot="title">兄弟组件传值</template>-->
            <!--<el-menu-item index="/brotherone">brotherone</el-menu-item>-->
            <!--<el-menu-item index="/brothertwo">brothertwo</el-menu-item>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="/zjz">-->
            <!--<template slot="title">jsx-render</template>-->
            <!--<el-menu-item index="/render">render</el-menu-item>-->
            <!--<el-menu-item index="/renderindex">renderindex</el-menu-item>-->
          <!--</el-submenu>-->
        <!--</el-menu-item-group>-->
      <!--</el-submenu>-->
      <!--<el-submenu index="/6">-->
        <!--<template slot="title"><i class="el-icon-postcard navigation"></i><span slot="title">编辑器</span>-->
        <!--</template>-->
        <!--<el-menu-item-group>-->
          <!--<el-menu-item index="/jsonEditor">jsonEditor</el-menu-item>-->
        <!--</el-menu-item-group>-->
      <!--</el-submenu>-->
    </el-menu>
  </el-scrollbar>
</template>

<script>
import {sidebarRoutes} from '../../router/index';
export default {
  name: 'Sidebar',
  props: {
    activeNav: String,
    isCollapse: Boolean,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      sidebarRoutes: [],
    };
  },
  mounted() {
    console.log(sidebarRoutes);
    console.log(this.$router.options.routes);
    this.sidebarRoutes = sidebarRoutes;
    console.log(this.activeNav);
  },
};
</script>

<style scoped>
  .navigation{
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
  }
</style>

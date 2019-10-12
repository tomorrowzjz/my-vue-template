// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// import Vuex from 'vuex'
import App from './App';
import router from './router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';// progress bar style
// import '@/styles/sidebar.scss' // global css
import axios from 'axios';
import 'normalize.css/normalize.css';
// import '../static/scrollbar.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'babel-polyfill';
import animate from 'animate.css';


import store from './store/index';
import {
  Scrollbar,
  Pagination,
  Dialog,
  Autocomplete,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Input,
  InputNumber,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  Switch,
  Select,
  Option,
  OptionGroup,
  Button,
  ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  TimeSelect,
  TimePicker,
  Popover,
  Tooltip,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Tree,
  Alert,
  Slider,
  Icon,
  Row,
  Col,
  Upload,
  Progress,
  Badge,
  Card,
  Rate,
  Steps,
  Step,
  Carousel,
  CarouselItem,
  Collapse,
  CollapseItem,
  Cascader,
  ColorPicker,
  Transfer,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  MessageBox,
  Message,
  Notification,
  Divider,
} from 'element-ui';


import VueLazyLoad from 'vue-lazyload';
if (process.env.NODE_ENV === 'development') {
  Vue.use(VueLazyLoad, {
    error: './logo.png',
    loading: './img-big.png',
  });
} else {
  Vue.use(VueLazyLoad, {
    error: '/my-vue-template-zjz/static/img/logo.png',
    loading: '/my-vue-template-zjz/static/img/img-big.png',
  });
}


// 父子组件传值总线
const bus = new Vue();
Vue.prototype.bus = bus;

Vue.use(Pagination);
Vue.use(Scrollbar);
Vue.use(Dialog);
Vue.use(Autocomplete);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);
Vue.use(CheckboxButton);
Vue.use(CheckboxGroup);
Vue.use(Switch);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(TimeSelect);
Vue.use(TimePicker);
Vue.use(Popover);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Tag);
Vue.use(Tree);
Vue.use(Alert);
Vue.use(Slider);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);
Vue.use(Upload);
Vue.use(Progress);
Vue.use(Badge);
Vue.use(Card);
Vue.use(Rate);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Cascader);
Vue.use(ColorPicker);
Vue.use(Transfer);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Divider);

Vue.use(Loading.directive);

// Vue.use(Vuex)

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
NProgress.configure({showSpinner: false});
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});


router.afterEach(() => {
  NProgress.done();
});

import VueClipboard from 'vue-clipboard2';
// var VueScrollactive = require('vue-scrollactive');
// Vue.use(VueScrollactive);
Vue.use(VueClipboard);

// 引入mockjs
// require('./mock.js')


// vues-crollto
const VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo);
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;
// vue-echarts
// import VueECharts from 'vue-echarts'
// Vue.component('chart', VueECharts);

// import chinaMap from "./assets/china.json";
// VueECharts.registerMap("china", chinaMap);


// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 500,
  easing: 'ease',
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

import 'vue-fabric/dist/vue-fabric.min.css';
import {Fabric} from 'vue-fabric';

Vue.use(Fabric);
//
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
});

// Vue.filter('getYMD', function(input) {
//   return input.split(' ')[0];
// })

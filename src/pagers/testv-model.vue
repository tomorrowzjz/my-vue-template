<template>
    <div class="index">
        <div>
            <test :test="test" @testmodel="testmodel"></test>
            <testone v-model="testone"></testone>
        </div>
        <el-button @click="hello">testv-model</el-button>
        <el-divider content-position="center">双向绑定 vuex</el-divider>
        {{testbind}}
        <el-input v-model="testbind"></el-input>
    </div>
</template>

<script>
import api from '../api/api.js';
import test from './test.vue';
import testone from './test1.vue';

export default {
  name: 'index',

  data() {
    return {
      newsListShow: [],
      test: 3,
      testone: 666,
    };
  },
  computed: {
    testbind: {
      get() {
        return this.$store.state.testbind;
      },
      set(val) {
        this.$store.commit('TESTBIND', val);
      },
    },
  },
  components: {
    test,
    testone,
  },
  created() {

  },
  mounted() {
    //      console.log(this.testbind);
    //      console.log(this.$store.state);
  },
  methods: {
    testmodel(e) {
      console.log(e);
      this.test = e;
    },

    hello() {
      console.log(this.testone);
    },
  },
//    watch:{
//      testone(val,old){
//        console.log(val, old);
//      }
//    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .topNav{
        width: 100%;
        background: #ED4040;
        position: fixed;
        top:0rem;
        left: 0;
        z-index: 10;
    }
    .simpleNav{
        width: 100%;
        line-height: 1rem;
        overflow: hidden;
        overflow-x: auto;
        text-align: center;
        font-size: 0;
        font-family: '微软雅黑';
        white-space: nowrap;
    }
    .simpleNav::-webkit-scrollbar{height:0px}
    .simpleNavBar{
        display: inline-block;
        width: 1.2rem;
        color:#fff;
        font-size:0.3rem;
    }
    .navActive{
        color: #000;
        border-bottom: 0.05rem solid #000;
    }
    .placeholder{
        width:100%;
        height: 1rem;
    }
</style>

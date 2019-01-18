<template>
<div>
    <span @contextmenu.prevent="test">11111</span>
    <div>
        <div><a href="javascript:void(0)" @click="goAnchor('#anchor-'+index)" v-for="index in 100"> {{index}} </a></div>
        <div :id="'anchor-'+index" class="item" v-for="index in 100">{{index}}</div>
    </div>
</div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      window.addEventListener('scroll', this.goAnchor)
    },
    methods:{
      test(e){
        console.log(e);
      },
        goAnchor(selector) {
          console.log(111);
          var anchor = this.$el.querySelector(selector)
          console.log(anchor);
          this.$nextTick(() => {
            document.body.scrollTop = anchor.offsetTop
            document.documentElement.scrollTop = anchor.offsetTop
            console.log(document.body.scrollTop);
            console.log(document.documentElement.scrollTop);
            console.log(anchor.offsetTop);
          });

//          console.log(document.body.scrollTop);
//          console.log(document.documentElement.scrollTop);
//          console.log(anchor.offsetTop);
        }
    }
  }
</script>

<style scoped>

</style>

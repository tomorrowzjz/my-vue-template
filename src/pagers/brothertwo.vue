<template>
    <span>{{msg}}</span>
</template>

<script>
  import bus from '../js/eventBus'
  export default {
    name: '',
    data () {
      return {
        msg: 'test'
      }
    },

    mounted(){
      this.getData();
    },

    methods:{
      getData(){
        console.log("brothertwo");
        let that = this;
       this.bus.$on('brothertest',function (e) {
          console.log(e);
          that.msg = e;
        })
      }
    }
  }
</script>

<style scoped>

</style>

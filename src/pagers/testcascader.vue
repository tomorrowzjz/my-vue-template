<template>
    <el-cascader
            v-model="test"
            :options="options2"
            :props="props"
            clearable
    ></el-cascader>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        options2:[],
        props: {
          value: 'label',
          label: 'label',
          children: 'children'
        },
        test:[]
      }
    },
    mounted(){
      this.getData();
    },
    methods:{
      getData(){
        setTimeout(()=>{
          this.options2 = [{
            label:'男装',
            children:[
              {label:'111'}
            ]
          },]
        },1000)
      }
    }
  }
</script>

<style scoped>

</style>

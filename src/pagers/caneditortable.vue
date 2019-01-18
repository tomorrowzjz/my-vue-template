<template>
    <div>
        <v-table
                :datat = "tableData"
                :thlabel="thlabel"
                :isEdit="true">
        </v-table>
    </div>

</template>

<script>
  import vtable from './vtable';
  export default{
    components:{
      'v-table':vtable,
    },
    data(){
      return{
        tableData:[{'a':'1','b':'2','c':'3','d':'8'},{'a':'4','b':'5',c:'6',d:'9'}],
        thlabel:[[{label:'测试1',prop:'a',rowspan:'2'},{label:'测试2'},{label:'测试3',colspan:'2'}],
          [{prop:'c',label:'表头2'},{prop:'b',label:'表头3'},{prop:'d',label:'表头4'}]]
      }
    }
  }
</script>

<style scoped>

</style>

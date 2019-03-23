<template>
    <div>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="pagination.currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="pagination.pagesize"
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="pagination.total">
        </el-pagination>
        {{msgnew}}
    </div>
</template>

<script>
import pagemixins from '../mixins/pagemixins'
  export default {
    name: '',
    mixins:[pagemixins],
    data () {
      return {
        msg:5
      }
    },

    computed:{
      msgnew(){
        this.testcomputed();
        return this.msg+10;
      },
    },

    mounted(){
      console.log(this.pagination);
    },

    methods:{
//      handleSizeChange(val){
//        console.log(`父组件方法每页 ${val} 条`);
//        this.msg = 100;
//      },
      getPageInfo(){
        console.log("getPageInfo");
      },
      testcomputed(){
        console.log("computed");
        console.log(this.msg);
      }
    }
  }
</script>

<style scoped>

</style>

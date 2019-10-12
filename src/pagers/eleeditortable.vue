<template>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
            <div slot-scope="scope" @click="edit(scope.row)">
                <el-input v-if="scope.row.isEdit && scope.row.status === 0" v-model="scope.row.name" @blur="blur(scope.row)"></el-input>
                <label v-if="scope.row.status === 1" class="indisable">{{scope.row.name +'(已禁用)' || '--'}}</label>
                <label v-if="!scope.row.isEdit && scope.row.status === 0">{{scope.row.name || '--'}}</label>
            </div>
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      tableData: [{
        status: 0,
        isEdit: false,
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        status: 0,
        isEdit: false,
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
      }, {
        status: 0,
        isEdit: false,
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
      }, {
        status: 0,
        isEdit: false,
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
      }],
      initUpdateVal: '',
    };
  },
  methods: {
    edit(val) {
      console.log(val);
      this.initUpdateVal = val.name;
      val.isEdit = true;
    },
    blur(val) {
      val.isEdit = false;
    },
  },
};
</script>

<style scoped>

</style>

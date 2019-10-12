<template>
    <div id="app">
        <enhanced-table
                :tableData="tableData"
                :col-configs="colConfigs">
            <el-table-column slot="options" label="操作">
                <el-button size="mini" slot-scope="{ row }">查看</el-button>
            </el-table-column>
        </enhanced-table>
        <el-button @click="addCol">add</el-button>
    </div>
</template>

<script>
import EnhancedTable from '../components/EnhancedTable';
import PrefixPlusText from '../components/PrefixPlusText';

export default {
  name: 'App',
  components: {
    EnhancedTable,
  },
  data() {
    return {
      colConfigs: [
        {prop: 'date', label: '日期'},
        {prop: 'name', label: '姓名'},
        {prop: 'address', label: '地址'},
        {prop: 'change', label: '变化', component: PrefixPlusText},
        {prop: 'trend', label: '趋势'},
        {prop: 'trend1', label: '趋势1'},
        {slot: 'options', message: 'message'},
      ],
      tableData: [{
        id: '1',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        change: '12%',
        trend: '10%',
      }, {
        id: '2',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        change: '-12%',
        trend: '-10%',
      }],
    };
  },
  methods: {
    addCol() {
      this.colConfigs.push({prop: 'date2', label: '日期1'});
      console.log(this.colConfigs);
    },
  },
};
</script>

<style>

</style>

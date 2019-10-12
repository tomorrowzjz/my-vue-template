<template>
  <div class="extendTable">
    <table>
      <tr>
        <td v-for="(data,index) in tableData[0]">
          <template v-if="index == tableData[0].length-1">

          </template>
          <template v-if="index !== tableData[0].length-1">
            <i class="el-icon-plus" @click="addCol(0,index)"></i>
            <i v-if="index!==0" class="el-icon-minus" @click="minusCol(0,index)"></i>
          </template>

        </td>
      </tr>
      <tr v-for="(data,index) in tableData">
        <td v-for="(d,ind) in data">
          <!--<el-input :value="d" v-if="d!='op'"/>-->
          <!--<span >{{d}}</span>-->
          <el-input v-model="d['a']" v-if="d!='op'"/>
          <template v-if="d=='op'">
            <i class="el-icon-plus" @click="addRow(index,ind)"></i>
            <i v-if="index!==0" class="el-icon-minus" @click="minusRow(index,ind)"></i>
          </template>

        </td>
        <!--<td>-->
          <!---->
        <!--</td>-->
      </tr>
    </table>
    <el-button @click="getTableData">getTableData</el-button>
  </div>
</template>

<script>
export default {
  name: 'extendTable',
  data() {
    return {
      tableData: [[{a: '1'}, {a: 'A1'}, {a: '2'}, 'op'], [{a: 'a'}, {a: 'bb'}, {a: 'cc'}, 'op']],
      ss: '',
    };
  },
  computed: {
    model: {
      get() {
        console.log(1);
        const arr = [];
        for (let i = 0; i < this.tableData.length; i++) {
          arr[i] = [];
          for (let j = 0; j < this.tableData[i].length; j++) {
            arr[i][j] = 's';
          }
        }
        return arr;
      },
      set(e) {
        console.log(e);
      },
    },
  },
  methods: {
    getTableData() {
      console.log(this.tableData);
    },
    addCol(row, col) {
      if (col == 0) {
        col = col+1;
      }
      this.tableData = this.tableData.map((tr)=>{
        tr.splice(col, 0, {a: ''});
        return tr;
      });
      console.log(this.tableData);
    },
    minusCol(row, col) {
      this.tableData = this.tableData.map((tr)=>{
        tr.splice(col, 1);
        return tr;
      });
      console.log(this.tableData);
    },
    addRow(row, col) {
      const temp = this.tableData[this.tableData.length-1];
      const arr = temp.map((e)=>{
        if (e == 'op') {
          return e;
        }
        return {a: 'ss'};
      });
      this.tableData.splice(row+1, 0, arr);
      console.log(this.tableData);
      //        this.tableData.push( [ "1", "A1", "2" ,"op"])
    },
    minusRow(row, col) {
      this.tableData.splice(row, 1);
      console.log(this.tableData);
    },
  },
};
</script>

<style scoped>

</style>

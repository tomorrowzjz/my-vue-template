<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Resources">
        <el-checkbox-group v-model="form.resource">
          <el-checkbox label="红色" name="type"/>
          <el-checkbox label="蓝色" name="type"/>
          <el-checkbox label="绿色" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type" @change="size">
          <el-checkbox label='{"size":"S","index":1}' name="type">S</el-checkbox>
          <el-checkbox label='{"size":"L","index":2}' name="type">L</el-checkbox>
          <el-checkbox label='{"size":"XL","index":3}' name="type">XL</el-checkbox>
          <el-checkbox label='{"size":"XXL","index":4}' name="type">XXL</el-checkbox>
        </el-checkbox-group>
      </el-form-item>


      <el-form-item label="Resources">
        <table border="1">
          <thead>
          <tr>
            <th v-for="ln in tableHeader" class="td">{{ln}}</th>
          </tr>
          </thead>
          <tbody>
          <template v-for="(item,index) in form.type.length*form.resource.length">
            <tr>
              <td v-if="index%form.type.length==0" :rowspan="form.type.length" class="td">{{form.resource[index/form.type.length]}}</td>
              <td v-for="(ln,ind) in tableHeader.length-1" class="td">
                <span v-if="ind==0">{{JSON.parse(form.type[index%form.type.length]).size}}</span>
                <el-input v-else v-model="model[index][ind-1]" placeholder="test"></el-input>
                <!--{{index}}-->
                <!--{{ind}}-->
              </td>
            </tr>
          </template>
          </tbody>
        </table>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建</el-button>
        <!--<el-button @click="onCancel">Cancel</el-button>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: [],
        desc: ''
      },
      tableData:[[1,1,1,1,1,1],[2,2,2,2,1,1],[3,3,3,3,1,1],[4,4,4,4,1,1]],
      tableHeader:['颜色','尺码','价格','数量','商家编码','商品条形码'],
      routes11:[
        {
          path: '/theme',
        },

        {
          children: [
            {
              path: 'index',
            }
          ]
        },
      ]
    }
  },
  computed:{
    model(){
      let arr = [];
      for(let i = 0;i < this.form.type.length*this.form.resource.length;i++){
        arr[i] = [];
        for (let j = 0 ;j < this.tableHeader.length-2;j++){
          arr[i][j] = 1;
        }
      }
      return arr;
    }
  },
  mounted(){
//    let test = {...this.routes11}
//    test[1].zjz = "test"
//    console.log(test);
//    console.log(this.routes11);
  },
  methods: {
    size(e){
      console.log(e);
//      let temparr = [];
//      e.map((item,index) => {
//
//        item = JSON.parse(item);
//        console.log(item.index * 1 + 1);
//        console.log(index);
//        console.log(item.index * 1 + 1 == index);
//        if (item.index*1 + 1 == index) {
//          temparr.push(item.size);
//        }
//
//      })
//      console.log(temparr);
    },
    onSubmit() {
      console.log(this.form.type);
      console.log(this.form.resource);
      console.log(this.model);
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>


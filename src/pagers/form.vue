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
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="S" name="type"/>
          <el-checkbox label="L" name="type"/>
          <el-checkbox label="XL" name="type"/>
          <el-checkbox label="XXl" name="type"/>
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
              <td v-for="(ln,ind) in tableHeader.length-1" class="td">{{ind==0?form.type[index%form.type.length]:''}}</td>
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
      tableHeader:['颜色','尺码','价格','数量','商家编码','商品条形码']
    }
  },
  methods: {
    onSubmit() {
      console.log(this.form.type);
      console.log(this.form.resource);
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


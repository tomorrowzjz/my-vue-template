<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="S" name="type"/>
          <el-checkbox label="L" name="type"/>
          <el-checkbox label="XL" name="type"/>
          <el-checkbox label="XXl" name="type"/>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Resources">
        <el-checkbox-group v-model="form.resource">
          <el-checkbox label="红色" name="type"/>
          <el-checkbox label="蓝色" name="type"/>
          <el-checkbox label="绿色" name="type"/>
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
          <template v-for="(item,index) in tableData">
            <tr>
              <td v-for="(ite,ind) in item" class="td">{{ite}}</td>
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
      tableData:[[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]],
      tableHeader:['test1','test2','test3','test4']
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


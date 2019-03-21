<template>
    <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Resources">
            <el-radio disabled v-model="radio1" label="禁用">禁用</el-radio>
            <el-radio disabled v-model="radio1" label="启用">启用</el-radio>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">创建</el-button>
            <!--<el-button @click="onCancel">Cancel</el-button>-->
        </el-form-item>
    </el-form>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        radio1:'',
        form:{

        }
      }
    }
  }
</script>

<style scoped>

</style>

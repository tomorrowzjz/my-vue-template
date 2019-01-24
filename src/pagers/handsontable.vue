<template>
    <div>
        <hot-table :settings="hotSettings"></hot-table>
        <el-button @click="test"> test</el-button>
    </div>
</template>

<script>
  import { HotTable } from '@handsontable/vue';
  import Handsontable from 'handsontable';
  import 'handsontable/languages/zh-CN';
  import 'handsontable-pro/languages/zh-CN';
  export default {
    data: function() {
      return {
        hotSettings: {
          data: Handsontable.helper.createSpreadsheetData(5, 5),
          colHeaders: true,
          contextMenu: true,
          language: 'zh-CN'
        }
      }
    },
    components: {
      HotTable
    },
    methods:{
      test(){
        console.log(this.hotSettings.data);
      }
    }
  }
</script>
<style>
    @import "https://cdn.jsdelivr.net/npm/handsontable@6.2.2/dist/handsontable.full.min.css";
</style>

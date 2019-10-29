<template>
    <div>
        <hot-table :settings="hotSettings"/>
        <el-button @click="test"> test</el-button>
    </div>
</template>

<script>
    import { HotTable } from '@handsontable/vue'
    import Handsontable from 'handsontable'
    import 'handsontable/languages/zh-CN'
    export default {
        components: {
            HotTable
        },
        data: function() {
            return {
                hotSettings: {
                    data: Handsontable.helper.createSpreadsheetData(5, 5),
                    colHeaders: ['Car model', 'Year of manufacture', 'Available'],
                    columns: [
                        {
                            data: 'car',
                            // 只读
                            readOnly: true
                        },
                        {
                            data: 'year'
                        },
                        {
                            data: 'chassis'
                        },
                        {
                            data: 'bumper'
                        }
                    ],
                    // 自动填充
                    fillHandle: true,
                    contextMenu: true,
                    // 调整大小
                    manualColumnResize: true,
                    manualRowResize: true,
                    // 移动
                    manualColumnMove: true,
                    manualRowMove: true,
                    stretchH: 'last',
                    currentRowClassName: 'currentRow',
                    currentColClassName: 'currentCol',
                    language: 'zh-CN'
                }
            }
        },
        methods: {
            test() {
                console.log(this.hotSettings.data)
            }
        }
    }
</script>
<style>
    @import "https://cdn.jsdelivr.net/npm/handsontable@6.2.2/dist/handsontable.full.min.css";
</style>

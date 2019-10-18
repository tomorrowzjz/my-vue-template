<template>
    <div class="table-wrapper" >
        <el-radio v-model="radio1" :label="false">禁用</el-radio>
        <el-radio v-model="radio1" :label="true">启用</el-radio>
        <div v-show="radio1" class="table" @click="test">

            <table border="1" >
                <thead>
                    <tr>
                        <th v-for="(ln, index) in tableHeader" :key="index" class="td">{{ ln }}</th>
                    </tr>
                </thead>
                <tbody>
                    <div v-for="(item,index) in tableData" :key="index">
                        <tr>
                            <td v-for="(ite,ind) in item" :key="ind" class="td">{{ ite }}</td>
                        </tr>
                    </div>
                </tbody>
            </table>
        </div>
        <div>test</div>
        <el-dialog :visible.sync="dialogTableVisible" title="收货地址" class="dialog">
            <!--<hot-table :settings="hotSettings1"></hot-table>-->
            <hot-table :settings="hotSettings" :style="style"/>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogTableConfirm">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import { HotTable } from '@handsontable/vue'
    import Handsontable from 'handsontable'
    import 'handsontable/languages/zh-CN'
    export default {
        name: '',
        components: {
            HotTable
        },
        data() {
            return {
                dialogTableVisible: false,
                tableData: [[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3], [4, 4, 4, 4]],
                tableHeader: ['test1', 'test2', 'test3', 'test4'],
                radio1: false,
                tableData6: [{
                    id: '12987122',
                    name: '王小虎',
                    amount1: '234',
                    amount2: '3.2',
                    amount3: 10
                }, {
                    id: '12987123',
                    name: '王小虎',
                    amount1: '165',
                    amount2: '4.43',
                    amount3: 12
                }, {
                    id: '12987124',
                    name: '王小虎',
                    amount1: '324',
                    amount2: '1.9',
                    amount3: 9
                }, {
                    id: '12987125',
                    name: '王小虎',
                    amount1: '621',
                    amount2: '2.2',
                    amount3: 17
                }, {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }, {
                    id: '12987126',
                    name: '王小虎',
                    amount1: '539',
                    amount2: '4.1',
                    amount3: 15
                }],
                isTableShow: false,
                hotSettings: {
                    data: Handsontable.helper.createSpreadsheetData(5, 5),
                    contextMenu: true,
                    language: 'zh-CN'
                },
                style: 'width: 800px; height: auto; overflow: hidden; border: none;margin: 0 auto;',
                tableDataTemp: []
            }
        },
        computed: {
            hotTableData() {
                const temparr = this.tableData.slice(0)
                temparr.unshift(this.tableHeader)
                return temparr
            }
        },
        methods: {
            dialogTableConfirm() {
                this.tableHeader = this.hotTableData.shift()
                this.tableData = this.hotTableData
                this.dialogTableVisible = false
            },
            test() {
                console.log('Test')
                this.dialogTableVisible = true
                console.log(this.hotTableData)
                this.hotSettings.data = this.hotTableData
                //        this.hotSettings1.data = this.tableHeader;
            },
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                if (columnIndex === 0) {
                    if (rowIndex % 3 === 0) {
                        console.log(rowIndex)
                        return {
                            rowspan: 3,
                            colspan: 1
                        }
                    } else {
                        return {
                            rowspan: 0,
                            colspan: 0
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    @import "https://cdn.jsdelivr.net/npm/handsontable@6.2.2/dist/handsontable.full.min.css";
    .td{
        padding: 10px;
    }
    .dialog .htContextMenu:not(.htGhostTable){
        position: absolute;
        z-index: 2060;
    }
    .table{
        margin: 20px;
    }
</style>
<style>
    .htContextMenu:not(.htGhostTable) {
        position: absolute;
        z-index: 10600;
    }
</style>

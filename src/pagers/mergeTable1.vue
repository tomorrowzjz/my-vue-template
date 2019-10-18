<template>
    <div class="table-wrapper" >
        <div class="table" @click="test">
            <!--<el-table-->
            <!--:data="tableData"-->
            <!--:span-method="objectSpanMethod"-->
            <!--border-->
            <!--style="width: 100%; margin-top: 20px">-->
            <!--<el-table-column-->
            <!--label="ID"-->
            <!--width="180">-->
            <!--<template slot-scope="scope">-->
            <!--{{scope.row[0]}}-->
            <!--</template>-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
            <!--label="姓名">-->
            <!--<template slot-scope="scope">-->
            <!--{{scope.row[1]}}-->
            <!--</template>-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
            <!--label="数值 1（元）">-->
            <!--<template slot-scope="scope">-->
            <!--{{scope.row[2]}}-->
            <!--</template>-->
            <!--</el-table-column>-->
            <!--<el-table-column-->
            <!--label="数值 2（元）">-->
            <!--<template slot-scope="scope">-->
            <!--{{scope.row[2]}}-->
            <!--</template>-->
            <!--</el-table-column>-->
            <!--&lt;!&ndash;<el-table-column&ndash;&gt;-->
            <!--&lt;!&ndash;label="数值 3（元）">&ndash;&gt;-->
            <!--&lt;!&ndash;<template slot-scope="scope">&ndash;&gt;-->
            <!--&lt;!&ndash;{{scope.row[1]}}&ndash;&gt;-->
            <!--&lt;!&ndash;</template>&ndash;&gt;-->
            <!--&lt;!&ndash;</el-table-column>&ndash;&gt;-->
            <!--</el-table>-->
            <table border="1">
                <thead>
                    <tr>
                        <th v-for="(ln,index) in tableHeader" :key="index" class="td">{{ ln }}</th>
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
        <el-dialog :visible.sync="dialogTableVisible" title="收货地址" class="dialog">
            <div class="hot-table">
                <hot-table :settings="hotSettings"/>
            </div>
            <el-button @click="getTableData">输出数据</el-button>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogTableVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogTableVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    import { HotTable } from '@handsontable/vue'
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
                    data: [{
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
                    colHeaders: ['id', 'name', 'amount1', 'amount2', 'amount3'],
                    columns: [
                        { data: 'id' },
                        { data: 'name' },
                        { data: 'amount1' },
                        { data: 'amount2' },
                        { data: 'amount3' }
                    ],
                    contextMenu: true,
                    language: 'zh-CN'
                }
            }
        },
        methods: {
            test() {
                console.log('Test')
                this.dialogTableVisible = true
                //        this.hotSettings.data = this.tableData;
            },
            getTableData() {
                console.log(this.hotSettings.data)
            },
            objectSpanMethod({ row, column, rowIndex, columnIndex }) {
                //        console.log(row);
                //        console.log(column);
                //        console.log(row, column, rowIndex, columnIndex);
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
</style>
<style>
    .htContextMenu:not(.htGhostTable) {
        position: absolute;
        z-index: 10600;
    }
</style>

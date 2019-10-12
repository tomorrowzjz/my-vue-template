<template>
    <div class="table">
        <div class="crumbs">
            <!--<el-breadcrumb separator="/">-->
                <!--<el-breadcrumb-item><i class="el-icon-tickets"></i> 基础表格</el-breadcrumb-item>-->
            <!--</el-breadcrumb>-->
        </div>
        <div class="container">
            <!--<div class="handle-box">-->
                <!--<el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>-->
                <!--<el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">-->
                    <!--<el-option key="1" label="广东省" value="广东省"></el-option>-->
                    <!--<el-option key="2" label="湖南省" value="湖南省"></el-option>-->
                <!--</el-select>-->
                <!--<el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>-->
                <!--<el-button type="primary" icon="search" @click="search">搜索</el-button>-->
            <!--</div>-->
            <div class="handle-box">
                <div class="query">
                    <el-row >
                        <el-col :span="1" class="row-bg text-size"><span>名称:</span></el-col>
                        <el-col :span="7" class="row-bg">
                            <el-input placeholder="请输入内容" v-model="query"  @keyup.enter.native="exeQuery"></el-input>
                        </el-col>
                        <div v-show="isExpand">
                            <el-col :span="4" class="row-bg">
                                <el-select v-model="type" placeholder="类型"  clearable>
                                    <el-option label="商品基础信息" value="metadata"></el-option>
                                    <el-option label="商品销售规格" value="option"></el-option>
                                    <el-option label="商品属性" value="attribute"></el-option>
                                    <el-option label="商品图片" value="image"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="4" class="row-bg">
                                <el-select v-model="status" placeholder="状态"  clearable>
                                    <el-option label="创建" value="created"></el-option>
                                    <el-option label="启用" value="enabled"></el-option>
                                    <el-option label="禁用" value="disabled"></el-option>
                                    <el-option label="废弃" value="deprecated"></el-option>
                                </el-select>
                            </el-col>
                        </div>
                        <el-col :span="8" class="row-bg">
                            <el-button type="primary" @click="exeQuery">查询</el-button>
                            <el-button type="primary" @click="reset">重置</el-button>
                            <span class="expand" @click="handleExpand">
                        <template v-if="isExpand">
                            收起 <i class="el-icon-arrow-up"></i>
                        </template>
                        <template v-else>
                            展开 <i class="el-icon-arrow-down"></i>
                        </template>
                    </span>
                        </el-col>
                    </el-row>
                    <!--<el-form :inline="true"  class="demo-form-inline">-->
                    <!--<el-form-item label="Laebl">-->

                    <!--</el-form-item>-->
                    <!--<el-form-item label="活动区域">-->

                    <!--</el-form-item>-->
                    <!--<el-form-item>-->

                    <!--</el-form-item>-->
                    <!--</el-form>-->

                </div>
            </div>
            <el-table :data="data" border style="width: 100%" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="date" label="日期" sortable width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="120">
                </el-table-column>
                <el-table-column prop="address" label="地址" :formatter="formatter">
                </el-table-column>
                <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pagination.currentPage"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="pagination.pagesize"
                        background
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="pagination.total">
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="50px">
                <el-form-item label="日期">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date" value-format="yyyy-MM-dd" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import {pages} from '../mixins/page.js';
export default {
  name: 'basetable',
  mixins: [pages],
  data() {
    return {
      url: '../static/vuetable.json',
      tableData: [],
      cur_page: 1,
      multipleSelection: [],
      select_cate: '',
      select_word: '',
      del_list: [],
      is_search: false,
      editVisible: false,
      delVisible: false,
      form: {
        name: '',
        date: '',
        address: '',
      },
      idx: -1,
      isExpand: false,
      query: '',
      type: '',
      status: '',
    };
  },
  created() {
    this.getData();
  },
  computed: {
    data() {
      return this.tableData.filter((d) => {
        let is_del = false;
        for (let i = 0; i < this.del_list.length; i++) {
          if (d.name === this.del_list[i].name) {
            is_del = true;
            break;
          }
        }
        if (!is_del) {
          if (d.address.indexOf(this.select_cate) > -1 &&
                            (d.name.indexOf(this.select_word) > -1 ||
                                d.address.indexOf(this.select_word) > -1)
          ) {
            return d;
          }
        }
      });
    },
  },
  methods: {
    // 分页导航
    exeQuery() {
    },
    reset() {

    },
    handleCurrentChange(val) {
      this.cur_page = val;
      this.getData();
    },
    // 获取 easy-mock 的模拟数据
    getData() {
      // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
      //                if (process.env.NODE_ENV === 'development') {
      //                    this.url = '/ms/table/list';
      //                };
      //                this.$axios.post(this.url, {
      //                    page: this.cur_page
      //                }).then((res) => {
      // //                    this.tableData = res.data.list;
      //                    this.tableData = {
      //                      "date": "1997-11-11",
      //                      "name": "林丽",
      //                      "address": "吉林省 辽源市 龙山区"
      //                    }, {
      //                      "date": "1987-09-24",
      //                      "name": "文敏",
      //                      "address": "江西省 萍乡市 芦溪县"
      //                    }, {
      //                      "date": "1996-08-08",
      //                      "name": "杨秀兰",
      //                      "address": "黑龙江省 黑河市 五大连池市"
      //                    }, {
      //                      "date": "1978-06-18",
      //                      "name": "魏强",
      //                      "address": "广东省 韶关市 始兴县"
      //                    }, {
      //                      "date": "1977-07-09",
      //                      "name": "石秀兰",
      //                      "address": "江苏省 宿迁市 宿豫区"
      //                    }, {
      //                      "date": "1994-09-20",
      //                      "name": "朱洋",
      //                      "address": "海外 海外 -"
      //                    };
      //                })
      this.tableData = [{
        'date': '1997-11-11',
        'name': '林丽',
        'address': '吉林省 辽源市 龙山区',
      }, {
        'date': '1987-09-24',
        'name': '文敏',
        'address': '江西省 萍乡市 芦溪县',
      }, {
        'date': '1996-08-08',
        'name': '杨秀兰',
        'address': '黑龙江省 黑河市 五大连池市',
      }, {
        'date': '1978-06-18',
        'name': '魏强',
        'address': '广东省 韶关市 始兴县',
      }, {
        'date': '1977-07-09',
        'name': '石秀兰',
        'address': '江苏省 宿迁市 宿豫区',
      }, {
        'date': '1994-09-20',
        'name': '朱洋',
        'address': '海外 海外 -',
      }];
    },
    search() {
      this.is_search = true;
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleEdit(index, row) {
      this.idx = index;
      const item = this.tableData[index];
      this.form = {
        name: item.name,
        date: item.date,
        address: item.address,
      };
      this.editVisible = true;
    },
    handleDelete(index, row) {
      this.idx = index;
      this.delVisible = true;
    },
    delAll() {
      const length = this.multipleSelection.length;
      let str = '';
      this.del_list = this.del_list.concat(this.multipleSelection);
      for (let i = 0; i < length; i++) {
        str += this.multipleSelection[i].name + ' ';
      }
      this.$message.error('删除了' + str);
      this.multipleSelection = [];
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    // 保存编辑
    saveEdit() {
      this.$set(this.tableData, this.idx, this.form);
      this.editVisible = false;
      this.$message.success(`修改第 ${this.idx+1} 行成功`);
    },
    // 确定删除
    deleteRow() {
      this.tableData.splice(this.idx, 1);
      this.$message.success('删除成功');
      this.delVisible = false;
    },
    handleExpand() {
      this.isExpand =! this.isExpand;
    },

  },
};

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .pagination{
        margin: 10px;
    }
    .query{
        margin: 10px auto;
    }
    .text-size {
        font-size: 14px;
        height: 40px;
        line-height: 40px;
    }
    .row-bg {
        padding: 10px;
    }
</style>

<template>
    <div>
        <div class="specification">
            <div class="title">产品规格设置</div>
            <ul class="spec-list">
                <li class="item" v-for="(item, index) in specification" :key="index">
                    <div class="name">
                        <el-input size="small" v-model="item.name" placeholder="输入产品规格"></el-input>
                        <i class="icon el-icon-circle-close" @click="delSpec(index)"></i>
                    </div>
                    <div class="values">
                        <span class="el-tag" v-for="(tag, num) in item.value" :key="tag">
                          <span class="el-select__tags-text">{{tag.specParamName}}</span>
                          <i class="el-tag__close el-icon-close" @click="delSpecTag(index, num)"></i>
                        </span>
                        <div class="add-attr">
                            <el-input size="small" v-model="addValues[index]" placeholder="多个产品属性以空格隔开" icon="plus" @click="addSpecTag(index)" @keyup.native.enter="addSpecTag(index)"></el-input>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="add-spec">
                <el-button size="small" type="info" :disabled="specification.length >= 5" @click="addSpec">添加规格项目</el-button>
            </div>
        </div>
        <el-form ref="form" :model="form" label-width="120px">
            <el-form-item label="Resources">
                <el-checkbox-group v-model="form.resource" @change="addSpecTag(index)">
                    <el-checkbox label="红色" name="type"/>
                    <el-checkbox label="蓝色" name="type"/>
                    <el-checkbox label="绿色" name="type"/>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="addValues">
                    <el-checkbox label="S" name="type"/>
                    <el-checkbox label="L" name="type"/>
                    <el-checkbox label="XL" name="type"/>
                    <el-checkbox label="XXl" name="type"/>
                </el-checkbox-group>
            </el-form-item>


            <!--<el-form-item>-->
                <!--<el-button type="primary" @click="onSubmit">创建</el-button>-->
                <!--<el-button @click="onCancel">Cancel</el-button>-->
            <!--</el-form-item>-->
        </el-form>
        <div class="example">
            <h4 class="title">产品规格样式一</h4>
            <table class="stock-table">
                <thead>
                <tr>
                    <th v-for="item in specification">{{item.name}}</th>
                    <th>零售价格</th>
                    <th>库存</th>
                    <th>规格编号</th>
                    <th>成本价</th>
                    <th>销量	</th>
                    <th>虚拟销量</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item, index) in countSum(0)" :key="index">
                    <td
                            v-for="(n, specIndex) in specification.length"
                            v-if="showTd(specIndex, index)"
                            :rowspan="countSum(n)">
                        {{getSpecAttr(specIndex, index)}}
                    </td>
                    <td>
                        <el-input ></el-input>
                    </td>
                    <td>
                        <el-input ></el-input>
                    </td>
                    <td>
                        <el-input ></el-input>
                    </td>
                    <td>
                        <el-input ></el-input>
                    </td>
                    <td>
                        <el-input ></el-input>
                    </td>
                    <td>
                        <el-input ></el-input>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>


</template>

<script>
  export default {
    data () {
      return {
        specification: [
          {
            name: '颜色',
            value: []
          }
        ],
        addValues: [], // 用来存储要添加的规格属性
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: [],
          desc: ''
        }
      }
    },

    methods: {
      // 添加规格项目
      addSpec () {
        if (this.specification.length < 5) {
          this.specification.push({
            name: '',
            value: []
          })
        }
      },

      // 删除规格项目
      delSpec (index) {
        this.specification.splice(index, 1)
      },

      // 添加规格属性
      addSpecTag (index) {
        let arr = this.addValues[index].trim().split(' ')
//        console.log(arr);
        let obj = {};
        let newArrs = []
        arr.forEach(item => {
          this.specification[index].value.push({
            specParamName: item,
            spacVoc: {
              price: this.costPrice, // 原价
              retailPrice: this.price, // 零售价
              active: '', // 0 禁用 1，启用
              specNo: '', //规格编号
              inventory: this.inStock, //库存
              specImagesId: '', // 图片id
              virtualSales: '', // 虚拟销量
              sales: 0 //销量
            }
          })
        })
        const res = new Map();
        let newArr = this.specification[index].value.filter(key => !res.has(key.specParamName) && res.set(key.specParamName, 1))
//        console.log(newArr)
        // newArr = Array.from(new Set(newArr)) // 去重
        this.$set(this.specification[index], 'value', newArr)
        console.log(this.specification);
        this.clearAddValues(index)
      },

      // 删除规格属性
      delSpecTag (index, num) {
        this.specification[index].value.splice(num, 1)
      },

      // 清空 addValues
      clearAddValues (index) {
        this.$set(this.addValues, index, '')
      },

        /*
         根据传入的属性值，拿到相应规格的属性
         @params
         specIndex 规格项目在 advancedSpecification 中的序号
         index 所有属性在遍历时的序号
         */
      getSpecAttr (specIndex, index) {
        // 获取当前规格项目下的属性值
        const currentValues = this.specification[specIndex].value
        let indexCopy

        // 判断是否是最后一个规格项目
        if (this.specification[specIndex + 1] && this.specification[specIndex + 1].value.length) {
          indexCopy = index / this.countSum(specIndex + 1)
        } else {
          indexCopy = index
        }

        const i = indexCopy % currentValues.length
        if (i.toString() !== 'NaN' && i % 1 === 0) {
          return currentValues[i].specParamName
        } else {
          return ''
        }
      },

      getSpecAttr2 (specIndex, index) {
        // 获取当前规格项目下的属性值
        const currentValues = this.specification[specIndex].value
        let indexCopy

        // 判断是否是最后一个规格项目
        if (this.specification[specIndex + 1] && this.specification[specIndex + 1].value.length) {
          indexCopy = index / this.countSum(specIndex + 1)
        } else {
          indexCopy = index
        }

        const i = Math.floor(indexCopy % currentValues.length)

        if (i.toString() !== 'NaN') {
          return currentValues[i]
        } else {
          return ''
        }
      },

        /*
         计算属性的乘积
         @params
         specIndex 规格项目在 advancedSpecification 中的序号
         */
      countSum (specIndex) {
        let num = 1
//        console.log(this.specification);
        this.specification.forEach((item, index) => {
          if (index >= specIndex && item.value.length) {
            num *= item.value.length
          }
        })
        console.log(num);
        return num
      },
      // 根据传入的条件，来判断是否显示该td
      showTd (specIndex, index) {
        // 如果当前项目下没有属性，则不显示
        if (!this.specification[specIndex]) {
          return false

          // 自己悟一下吧
        } else if (index % this.countSum(specIndex + 1) === 0) {
          return true
        } else {
          return false
        }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .title {
        padding: 0 12px;
        line-height: 1;
        font-size: 18px;
        border-left: 4px solid #50bfff;
        color: #666;
        margin: 0 0 16px 0;
        font-weight: 400;
    }
    .example {
        margin-top: 50px;
    }
    .specification {
        display: inline-block;
        vertical-align: top;
        width: 480px;
    .spec-list {
        background-color: #fff;
        border: 1px solid #d8d8d8;
        padding: 10px;
    .item {
        margin-top: 5px;
    &:first-child {
         margin-top: 0;
     }
    .name {
        background: #f3f6fb;
        padding: 2px 8px;
        text-align: right;
        overflow: hidden;
    .el-input {
        float: left;
        width: 150px;
    }
    .icon {
        display: none;
        color: #929292;
        cursor: pointer;
    &:hover {
         color: #880000;
     }
    }
    &:hover {
    .icon {
        display: inline-block;
    }
    }
    }
    .values {
    .el-tag {
        margin: 8px 0 0 8px;
    }
    .add-attr {
        display: inline-block;
        vertical-align: top;
    .el-input {
        width: 200px;
        margin: 2px 0 0 4px;
    }
    }
    }
    }
    .add-spec {
        font-size: 13px;
    }
    }
    }
    .stock-table {
    td,
    th {
        padding: 5px 10px;
        border: 1px solid #ddd;
        width: 100px;
        font-size: 14px;
    }
    }
</style>

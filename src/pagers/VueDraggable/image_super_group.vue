<template>
    <div class="app-container" id="element">
        <!--<div v-if="image_list&&image_list.length" >-->
            <!--<div v-for="(image, index) in image_list" :key="image.id">-->
                <!--<div class="sale-prop" >-->
                    <!--<span class="sale-prop-block"></span>-->
                    <!--<span class="sale-prop-name" @click="bascProp">基本属性</span>-->
                <!--</div>-->
                <!--<div v-for="config in image.fields" :key="config.id">-->
                    <!--<div class="container_field">-->
                        <!--<prop_field-->
                                <!--:key="config.id"-->
                                <!--v-if="config"-->
                                <!--:isChecked="isChecked"-->
                                <!--:isUpdate="isUpdate"-->
                                <!--:config="config"-->
                                <!--class="propfield"-->
                                <!--:tempparams="{}"-->
                                <!--:category_id="category_id"-->
                        <!--&gt;</prop_field>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
        <div class="row">
            <div class="col-3">
                <h3>Draggable 1</h3>
                <!--<draggable :list="list1" :options="{group:'article', disabled: disabled}"-->
                <draggable :list="list1" :options="{group:{name: falgs,pull:'clone'}, sort: true}"
                           @start="start22"
                           @end="end22"
                           class="dragArea11"
                           style="height: auto">
                    <div v-for="(element, index) in list1" :key="element.id" class="list-complete-item">
                        <div class="list-complete-item-handle">{{element.name}}</div>
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                        <div>
                            <i class="el-icon-delete" @click="handleDel(index, element.id)"></i>
                        </div>
                    </div>
                </draggable>
            </div>

            <div class="col-3">
                <h3>Draggable 2</h3>
                <draggable :list="list2" :options="{group:{name: falgs},filter: '.undraggable', sort: true}"
                           @end="end"
                           class="dragArea">
                    <div v-for="element in list2" :key="element.id"
                         :class="{undraggable : element.flag}"
                         class="list-complete-item">
                        <div class="list-complete-item-handle2">
                            {{element.name}}
                        </div>
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    </div>
                </draggable>
            </div>
        </div>
        <el-button @click="backTop">返回顶部</el-button>
        <div class="fixed-box">
            <el-button type="primary" @click="submitProductForm">提交</el-button>
            <el-button @click="submitTempProductForm">草稿箱</el-button>
        </div>
    </div>

</template>

<script>
  import prop_field from './image_field.vue'
  import Sticky from '@/components/Sticky'
  import {submitProductInfo,getProductInfo,updateProductInfo} from '@/api/products'
  import { getProductMediaFrom } from "@/api/category"
  import {ERR_OK} from '@/api/config'
  import {UUIDv4} from '@/api/uuid'
  import draggable from "vuedraggable";

  export default {
    name: 'props_super_group',
    props: {
      category_id: Number,
      product_id: Number,
      tempparams: Object
    },
    data () {
      return {
        listHeight: [],
        product_data:{},
        image_list: [],
        isUpdate:false,
        isFlag:false,
        isChecked:false,
        dragOptions: {
            group: "description",
            ghostClass: "ghost"
        },
        falgs: 'article',
        disabled: false,
        list1: [],
        list2: [{id: 1, name: 1}, {id: 2, name: 2}, {id: 3, name: 3},
          {id: 4, name: 4}, {id: 5, name: 5}, {id: 6, name: 6},
          {id: 7, name: 7}, {id: 8, name: 8}, {id: 9, name: 9}, {id: 10, name: 10}
        ]
      }
    },
    mounted() {
      setTimeout(()=>{
//        this._calculateHeight();
      },100)
//      this.addPropToConfigs();
//      this.getProductInfo();
      this.getProductMediaFrom();
    },
    computed: {
      colorFlag1(){
        return this.$store.state.props.mycolorflag;
      },
      clickX(){
        return this.$store.state.props.clickX;
      },
      clickY(){
        return this.$store.state.props.clickY;
      },
      configs: {
        get() {
          return this.$store.state.props.productform.field_sets
        }
      },
//      product_data: {
//        get() {
//
//        }
//      },
      product_data1: {
        get() {
          return this.$store.state.props.product_data;
        }
      },
      multiplateforms(){
        let propsarr = [];
        let arr = [];
        this.configs.map(e => {
          if (e.name == 'details') {
            propsarr = e;
          }
        })
        if (propsarr.length) {
          propsarr.props.map(e => {
            if (!arr.length) {
              arr.push(e.group);
            } else {
              arr.map(ele => {
                if (ele !== e.group) {
                  arr.push(e.group);
                }
              })
            }

          })
        }
        return arr
      }
    },
    components: {
      Sticky,
      prop_field,
      draggable
    },
    methods: {
      log: function(evt) {
        window.console.log(evt);
      },
      end (ev) {
        if (ev.to.className === 'dragArea11') {
          this.$set(this.list2[ev.oldIndex], 'flag', true)
        }
      },
      start22 (event) {
        this.falgs = '222222'
      },
      end22 (ev) {
        this.falgs = 'article'
      },
      handleDel (index, id) {
        this.list1.splice(index, 1)
        let q = this.list2.find((value, index, arr) => {
          return value.id === id
        })
        this.$set(q, 'flag', false)
      },
      datadragEnd(event, count, keyid) {
        for (var i = 0; i < this.datalist.length; i++) {
          if (count != i) {
            for (var a = 0; a < this.datalist[i].value.length; a++) {
              if (this.datalist[i].value[a].id == this.ids) {
                let str = JSON.stringify(this.datalist[i].value[a]);
                let strs = JSON.parse(str);
                strs.id = null;
                strs.image_group_id = this.datalist[i].key.id;
                this.datalist[i].value[a] = strs;
              }
            }
          }
        }
      },
      // 拖动结束
      onDragOver(event) {
        this.ids = event.draggedContext.element.id;
      },
      getProductMediaFrom() {
        getProductMediaFrom({category_id:13107}).then(res => {
          if (res.code == ERR_OK) {
            this.image_list = res.data.field_sets
          }
          console.log(res);
          console.log(res);
        });
      },
      constrctorProductInfo(){
        let product_data = this.product_data1;
        let arr = [];
        let tarr = [];
        let tarr1 = [];
        let tarr2 = [];
        let num = 1
        let num1 = 1
        let num2 = 1
        product_data.forEach((e,index)=>{
          if (e.field_set == 'basic') {
            tarr.push(e);
            if(num==1){
              arr.push({name:e.field_set,fields:tarr})
              num++
            }
          }else if(e.field_set == 'sales'){
            tarr1.push(e);
            if(num1==1){
              arr.push({name:e.field_set,fields:tarr1})
              num1++
            }
          }else {
            tarr2.push(e);
            if(num2==1){
              arr.push({name:e.field_set,fields:tarr2})
              num2++
            }
          }
        })
        this.product_data = arr
//        return arr;
      },
      myColor(){
        console.log(this.$refs.mycolor1);
        let color = this.$refs.mycolor1.$el;
        color.style.position = 'fixed';
        color.style.top = clickY+"px";
        color.style.left = clickX+"px";
      },
      getProductInfo(){
        getProductInfo({product_id:this.product_id}).then(res=>{
          if (res.code == ERR_OK&&res.data.product_info.length) {
            let arr = this.product_data1.map(info=>{
              let item = res.data.product_info.find(e=>{
                return e.id == info.id
              })
              if (item) {
                return item;
              }else {
                return info
              }
            })
            this.$store.commit('SET_PRODUCTDATA',arr);
            this.isUpdate = true;
          }else {
//            this.addPropToConfigs();
          }
          this.constrctorProductInfo();
        })
      },
      checkForm(item){
        if (item.require) {
          if (item.prop_value == null || item.prop_values.length == 0) {

          }
        }
      },
      submitProductForm(){
//        let tarr = [];
//        for(let i = 0 ; i<this.configs.length;i++){
//          this.configs[i].fields.map(e=>{
//            tarr.push(this.func(e))
//          })
//        }
//        console.log(this.product_data1);
//        console.log(this.product_data1);
        console.log(this.configs);
        let fail;
        this.product_data1.map(item=>{
          if (item.require) {
            //item.prop_value&&item.prop_value == null  返回null通过验证
            if (!item.prop_value&&item.prop_value === null) {
              fail = true;
              this.isChecked = true;
              this.$message.error("提交失败")
            }else if( (item.prop_values&&item.prop_values.length == 0)){
              fail = true;
              this.isChecked = true;
              this.$message.error("提交失败")
            }else {
              fail = false;
//              console.log(item);
//              console.log(item.prop_values&&item.prop_values.length == 0);
//              console.log(item.prop_value&&item.prop_value === null);
              console.log("获取值出错")
            }
          }
        })
        console.log(fail);
        console.log(this.isChecked);
        if(fail){
          return
        }
//        return
        if (this.isUpdate) {
          updateProductInfo({product_id:this.product_id,data:{product_info:this.product_data1}}).then(res=>{
            if (res.code == ERR_OK) {
              console.log(res);
              this.$message.success("修改成功")
            }
          })
        }else {
          submitProductInfo({product_id:this.product_id,data:{product_info:this.product_data1}}).then(res=>{
            if (res.code == ERR_OK) {
              console.log(res);
              this.$message.success("提交成功")
            }
          });
        }

      },

      initPropData(prop) {
        let res = {
          id: prop.id,
          field_set: prop.field_set,
          require: prop.required,
          error_message: '',
          uuid: UUIDv4()
        };

        // 判断是否多值
        if (prop.multivalued) {
          res.prop_values = []
        }else {
          res.prop_value = null;
        }

        if(prop.value_type === "nested"){
          if (prop.sub_props && prop.sub_props.length) {
            if (prop.multivalued) {
              // 懒赋值
              // res.prop_values.push({sub_props : []});
            } else {
              res.prop_value = {
                sub_props: []
              };
              prop.sub_props.forEach((sub_prop)=>{
                res.prop_value.sub_props.push(this.initPropData(sub_prop));
              })
            }
          }
        }

        if (prop.field_type == 'select') {
        } else if (prop.field_type == 'input') {
        }else if (prop.field_type == 'textarea') {
        }else if(prop.field_type == 'date_picker') {
        }else if(prop.field_type == 'checkbox') {
        }else if(prop.field_type == 'radio'){
        }else if(prop.field_type == 'tb-material'){
        }else if(prop.field_type == 'slider') {
        }else {
        }
        return res;
      },
      submitTempProductForm(){

      },
      addPropToConfigs(){
        let tarr = [];
        for(let i = 0 ; i<this.configs.length;i++){
          this.configs[i].fields.map(e=>{
            tarr.push(this.initPropData(e))
          })
        }
        this.$store.commit('SET_PRODUCTDATA',tarr);

      },
      getPlateforms(item){
        let arr = ['通用', '淘宝', '天猫', '京东'];
        return arr
      },
      _calculateHeight () {
        let plateformList = this.$refs.plateform;
        let height = 0
        this.listHeight = []
        this.listHeight.push(height)
        if (!plateformList) {
          this.$message.info("数据为空")
          return
        }
        for (var i = 0; i < plateformList.length - 1; i++) {
          let item = plateformList[i]
          let cal = item.clientHeight + 130;
          height += cal
          this.listHeight.push(height)
        }
        this.$store.commit('SET_PLATEFORMS_HEIGHT', this.listHeight)
      },
      bascProp(){
        console.log(document.documentElement.scrollTop);
      },
      saleProp(){
        console.log(document.documentElement.scrollTop);
      },
      backTop(){
        // document.documentElement.scrollTop = 0;
        this.timer = setInterval(() => {
          let osTop = document.documentElement.scrollTop || document.body.scrollTop
          let ispeed = Math.floor(-osTop / 5)
          document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed
          this.isTop = true
          if (osTop === 0) {
            clearInterval(this.timer)
          }
        }, 30)
      }
    },
//    watch: {
//      product_data1: {
//        handler(valArr, old)
//        {
//          console.log(valArr[5], old[5]);
//        },
//        deep:true
//      },
//    },
    beforeDestroy(){
      clearInterval(this.timer)
    },
  }
</script>

<style lang="scss" scoped="" type="text/css">
    .list-complete-item {
        cursor: pointer;
        position: relative;
        font-size: 14px;
        padding: 5px 12px;
        display: inline-block;
        margin-right: 20px;
        /*width: 50px;*/
        /*height: 50px;*/
        border: 1px solid #bfcbd9;
        transition: all 1s;
    }

    .list-complete-item.sortable-chosen {
        background: #4AB7BD;
    }

    .list-complete-item.sortable-ghost {
        background: #30B08F;
    }
    .undraggable {
        background-color: red;
    }

    .list-complete-enter,
    .list-complete-leave-active {
        opacity: 0;
    }
    .app-container{
        .plateform-title{
            margin: 10px;
            padding: 10px 0 0 10px;
            color: #4A90E2;
            font-weight: 600
        }
        .menu{
            background-color: #ffffff;
            height: 60px;
            border-bottom: 1px solid #ccc;
            .menu-item{
                display: inline-block;
                line-height: 60px;
                margin: 0 30px;
            }
        }
        .sale-prop{
            display: flex;
            align-items: center;
            margin: 10px;
            height: 24px;
            .sale-prop-block{
                display: inline-block;
                background: #4A90E2;
                margin-right: 8px;
                height: 20px;
                width: 6px;
            }
            .sale-prop-name{
                display: inline-block;
                line-height:24px;
            }
        }

    }

.fixed-box{
    position: fixed;
    bottom: 0;
    z-index: 9;
}

</style>

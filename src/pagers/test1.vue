<template>
    <div>
        <div>{{testone}}</div>
        <el-button @click="testmethod">组件的v-model</el-button>
    </div>
</template>

<script>
export default {
  name: '',
  model: {
    prop: 'testone',
    event: 'testmethod',
  },
  props: {
    testone: {
      type: Number,
    },
  },

  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },

  methods: {
    testmethod() {
      this.$emit('testmethod', 6);
    },
    //      modifyProductInfo(){
    //        if (this.config.field_type == 'input') {
    //
    //          let proinfo = this.searchProductInfo();
    //          if (proinfo) {
    //            this.inputValueField = proinfo.prop_value.text;
    //          }
    //        }else if(this.config.field_type == 'textarea'){
    //          let proinfo = this.searchProductInfo();
    //          if (proinfo) {
    //            this.textareaValue = proinfo.prop_value.text;
    //          }
    // //          this.textareaValue = this.layout.prop_value.text;
    //        }else if(this.config.field_type == 'select'){
    //          let arr = []
    //          let proinfo = this.searchProductInfo();
    //          if (proinfo) {
    //            this.selectvalue = arr.push(proinfo.prop_value);
    //            this.selectDefaultValue = proinfo.prop_value.text;
    //          }
    //        }else if(this.config.field_type == 'radio'){
    //          let arr = []
    //          let proinfo = this.searchProductInfo();
    //          if (proinfo) {
    //            this.radiooptions = arr.push(proinfo.prop_value);
    //            this.radioValue = proinfo.prop_value.id;
    //          }
    //        }else if(this.config.field_type == 'color_picker'){
    //          let proinfo = this.searchProductInfo();
    //          if (proinfo) {
    //            this.pickerValue = proinfo.prop_value.text;
    //          }
    //        }else if(this.config.field_type == 'sku-color'){
    //          let proinfo = this.searchProductInfo();
    //          if (proinfo) {
    //            let color = proinfo.prop_values.map(e=>{
    //              return e.sub_props[0].prop_value.text
    //            });
    //            this.$store.commit('COLOR_NAME', color);
    //          }
    //        }else if(this.config.field_type == 'slider'){
    //          let proinfo = this.searchProductInfo();
    //          if (proinfo) {
    //            this.sliderValue = proinfo.prop_value.text;
    //          }
    // //          this.sliderValue = this.layout.prop_value.text;
    //        } else if (this.config.field_type == 'checkbox') {
    //
    //          let proinfo = this.searchProductInfo();
    //          if (proinfo) {
    //            this.checkboxGroupValue = proinfo.prop_values.map(e=>{
    //              return e.id;
    //            });
    //          }
    // //          console.log(this.checkboxGroupValue);
    // //          this.$store.commit('SET_SIZES', proinfo.prop_values);
    //        } else if (this.config.field_type == 'date_picker') {
    //          let proinfo = this.searchProductInfo();
    //          if (proinfo) {
    //            this.periods = proinfo.prop_value.text;
    //          }
    //        }
    //
    //      },
  },
};
</script>

<style scoped>

</style>

<template>
  <div>

    <!--<el-button  v-scroll-to="'#element'">Scroll to #element</el-button>-->

    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city.name" :key="city.name">{{city.name}}</el-checkbox>
    </el-checkbox-group>
    <div>
      <el-input
              v-model="search"
              placeholder="testblur"
              @focus="focus"
              @blur="blur"
              @input="input"/>
      <dl v-if="isHotPlace">
        <dt>hotSearch</dt>
        <el-button @click="hotSearch">北京</el-button>
      </dl>
      <dl v-if="isSearchList">
        <dt>test</dt>
      </dl>
    </div>

  </div>
</template>
<script>

const cityOptions = [{name: '上海'}, {name: '北京'}, {name: '广州'}, {name: '深圳'}];
export default {
  data() {
    return {
      checkAll: false,
      //        checkedCities: [{name:'上海'}, {name:'北京'}],
      checkedCities: ['上海', '北京'],
      cities: cityOptions,
      isIndeterminate: true,
      search: '',
      isFocus: false,
    };
  },
  computed: {
    isHotPlace: function() {
      return this.isFocus&&!this.search;
    },
    isSearchList: function() {
      return this.isFocus&&this.search;
    },
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    focus: function() {
      this.isFocus=true;
    },
    blur: function() {
      const self=this;
      setTimeout(function() {
        self.isFocus=false;
      }, 200);
    },
    input() {

    },
    hotSearch() {
      console.log('hotSearch');
    },
  },
};
</script>

<style scope>

</style>

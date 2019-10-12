<template>
    <div class="box">
        <div class="pic">
            <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="fetchImgsData" @click="clickFn"
                                :maxCols="maxCols">
            </vue-waterfall-easy>
        </div>
    </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy';
export default {
  name: '',
  data() {
    return {
      maxCols: 6,
      imgsArr: [], // 存放所有已加载图片的数组（即当前页面会加载的所有图片）
      fetchImgsArr: [], // 存放每次滚动时下一批要加载的图片的数组
    };
  },
  methods: {
    clickFn(e, {index, value}) {
      e.preventDefault();
      // 只有当点击到图片时才进行操作
      if (e.target.tagName.toLowerCase() == 'img') {
        console.log('img clicked', index, value);
        //          this.$router.push({name: 'detail', params: {cc: value.src}})
      }
    },
    getData() {
      console.log(1);
    },
    fetchImgsData() { // 获取新的图片数据的方法，用于页面滚动满足条件时调用
      this.imgsArr = this.imgsArr.concat(this.fetchImgsArr); // 数组拼接，把下一批要加载的图片放入所有图片的数组中
    },
    initImgsArr(n, m) { // 初始化图片数组的方法，把要加载的图片装入
      const arr = [];
      for (let i = n; i < m; i++) {
        if (process.env.NODE_ENV === 'development') {
          arr.push({src: `../static/img/${i + 1}.jpg`, link: '', info: '一些图片描述文字'}); // src为加载的图片的地址、link为超链接的链接地址、
        } else {
          arr.push({src: `/my-vue-template-zjz/static/img/${i + 1}.jpg`, link: '', info: '一些图片描述文字'});
        }
      }
      return arr;
    },

  },
  components: {
    vueWaterfallEasy,
  },
  mounted() {
    this.imgsArr = this.initImgsArr(0, 20); // 初始化第一次（即页面加载完毕时）要加载的图片数据
    console.log(this.imgsArr);
    this.fetchImgsArr = this.initImgsArr(0, 20); // 模拟每次请求的下一批新的图片的数据数据
  },
};
</script>

<style scoped>
    .box,.pic{
        width: 100%;
        height: 780px;
    }
</style>

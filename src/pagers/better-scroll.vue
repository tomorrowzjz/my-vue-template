<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
          <li v-for="(item,index) in 8" class="menu-item"
              :class="{'current': currentIndex === index}"
              @click="selectMenu(index,$event)" ref="menuList">
                你好
          </li>
        </ul>
      </div>
      <Scroll class="foods-wrapper"
              ref="foodsWrapper"
              :data="initData"
              :mouseWheel="true"
              :click="false"
              :scrollbar="true"
              :pullUpLoad="true"
              :pullDownRefresh="true"
              @pullingDown="pullingDown"
              @pullingUp="pullingUp"
      >
        <ul class="ul">
          <li class="demo"  ref="foodList" v-for="(food,index) in initData">
              <h1>{{index}}</h1>
            <ul>
                <li @click.stop="testClick">11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
                <li>11111111111111111111111111</li>
            </ul>
          </li>
        </ul>
      </Scroll>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import Scroll from '../components/Scroll.vue';
const ERR_OK = 0;


export default {
  data() {
    return {
      listHeight: [],
      scrollY: 0,
      selectedFood: {},
      initData: [],
    };
  },
  created() {
    this.getData();
    //          this.$nextTick(() => {
    //            this._initScroll();
    //            this._calculateHeight();
    //          });
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        const height1 = this.listHeight[i];
        const height2 = this.listHeight[i + 1];
        if (this.scrollY >= height1 && this.scrollY < height2) {
          return i;
        }
      }
      return 0;
    },
  },
  methods: {
    pullingUp() {
      console.log('pullingUp');
    },
    pullingDown() {
      console.log('pullingDown');
      this.initData = this.initData.concat([777]);
      this.$refs.foodsWrapper.finishPullDown();
    },
    testClick() {
      this.$message.info('click');
    },
    getData() {
      console.log('test');
      setTimeout(()=>{
        this.initData = [[1111111111111111], [22222222222222222], [333333333333333333333], [8888888], [999999]];
      }, 1000);
    },
    selectMenu(index, event) {
      const foodList = document.querySelectorAll('.demo');
      const el = foodList[index];
      this.foodScroll.scrollToElement(el, 300);
    },
    _initScroll() {
      this.foodScroll = new BScroll(this.$refs.foodsWrapper, {
        click: true,
        probeType: 3,
        mouseWheel: true,
      });
      this.foodScroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(Math.round(pos.y));
      });
    },
    _calculateHeight() {
      const foodList = this.$refs.foodsWrapper.getElementsByClassName('demo');
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < foodList.length; i++) {
        const item = foodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
  },
  components: {
    Scroll,
  },
};
</script>
<style>
.menu-wrapper{
    height: 100px;
    /*overflow: hidden;*/
}
.menu-wrapper li{
    list-style: none;
    margin-left: 100px;
    float: left;
}
.foods-wrapper{
/*必须要有定位*/
    position: absolute;
    width: 80%;
    height: 500px;
    overflow: hidden;
}
.ul{
    overflow: hidden;
}
.current{
    background-color: #cccccc;
}
</style>


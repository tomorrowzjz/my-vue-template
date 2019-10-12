<template>
    <el-row>
        <el-col :span="4">
            <div class="menu">
                <ul class="dragMenu">
                    <li v-for="(menu,index) in classify"
                        @dragenter="dragEnter($event,index)"
                        @click="menuPlateformClick(index)"
                        :class="{active:current == index}">
                        {{current}}
                        <span ref="menuText" v-scroll-to="{ el: '#'+menu,container: '.el-main', }">{{menu}}</span>
                    </li>
                </ul>
            </div>
        </el-col>
        <span>this.$scrollTo(element, { offset: -70 }) 子组件异步加载时使用编程式跳转 </span>
        <el-col :span="20">
            <div  v-for="(item,index) in classify">
                <div class="title">
                    <h3 :id="item" ref="plateform"> {{item}}</h3>
                    <el-popover
                            placement="top-start"
                            title=""
                            width="200"
                            popper-class="popper"
                            trigger="hover">
                        <div v-html="true?'111111111111111111':'暂无备注'" class="ql-editor"></div>
                        <i slot="reference" class="el-icon-question"></i>
                    </el-popover>
                    <i class="el-icon-delete"></i>
                </div>
                <div class="box">
                    <draggable v-model="list" :options="{group:{name: falgs,pull:'clone'}, sort: true,animation:200}"
                        class="dragArea"
                    >
                        <div v-for="element in list" :key="element.id"
                        class="list-complete-item">
                        <div class="list-complete-item-handle2">
                        {{element.name}}
                        </div>
                        <img width="90" height="125"
                             src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                             class="image">
                        </div>
                    </draggable>
                </div>
            </div>
        </el-col>

    </el-row>
</template>

<script>
import draggable from 'vuedraggable';
export default {
  name: '',
  data() {
    return {
      classify: ['第一', '第二', '第三', '第四'],
      timeout: null,
      currentActive: -1,
      falgs: 'article',
      listItemHeight: [],
      scrollTop: 0,
      list: [{id: 1, name: 1}, {id: 2, name: 2}, {id: 3, name: 3},
        {id: 4, name: 4}, {id: 5, name: 5}, {id: 6, name: 6},
        {id: 7, name: 7}, {id: 8, name: 8}, {id: 9, name: 9}, {id: 10, name: 10},
        {id: 11, name: 11}, {id: 12, name: 12}, {id: 13, name: 13},
        {id: 14, name: 14}, {id: 15, name: 15}, {id: 16, name: 16},
        {id: 17, name: 17}, {id: 18, name: 18}, {id: 19, name: 19}, {id: 20, name: 20}, {id: 21, name: 21}, {id: 22, name: 22}, {id: 23, name: 23},
        {id: 24, name: 24}, {id: 25, name: 25}, {id: 26, name: 26},
        {id: 27, name: 27}, {id: 28, name: 28}, {id: 29, name: 29}, {id: 30, name: 30},
      ],
    };
  },
  computed: {
    current() {
      console.log(this.listItemHeight);
      for (let i = 0; i<= this.listItemHeight.length; i++) {
        //          console.log(111111111111111);
        if (this.listItemHeight[i]<=this.scrollTop&&this.scrollTop<=this.listItemHeight[i+1]) {
          return i;
        }
      }
      return this.listItemHeight.length-1;
    },
  },
  mounted() {
    setTimeout(()=>{
      this._calculateHeight();
    }, 200);
    document.querySelector('.el-main').addEventListener('scroll', this.handelScroll, false);
  },
  methods: {
    handelScroll() {
      //        console.dir(document.querySelector('.el-main').scrollTop);
      this.scrollTop = document.querySelector('.el-main').scrollTop+100;
      //        console.log(this.scrollTop);
    },
    _calculateHeight() {
      const plateformList = this.$refs.plateform;
      console.log(plateformList);
      let height = 0;
      this.listItemHeight = [];
      this.listItemHeight.push(height);
      if (!plateformList) {
        return;
      }
      for (let i = 0; i < plateformList.length - 1; i++) {
        const item = plateformList[i];
        console.log(item.clientHeight);
        const cal = item.clientHeight + 130;
        height += cal;
        this.listItemHeight.push(height);
      }
      console.log(this.listItemHeight);
    },
    dragEnter(e, index) {
      if (this.timeout !== null) clearTimeout(this.timeout);
      this.timeout = setTimeout(()=>{
        this.$refs.menuText[index].click();
      }, 500);
      this.currentActive = index;
    },
    menuPlateformClick(index) {
      this.currentActive = index;
    },
  },
  components: {
    draggable,
  },
  beforeDestroy() {
    document.removeEventListener('scroll', this.handelScroll, false);
  },
};
</script>

<style lang="scss" scoped="" type="text/css">
    ul,li{
        margin: 0;
        padding: 0;
    }
    .title{
        display: flex;
        align-items: center;
    h3{
        margin-right: 10px;
    }
    .el-icon-delete{
        margin-left: 10px;
    }
    }

    .menu{
        position: fixed;
        /*top: 120px;*/
        top: 160px;
        right: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        list-style: none;
        padding: 0;
        background: #FFFFFF;
        border: 1px solid #E4E7ED;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
        border-radius: 4px;
        z-index: 100;
    li{
        display: flex;
        justify-content: center;
        padding: 10px 20px;
        line-height: 1;
    }
    li.active{
        background: #E6F1FC;
        border: 1px solid #E4E7ED;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
        border-radius: 4px;
    }
    }
    .list-complete-item {
        cursor: pointer;
        position: relative;
        font-size: 14px;
        display: inline-block;
        margin-right: 20px;
        width: 120px;
        height: 150px;
        transition: all 1s;
    }

    .list-complete-item.sortable-chosen {
        background: #4AB7BD;
    }

    .list-complete-item.sortable-ghost {
        background: #30B08F;
    }
</style>

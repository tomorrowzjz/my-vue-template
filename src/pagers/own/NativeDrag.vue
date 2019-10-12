<template>
<div>
  <transition-group name="drog" tag="ul">
    <li draggable="true" v-for="(item, index) in lists" @dragenter="dragEnter" @dragstart="dragStart($event, index)" @dragover="allowDrop" @drop="drop($event, index)" v-bind:key="item">{{item}}</li>
  </transition-group>
</div>
</template>

<script>
export default {
  name: 'NativeDrag',
  data() {
    return {
      lists: ['1: apple', '2: banana', '3: orange', '4: melon'],
    };
  },
  methods: {
    dragEnter(e) {
      //        this.$message.error("zjz");
      console.log('zjz');
    },
    // 取消默认行为
    allowDrop(e) {
      e.preventDefault();
    },
    // 开始拖动
    dragStart(e, index) {
      console.log(e, index);
      const tar = e.target;
      e.dataTransfer.setData('Text', index);
      if (tar.tagName.toLowerCase() == 'li') {
        // console.log('drag start')
        // console.log('drag Index: ' + index)
      }
    },
    // 放置
    drop(e, index) {
      this.allowDrop(e);
      console.log(e, index);

      // console.log('drop index: ' + index);
      // 使用一个新数组重新排序后赋给原变量
      const arr = this.lists.concat([]);
      const dragIndex = e.dataTransfer.getData('Text');
      const temp = arr.splice(dragIndex, 1);

      arr.splice(index, 0, temp[0]);
      // console.log('sort');

      this.lists = arr;
      console.log(this.lists);
    },
  },
};
</script>

<style scoped>
  ul {
    min-height: 100px;
    width: 200px;
    margin: 20px auto;
    background: #eee;
  }

  li {
    min-height: 2em;
    margin-top: 10px;
    background: #abcded;
  }


  /*组件过渡类*/

  .drog-move {
    transition: transform 1s;
  }
</style>

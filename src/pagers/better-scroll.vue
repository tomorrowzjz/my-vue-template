<template>
    <div>
        <div class="menu-wrapper" ref="menuWrapper">
            <ul style="display: flex;list-style: none;justify-content: space-between">
                <li v-for="index in 8" class="menu-item"  @click="selectMenu(index, $event)">
                  <span class="text">
                    <span class="sign"  ></span>11111
                  </span>
                </li>
            </ul>
        </div>
        <div class="bscroll" ref="bscroll">
            <div class="bscroll-container">
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>
                <div class="demo">placeholder</div>

            </div>
        </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll";
  export default {
    name: '',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        menuScroll: "",
        scroll:""
      }
    },
    mounted() {
      this.$nextTick(() => {
//        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
//          click: true
//        })
        this.scroll = new BScroll(this.$refs.bscroll, {
          click: true,
          probeType: 3
        })
      })
    },
    methods:{
      selectMenu (index, event) {
        console.log(index);
        let foodList = this.$refs.bscroll.getElementsByClassName('demo');
//        console.log(foodList);
        let el = foodList[index+5]
        console.log(el);
        console.log(this.scroll);
        this.scroll.scrollToElement(el, 0)
      },
    }
  }
</script>

<style scoped>
    .bscroll{
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .menu-wrapper{
        height: 50px;
        width: 100%;
        /*overflow: hidden;*/
        z-index: 10001;
        position: fixed;
        top:100px;
    }
</style>

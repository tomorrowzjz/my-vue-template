<template>
        <div class="scorll-warpper" ref="warpper">
            <slot></slot>
        </div>
</template>

<script>
import BetterScroll from 'better-scroll';
export default {
  name: 'Scroll',
  props: {
    data: {
      type: Array,
      default: ()=>{
        return [];
      },
    },
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollY: {
      type: Boolean,
      default: true,
    },
    click: {
      type: Boolean,
      default: false,
    },
    bounce: {
      type: Boolean,
      default: false,
    },
    mouseWheel: {
      type: [Boolean, Object],
      default: false,
    },
    scrollbar: {
      type: [Boolean, Object],
      default: false,
    },
    pullDownRefresh: {
      type: [Boolean, Object],
      default: false,
    },
    pullUpLoad: {
      type: [Boolean, Object],
      default: false,
    },

  },
  data() {
    return {

    };
  },

  mounted() {
    this.$nextTick(()=>{
      this._initScroll();
    });
  },

  methods: {
    _initScroll() {
      //        if(!this.$refs.wrapper){
      //          return
      //        }
      this.bScroll = new BetterScroll(this.$refs.warpper, {
        mouseWheel: this.mouseWheel,
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX,
        scrollbar: this.scrollbar,
        pullDownRefresh: this.pullDownRefresh,
      });
      if (this.pullDownRefresh) {
        this.bScroll.on('pullingDown', () => {
          this.$emit('pullingDown');
        });
        //          this.bScroll.on('scrollEnd', () => {
        //            // 滚动到底部
        //            if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
        //              this.$emit('pullingDown')
        //            }
        //          })
      }
      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullUpLoad) {
        this.bScroll.on('scrollEnd', () => {
          // 滚动到底部
          if (this.bScroll.y <= (this.bScroll.maxScrollY + 50)) {
            this.$emit('pullingUp');
          }
        });
      }
    },
    finishPullDown() {
      this.bScroll && this.bScroll.finishPullDown();
    },
  },

  watch: {
    data() {
      console.log(111);
      setTimeout(()=>{
        this.bScroll.refresh();
      }, 20);
    },
  },
};
</script>

<style scoped>

</style>

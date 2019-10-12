<template>
    <div class="container" >
        <div class="box" ref="a">
            <div class="wrapper">
                <div class="section" style="height:500px;width:100%" v-for="(item, index) in list" :key="index" :style="{'height':index==0?'1000px':'500px'}">
                    <div style="width:100%;height:100%;font-size:30px;text-align:center;font-weight:bold;color:#fff;" :style="{'background':item.backgroundcolor}">{{item.name}}</div>
                </div>
            </div>
            <div id="nac" style="height:500px;"></div>
            <nav style="position:fixed;right:30px;top:300px;">
                <a class="nav1" v-for="(item, index) in navList" :key="index" @click="jump(index)" :class="index==0?'current':''">{{item}}</a>
            </nav>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      scroll: '',
      list: [{
        name: '第一条',
        backgroundcolor: '#90B2A3',
      }, {
        name: '第二条',
        backgroundcolor: '#A593B2',
      }, {
        name: '第三条',
        backgroundcolor: '#A7B293',
      }, {
        name: '第四条',
        backgroundcolor: '#0F2798',
      }, {
        name: '第五条',
        backgroundcolor: '#0A464D',
      }],
      navList: [1, 2, 3, 4, 5],
      box: '',
    };
  },

  methods: {
    handleScroll() {
      console.log(11111);
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const jump = document.getElementsByClassName('section');
      console.log(scrollTop, jump);
    },
    dataScroll: function() {
      this.scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(1, this.scroll);
    },
    jump(index) {
      const jump = document.getElementsByClassName('section');
      console.log(jump);
      // 获取需要滚动的距离
      const total = jump[index].offsetTop;
      console.log(total);
      // Chrome
      document.body.scrollTop = total;
      // Firefox
      document.documentElement.scrollTop = total;
      // Safari
      window.pageYOffset = total;
      console.log(document.body.scrollTop, document.documentElement.scrollTop, window.pageYOffset);
      // $('html, body').animate({
      // 'scrollTop': total
      // }, 400);
    },
    loadSroll: function() {
      const self = this;
      const $navs = $('.nav1');
      const sections = document.getElementsByClassName('section');
      for (let i = sections.length - 1; i >= 0; i--) {
        if (self.scroll >= sections[i].offsetTop - 100) {
          $navs.eq(i).addClass('current').siblings().removeClass('current');
          break;
        }
      }
    },
  },
  watch: {
    scroll: function() {
      this.loadSroll();
    },
  },
  //    mounted () {
  //      window.addEventListener('scroll', this.handleScroll)
  //    },
  mounted() {
    console.log(11111111);
    console.log(this.$refs.a);
    //      this.$refs.a.addEventListener('scroll', this.dataScroll);
    // 通过$refs获取dom元素
    this.box = this.$refs.a;
    // 监听这个dom的scroll事件
    this.box.addEventListener('scroll', () => {
      console.log(22222);
      this.dataScroll();
    }, false);
  },
  destroyed() { // 页面离开后销毁，防止切换路由后上一个页面监听scroll滚动事件会在新页面报错问题
    //      this.$refs.a.removeEventListener('scroll', this.dataScroll)
  },
};
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    .nav1 {
        display: block;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        background: #eee;
        margin: 10px 0;
    }
    .current {
        color: #fff;
        background: red;
    }
</style>

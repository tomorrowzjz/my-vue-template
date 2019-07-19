<template>
    <div>
        <div class="canvasImg" ref="imageWrapper">
            <!--需要转化为图片的html-->
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                </div>
                <img src="../assets/img-big.jpg" height="600" width="410"/>
            </el-card>


        </div>
        <img :src="dataURL " alt="" />
        <el-button @click="toImage">canvas</el-button>

        <div>------复制------</div>
        <div class="copyBox">
            sysAppId：<span>{{sysAppIds}}</span>
            <el-button class="ml10" type="primary" size="medium"
                       v-clipboard:copy="sysAppIds"
                       v-clipboard:success="onCopy"
                       v-clipboard:error="onError">点击复制</el-button>
        </div>
        <el-button @click="backTop">回到顶部</el-button>
    </div>
</template>

<script>
  import html2canvas from 'html2canvas'
  import jsPDF from 'jspdf';
  export default {
    name: '',
    data () {
      return {
        dataURL: '',
        sysAppIds: 'zjzjzz'
      }
    },
    methods: {
      backTop(){
        console.log(1);
//        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
//        console.log(top);
//
//        document.documentElement.scrollTop = 0;
//        console.dir(document.documentElement);
        let total = 100
        let top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
        document.body.scrollTop = 0
        // Firefox
        document.documentElement.scrollTop = 0
        // Safari
        window.pageYOffset = 0

        console.log(top);
//        console.log(document.body);
      },
//      let opts = {
//        scale: scale, // 添加的scale 参数
//        canvas: canvas, //自定义 canvas
//        logging: false, //日志开关，便于查看html2canvas的内部执行流程
//        width: width, //dom 原始宽度   canvas窗口的宽度
//        height: height, //canvas窗口的高度
//        windowsHeight: document.body.scrollHeight, //获取X方向滚动条的内容
//        windowsWidth: document.body.scrollWidth, //获取Y方向滚动条的内容
//        x: 0, //获取Y方向滚动条的内容
//        y: window.pageYOffset, //页面在垂直方向的滚动距离
//        useCORS: true // 【重要】开启跨域配置
//      };

  toImage() {
        html2canvas(this.$refs.imageWrapper,{
          backgroundColor: null,
          userCORS:true,//保证跨域图片的显示
        }).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png");
          var doc = new jsPDF()

          doc.addImage(dataURL, 'JPEG', 15, 40, 180, 180);
          doc.save('two-by-four.pdf')
          this.dataURL = dataURL;
        });
      },
      // 复制成功
      onCopy(e){
        console.log(e.text);
      },
      // 复制失败
      onError(e){
        alert("失败");
      },
    }
  }
</script>

<style scoped>
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
    .canvasImg{
        width: 500px;
    }
</style>

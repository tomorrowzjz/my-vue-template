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
                <!--<img src="../assets/img-big.jpg" height="600" width="410"/>-->
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
    </div>
</template>

<script>
  import html2canvas from 'html2canvas'
  export default {
    name: '',
    data () {
      return {
        dataURL: '',
        sysAppIds: 'zjzjzz'
      }
    },
    methods: {
      toImage() {
        html2canvas(this.$refs.imageWrapper,{
          backgroundColor: null
        }).then((canvas) => {
          let dataURL = canvas.toDataURL("image/png");
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

<template>
    <div style="height: 600px" ref="ddd">
      和mock冲突
        <vueCropper ref="cropper"
                    :img="img"
                    :output-size="option.size"
                    :output-type="option.outputType"
                    :info="true"
                    :full="option.full"
                    :can-scale='option.canScale'
                    :can-move="option.canMove"
                    :can-move-box="option.canMoveBox"
                    :fixed-box="option.fixedBox"
                    :original="option.original"
                    :auto-crop="option.autoCrop"
                    :auto-crop-width="option.autoCropWidth"
                    :auto-crop-height="option.autoCropHeight"
                    :center-box="option.centerBox"
                    :high="option.high"
                    :mode="option.mode"
                    @imgLoad="imgLoad"
                        ></vueCropper>
        <!--<el-button-->
                    <!--v-if="!isShowCropper"-->
                   <!--type="danger"-->
                    <!--style="position: fixed;z-index: 9999; bottom: 0"-->
                   <!--@click="onCubeImg">确定裁剪图片</el-button>-->
        <!--<img :src="option.img" alt="" width="500px">-->
        <!--<div v-if="isShowCropper" >-->
            <!--<img :src="option.img" alt="" ref="newimg"  @dblclick="test" width="1000px">-->
            <!--<el-button-->
                    <!--type="primary"-->
                    <!--@click="onResetImg">重新裁剪</el-button>-->
            <!--<el-button-->
                    <!--type="primary"-->
                    <!--@click="fanzhuan">旋转</el-button>-->
        <!--</div>-->
    </div>
</template>

<script>
import {VueCropper} from 'vue-cropper';
export default {
  name: '',
  components: {
    VueCropper,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      isShowCropper: true, // 是否显示截图框
      option: {
        size: 1,
        full: false,
        outputType: 'jpg',
        canMove: false,
        canScale: true,
        fixedBox: false,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        autoCropWidth: 150,
        autoCropHeight: 150,
        centerBox: false,
        high: true,
        mode: 'auto',
      },
      img: 'https://preview.qiantucdn.com/58pic/35/09/72/86U58PICX87kDF9Pk3K9x_PIC2018.jpg!w1024_small',
      //        option: {
      //          img: 'http://img.zcool.cn/community/01c8e3554473d80000019ae9961675.jpg',                         //裁剪图片的地址
      //          info: true,                      //裁剪框的大小信息
      //          outputSize: 1,                   // 裁剪生成图片的质量
      //          outputType: 'jpeg',              //裁剪生成图片的格式
      //          canScale: false,                 // 图片是否允许滚轮缩放
      //          autoCrop: true,                  // 是否默认生成截图框
      //          //autoCropWidth: '100%',              // 默认生成截图框宽度
      //          //autoCropHeight: '100%',             // 默认生成截图框高度
      //          fixedBox:true,
      //          centerBox:true,
      //          fixed: false,                    //是否开启截图框宽高固定比例
      //          fixedNumber: [4, 4]              //截图框的宽高比例
      //        },
      url: '',
    };
  },
  mounted() {
    //      console.log(this.option);
  },
  methods: {
    imgLoad(e) {
      if (e !== 'success') {
        return;
      }

      const {x1, x2, y1, y2} = this.$refs.cropper.getImgAxis();
      this.cropOffsetX = 100;
      this.cropOffsetY = 200;
      //        if (this.cropOffsetX) {
      //        console.log(this.$refs.cropper,this.$refs.cropper.cropOffsetX,this.$refs.cropper.cropOffsetY,x1,y1);
      this.$nextTick(()=>{
        this.$refs.cropper.cropOffsertX = this.cropOffsetX + x1;
        this.$refs.cropper.cropOffsertY = this.cropOffsetY + y1;
        this.$refs.cropper.moveCrop(null, true);
      });
      //          this.$refs.cropper.changeScale(this.scale);
      //          this.cropOffsetX = 0;
      //          this.cropOffsetY = 0;
      //        }

      //        this.$refs.cropper.scale = this.scale;
      //        this.option.autoCropWidth = crop[2];
      //        this.option.autoCropHeight = crop[3];
    },
    test() {
      this.isShowCropper = !this.isShowCropper;
    },
    onResetImg() {
      this.isShowCropper = false;
    },
    fanzhuan() {
      this.$refs.newimg.style.transform = 'scaleX(-1)';
    },
    // 确定裁剪图片
    onCubeImg() {
      // 获取cropper的截图的base64 数据
      console.log(this.$refs.ddd);
      this.$refs.cropper.getCropData((data) => {
        //          console.log(data);
        this.url = data;
        this.option.img = data;
        this.isShowCropper = true;

        // 先将显示图片地址清空，防止重复显示
        //          this.option.img = ''

        // 将剪裁后base64的图片转化为file格式
        const file = this.convertBase64UrlToBlob(data);
        //          file.name = this.fileUpload.name
        console.log(file);
        // 将剪裁后的图片执行上传
        //          this.uploadFile(file).then(res => {
        //            this.form.content = res.file_id    //将上传的文件id赋值给表单from的content
        //          })
      });
    },
    // 将base64的图片转换为file文件
    convertBase64UrlToBlob(urlData) {
      const bytes = window.atob(urlData.split(',')[1]);// 去掉url的头，并转换为byte
      // 处理异常,将ascii码小于0的转换为大于0
      const ab = new ArrayBuffer(bytes.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob([ab], {type: 'image/jpeg'});
    },
  },
};
</script>

<style scoped>

</style>

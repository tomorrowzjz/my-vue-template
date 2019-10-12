<template>
    <div>
        <input type="file"  @change="selectImage($event)">
        <div class="canvasDiv" v-if="showImg">
            <!--img背后的canvas-->
            <canvas ref="canvas" class="canvas"></canvas>
            <!--裁剪时候的背景-->
            <div class="bg" @mouseup="mouseupEvent($event)"></div>
            <!--需要裁剪的图片-->
            <img ref="img" class="img">
            <!--裁剪图片区域内的div，为了通过鼠标拖拽进行生成裁剪区域-->
            <div class="mouseDiv"
                 @mousedown="mousedownEvent($event)"
                 @mouseup="mouseupEvent($event)"
                 @mousemove="mousemoveEvent($event)"
            >
            </div>

        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      showImg: false,
      imgType: false,
      pointX: 0,
      pointY: 0,
      canvasStyle: {},
    };
  },
  methods: {
    // 文件流导出
    selectImage(event) {
      // 获取input[type=file]
      const file = event.currentTarget;
      if (!file.files || !file.files[0]) {
        return;
      }
      this.showImg = true;
      const reader = new FileReader();
      // 读取文件流
      reader.onload = (evt)=>{
        /*
             this.$refs.img.src相当于对img节点的src属性操作
             evt.target.result为图片文件装换的base64编码
             */
        this.$refs.img.src = evt.target.result;
        const imgDOM = this.$refs.img;
        // 当节点渲染完之后
        this.$nextTick(()=>{
          // 通过Image将在图片背后的canvas画出来
          const myImg = new Image();
          myImg.onload = ()=>{
            // 这里一点要乘2,否则显示出来的比例不正常,下面的一些代码也是
            this.$refs.canvas.width = imgDOM.offsetWidth * 2;
            this.$refs.canvas.height = imgDOM.offsetHeight * 2;
            // 画背后canvas
            this.$refs.canvas.getContext('2d').drawImage(myImg, 0, 0, imgDOM.offsetWidth * 2, imgDOM.offsetHeight * 2,);
          };
          myImg.src = evt.target.result;
        });
      };

      reader.readAsDataURL(file.files[0]);
    },
    // 获取鼠标刚要截取的位置
    mousedownEvent(event) {
      this.imgType = true;
      this.pointX = event.offsetX;
      this.pointY = event.offsetY;
    },
    // 当鼠标松开时候(即形成拖拽区域结束)
    mouseupEvent(event) {
      this.imgType = false;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      this.$nextTick(()=>{
        // 将img被裁剪的x,y,w,h所对应的canvas区域拿出来
        const imgData = this.$refs.canvas.getContext('2d').getImageData(
            this.canvasStyle.x * 2,
            this.canvasStyle.y * 2,
            this.canvasStyle.w * 2,
            this.canvasStyle.h * 2);
        canvas.width = this.canvasStyle.w * 2;
        canvas.height = this.canvasStyle.h * 2;
        // 将裁剪的区域给新创建的canvas
        ctx.putImageData(imgData, 0, 0, 0, 0, this.canvasStyle.w * 2, this.canvasStyle.h * 2);
        // 输出base64
        console.log(canvas.toDataURL('image/jpeg'));
        //          window.open(canvas.toDataURL("image/jpeg"));
      });
    },
    // 鼠标拖拽(通过一个参数imgType控制，当鼠标按下并移动时候才触发实现拖拽)
    mousemoveEvent(event) {
      if (this.imgType) {
        // 获取鼠标拖动的矩形区域
        const x = event.offsetX;
        const y = event.offsetY;
        const top = y < this.pointY ? y : this.pointY;
        const right = x > this.pointX ? x : this.pointX;
        const bottom = y > this.pointY ? y : this.pointY;
        const left = x < this.pointX ? x : this.pointX;
        this.canvasStyle = {
          x: left,
          y: top,
          w: right - left,
          h: bottom - top,
        };
        // 对图片进行裁剪
        this.$refs.img.style.clip = `rect(${top}px,${right}px,${bottom}px,${left}px)`;
      }
    },
  },
};
</script>

<style scoped>
    .canvasDiv{
        position: fixed;
        width: 500px;
        left: calc(50% - 250px);
        top: 100px;
    }
    .bg{
        position: fixed;
        width: 100%;
        height: 100%;
        background: black;
        opacity: 0.5;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .img{
        position: absolute;
        width: 500px;
        top: 0;
        left:0;
        z-index: 3;
        user-select: none;
    }
    .mouseDiv{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10;
    }
    .canvas{
        width: 100%;
    }

</style>

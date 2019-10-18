<template>
    <div>
        <vueCropper
            ref="cropper"
            :img="option.img"
            :output-size="option.size"
            :output-type="option.outputType"
            :info="true"
            :full="option.full"
            :can-move="option.canMove"
            :can-move-box="option.canMoveBox"
            :fixed-box="option.fixedBox"
            :original="option.original"
            :auto-crop="option.autoCrop"
            :auto-crop-width="option.autoCropWidth"
            :auto-crop-height="option.autoCropHeight"
            :center-box="option.centerBox"
            :high="option.high"
            :info-true="option.infoTrue"
            :enlarge="option.enlarge"
        />
        <!--<el-button-->
        <!--v-if="!isShowCropper"-->
        <!--type="danger"-->
        <!--style="position: fixed;z-index: 9999; bottom: 0"-->
        <!--@click="onCubeImg">确定裁剪图片</el-button>-->
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
    import VueCropper from 'vue-cropper'
    export default {
        name: '',
        components: {
            VueCropper
        },
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                isShowCropper: true, // 是否显示截图框
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
                option: {
                    img: 'http://cdn.xyxiao.cn/Landscape_1.jpg',
                    size: 1,
                    full: false,
                    outputType: 'jpeg',
                    canMove: true,
                    fixedBox: false,
                    original: false,
                    canMoveBox: true,
                    autoCrop: true,
                    // 只有自动截图开启 宽度高度才生效
                    autoCropWidth: 200,
                    autoCropHeight: 150,
                    centerBox: false,
                    high: false,
                    enlarge: 1,
                    mode: 'contain',
                    maxImgSize: 2000
                },
                url: ''
            }
        },
        mounted() {
            //      console.log(this.option);
        },
        methods: {
            test() {
                this.isShowCropper = !this.isShowCropper
            },
            onResetImg() {
                this.isShowCropper = false
            },
            fanzhuan() {
                this.$refs.newimg.style.transform = 'scaleX(-1)'
            },
            // 确定裁剪图片
            onCubeImg() {
                // 获取cropper的截图的base64 数据
                console.log(this.$refs.ddd)
                this.$refs.cropper.getCropData((data) => {
                    //          console.log(data);
                    this.url = data
                    this.option.img = data
                    this.isShowCropper = true

                    // 先将显示图片地址清空，防止重复显示
                    //          this.option.img = ''

                    // 将剪裁后base64的图片转化为file格式
                    const file = this.convertBase64UrlToBlob(data)
                    //          file.name = this.fileUpload.name
                    console.log(file)
                    // 将剪裁后的图片执行上传
                    //          this.uploadFile(file).then(res => {
                    //            this.form.content = res.file_id    //将上传的文件id赋值给表单from的content
                    //          })
                })
            },
            // 将base64的图片转换为file文件
            convertBase64UrlToBlob(urlData) {
                const bytes = window.atob(urlData.split(',')[1])// 去掉url的头，并转换为byte
                // 处理异常,将ascii码小于0的转换为大于0
                const ab = new ArrayBuffer(bytes.length)
                const ia = new Uint8Array(ab)
                for (let i = 0; i < bytes.length; i++) {
                    ia[i] = bytes.charCodeAt(i)
                }
                return new Blob([ab], { type: 'image/jpeg' })
            }
        }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <div id='code'></div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
  import QRCode from 'qrcode'
  export default{
    data(){
      return {
        codes:''
      }
    },
    components: {
      QRCode: QRCode
    },
    methods:{
      useqrcode(){
        var canvas = document.getElementById('canvas')

        QRCode.toCanvas(canvas, 'http://www.baidu.com', function (error) {
          if (error) console.error(error)
          console.log('success!');
        })
      }
    },
    mounted(){
      this.useqrcode();
    }
  }
</script>

<style scoped>

</style>

<template>
  <div>
    <vue-fabric ref="canvas" :width="600" :height="600"></vue-fabric>
  </div>
</template>

<script>
//  import 'vue-fabric/dist/vue-fabric.min.css';
//  import { Fabric } from 'vue-fabric';
export default {
  name: '',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    this.createImage();
  },
  methods: {
    createImage() {
      this.$refs.canvas.createImage('http://pic15.nipic.com/20110628/1369025_192645024000_2.jpg', {id: 10000});
      this.$refs.canvas.createTriangle({x: 0, y: 0, x1: 10, y1: 10, x2: 20, y2: 20, left: 100, top: 100, color: '#B2B2B2', drawWidth: 2, fillColor: 'rgba(255, 255, 255, 0)', id: 'triangle'});
      this.$refs.canvas.createTextbox('helloworld', {width: 30, left: 50, top: 60, fontSize: 14, id: 10001, fillColor: '#ff0000'});
    },
  },
//    components:{
//      Fabric
//    }
};
</script>

<style scoped>

</style>

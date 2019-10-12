<template>
  <div>
    <img ref="img" src="" alt="">
  </div>
</template>

<script>
import mergeImages from 'merge-images';
const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>`;
const svgToURI = (svg) => 'data:image/svg+xml;base64,' + btoa(svg);
export default {
  name: '',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  mounted() {
    this.merge();
  },
  methods: {
    merge() {
      const dataURI = 'data:image/png;base64,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';
      //        const dataURI1  = '../static/img/1.jpg'
      //        const dataURI2 = '../static/img/2.jpg'
      //        const dataURI3 = '../src/assets/img-small.jpg'
      //        const dataURI6 = '../src/assets/img-big.jpg'
      mergeImages([{src: '../static/img/body.png', x: 0, y: 0},
        {src: '../static/img/eyes.png', x: 32, y: 0},
        {src: '../static/img/mouth.png', x: 16, y: 0}]).then((b64)=>{
        this.$refs.img.src = b64;
      });
      //        mergeImages([dataURI3,dataURI6]
      //        ).then(b64=>{this.$refs.img.src = b64});
    },

  },
};
</script>

<style scoped>

</style>

<template>
    <div>
        <img ref="img" src="" alt="">
    </div>
</template>

<script>
    import mergeImages from 'merge-images'
    export default {
        name: '',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted() {
            this.merge()
        },
        methods: {
            merge() {
                //        const dataURI1  = '../static/img/1.jpg'
                //        const dataURI2 = '../static/img/2.jpg'
                //        const dataURI3 = '../src/assets/img-small.jpg'
                //        const dataURI6 = '../src/assets/img-big.jpg'
                mergeImages([{ src: '../static/img/body.png', x: 0, y: 0 },
                             { src: '../static/img/eyes.png', x: 32, y: 0 },
                             { src: '../static/img/mouth.png', x: 16, y: 0 }]).then((b64) => {
                                 this.$refs.img.src = b64
                             })
                             //        mergeImages([dataURI3,dataURI6]
                             //        ).then(b64=>{this.$refs.img.src = b64});
            }

        }
    }
</script>

<style scoped>

</style>

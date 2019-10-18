<template>
    <div>
        <div id="code"/>
        <canvas id="canvas"/>
    </div>
</template>

<script>
    import QRCode from 'qrcode'
    export default {
        components: {
            QRCode: QRCode
        },
        data() {
            return {
                codes: ''
            }
        },
        mounted() {
            this.useqrcode()
        },
        methods: {
            useqrcode() {
                const canvas = document.getElementById('canvas')

                QRCode.toCanvas(canvas, 'http://www.baidu.com', function(error) {
                    if (error) console.error(error)
                    console.log('success!')
                })
            }
        }
    }
</script>

<style scoped>

</style>

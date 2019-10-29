<template>
    <ul>
        <li v-for="(img,index) in fetchImgsArr" :key="index">
            <img v-lazy="img.src" >
        </li>
    </ul>

</template>

<script>
    export default {
        name: '',
        data() {
            return {
                fetchImgsArr: []
            }
        },

        mounted() {
            this.fetchImgsArr = this.initImgsArr(0, 20)
        },

        methods: {
            initImgsArr(n, m) { // 初始化图片数组的方法，把要加载的图片装入
                const arr = []
                for (let i = n; i < m; i++) {
                    if (process.env.NODE_ENV === 'development') {
                        arr.push({ src: `../static/img/${i + 1}.jpg`, link: '', info: '一些图片描述文字' }) // src为加载的图片的地址、link为超链接的链接地址、
                    } else {
                        arr.push({ src: `/my-vue-template-zjz/static/img/${i + 1}.jpg`, link: '', info: '一些图片描述文字' })
                    }
                }
                return arr
            }
        }
    }
</script>

<style scoped>

</style>

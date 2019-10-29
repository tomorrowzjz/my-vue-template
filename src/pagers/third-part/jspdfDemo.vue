<template>
    <div class="">
        <el-button @click="print">下载pdf</el-button>
    </div>
</template>

<script>
    import jsPDF from 'jspdf'
    export default {
        name: '',
        components: {},
        data() {
            return {
                msg: 'hello'
            }
        },
        computed: {},
        watch: {},
        created() {
        },
        mounted() {
        },
        methods: {
            print() {
                // eslint-disable-next-line
                const doc = new jsPDF()
                doc.text('Hello world!', 1, 1)
                doc.save('two-by-four.pdf')
            }
        }
    }
</script>

<style scoped lang="scss">
</style>

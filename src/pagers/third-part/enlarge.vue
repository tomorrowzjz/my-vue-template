<template>
    <div>
        <my-magnify :preview-img="data.min" :zoom-img="data.max"/>
    </div>
</template>
<script>
    import MyMagnify from '../../components/enlarge.vue'
    export default {
        components: {
            MyMagnify
        },
        data() {
            return {
                data: {
                    min:
                        'https://img.alicdn.com/imgextra/i3/2857774462/TB21fgcwwNlpuFjy0FfXXX3CpXa_!!2857774462.jpg',
                    max:
                        'https://img.alicdn.com/imgextra/i3/2857774462/TB21fgcwwNlpuFjy0FfXXX3CpXa_!!2857774462.jpg'
                }
            }
        }
    }
</script>

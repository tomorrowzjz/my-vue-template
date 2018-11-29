<template>
    <div>
        <my-magnify :previewImg="data.min" :zoomImg="data.max"></my-magnify>
    </div>
</template>
<script>
  import MyMagnify from "../components/enlarge.vue";
  export default {
    data() {
      return {
        data: {
          min:
            "https://img.alicdn.com/imgextra/i3/2857774462/TB21fgcwwNlpuFjy0FfXXX3CpXa_!!2857774462.jpg_430x430q90.jpg",
          max:
            "https://img.alicdn.com/imgextra/i3/2857774462/TB21fgcwwNlpuFjy0FfXXX3CpXa_!!2857774462.jpg"
        }
      };
    },
    components: {
      MyMagnify
    }
  }
</script>
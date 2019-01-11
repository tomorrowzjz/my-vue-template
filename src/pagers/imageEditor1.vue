<template>
    <tui-image-editor :include-ui="useDefaultUI" :options="options"></tui-image-editor>
</template>

<script>
  import {ImageEditor} from '@toast-ui/vue-image-editor';
  export default {
    components: {
      'tui-image-editor': ImageEditor
    },
    data() {
      return {
        useDefaultUI: true,
        options: { // for options prop
          cssMaxWidth: 700,
          cssMaxHeight: 500
        }
      }
    }
  }
</script>

<style scoped>

</style>

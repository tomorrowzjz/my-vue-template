<template>
  <json-editor :onChange="onValidatorsChange" :json="json_validators" :options="jsoneditor2_options"/>
</template>

<script>
  import jsonEditor from '@/components/JsonEditorone/JsonEditor.vue'
  export default {
    name: '',
    data () {
      return {
        json_validators: {},
        jsoneditor2_options : {
          mode: 'code',
        },
      }
    },
    methods:{
      onValidatorsChange(newJson) {
        this.validators = newJson
      },
    },
    components: {
      jsonEditor,
    },
  }
</script>

<style scoped>

</style>

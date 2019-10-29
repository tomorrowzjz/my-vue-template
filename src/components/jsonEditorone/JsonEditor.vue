<template>
    <div ref="jsoneditor"/>
</template>

<script>

    import JSONEditor from 'jsoneditor/dist/jsoneditor.min.js'
    import 'jsoneditor/dist/jsoneditor.min.css'
    import _ from 'lodash'

    export default {
        name: 'JsonEditor',
        props: {
            json: {
                type: Object,
                required: true
            },
            options: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            onChange: {
                type: Function,
                default: (res) => {
                    return {
                        res: ''
                    }
                }
            }
        },
        data() {
            return {
                editor: null
            }
        },
        watch: {
            json: {
                handler(newJson) {
                    if (this.editor) {
                        this.editor.set(newJson)
                    }
                },
                deep: true
            }
        },
        mounted() {
            const container = this.$refs.jsoneditor
            const options = _.extend({
                onChange: this._onChange
            }, this.options)

            this.editor = new JSONEditor(container, options)
            this.editor.editor.setOptions({ minLines: 20, maxLines: 100 })
            this.editor.set(this.json)
        },
        beforeDestroy() {
            if (this.editor) {
                this.editor.destroy()
                this.editor = null
            }
        },
        methods: {
            _onChange(e) {
                if (this.onChange && this.editor) {
                    this.onChange(this.editor.get())
                }
            }
        }
    }
</script>

<style>
</style>

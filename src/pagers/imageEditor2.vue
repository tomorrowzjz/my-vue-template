<template>
    <div class="imageEditorApp">
        <tui-image-editor
            ref="tuiImageEditor"
            :include-ui="useDefaultUI"
            :options="options"
            @addText="onAddText"
            @objectMoved="onObjectMoved"/>
    </div>
</template>
<script>
    import { ImageEditor } from '@toast-ui/vue-image-editor'

    export default {
        components: {
            'tui-image-editor': ImageEditor
        },
        data() {
            return {
                useDefaultUI: true,
                options: {
                    includeUI: {
                        loadImage: {
                            path: 'img-big.jpg',
                            name: 'SampleImage'
                        },
                        initMenu: 'filter'
                    },
                    cssMaxWidth: 700,
                    cssMaxHeight: 500
                }
            }
        },
        methods: {
            onAddText(pos) {
                console.log(pos)
            },
            onObjectMoved(props) {
                console.log(props)
            }
        }
    }
</script>
<style scoped>
    .imageEditorApp {
        width: 1000px;
        height: 800px;
    }
</style>

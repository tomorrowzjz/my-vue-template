<template>
    <label class="form-item">
        <div class="form-item_label">{{ label }}</div>
        <div class="form-item_mn">
            <slot/>
        </div>
        <div v-if="errorMsg" class="form-item_error">{{ errorMsg }}</div>
    </label>
</template>
<script>
    export default {
        name: 'FormItem',
        props: {
            prop: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                errorMsg: ''
            }
        },
        methods: {
            showError(msg) {
                this.errorMsg = msg
            }
        }
    }
</script>

<style scoped>

</style>

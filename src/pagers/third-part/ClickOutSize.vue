<template>
    <div>
        <div>111</div>
        <div v-click-outside="onClickOutside" v-show="show">
            Hide me when a click outside this element happens
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true
            }
        },

        methods: {
            onClickOutside() {
                this.show = false
            }
        }
    }
</script>

<style></style>

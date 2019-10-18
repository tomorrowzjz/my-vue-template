<template>
    <div class="details">
        <myComponent :show1.sync="valueChild" style="padding: 30px 20px 30px 5px;border:1px solid #ddd;margin-bottom: 10px;"/>
        <button @click="changeValue">toggle</button>
    </div>
</template>
<script>
    import Vue from 'vue'
    Vue.component('myComponent', {
        props: {
            show1: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            closeDiv() {
                this.$emit('update:show1', false) // 触发 input 事件，并传入新值
            }
        },
        template: `<div v-if="show1">
                    <p>默认初始值是{{show1}}，所以是显示的</p>
                    <button @click.stop="closeDiv">关闭</button>
                 </div>`
    })
    export default {
        data() {
            return {
                valueChild: true
            }
        },
        methods: {
            changeValue() {
                this.valueChild = !this.valueChild
            }
        }
    }
</script>

<style scoped>

</style>

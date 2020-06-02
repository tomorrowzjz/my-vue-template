<template>
    <transition name="fade-transform" mode="out-in">
        <keep-alive>
            <byui-keel v-if="show" style="margin: 15px;">
                <byui-keel-heading :img="true" />
                <byui-keel-text :lines="7" />
                <byui-keel-heading :img="true" />
                <byui-keel-text :lines="6" />
                <byui-keel-heading :img="true" />
                <byui-keel-text :lines="8" />
            </byui-keel>
            <router-view :key="key"/>
        </keep-alive>
    </transition>
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                show: true
            }
        },
        computed: {
            key() {
                return this.$route.path
            }
        },
        mounted() {
            setTimeout(() => {
                this.show = false
                // alert('加载完成,关闭龙骨')
            }, 3000)
        }
    }
</script>

<style scoped>

</style>

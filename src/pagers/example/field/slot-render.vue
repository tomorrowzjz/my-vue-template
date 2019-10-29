<template>
    <div>
        <label>{{ label }}</label>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Field',

        props: {
            type: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: ''
            }
        },

        created() {
            this.$slots.default = [this.renderField()]
        },

        methods: {
            renderField() {
                const h = this.$createElement
                const tag = this.type === 'textarea' ? 'textarea' : 'input'
                const type = this.type === 'textarea' ? '' : this.type

                return h(tag, { props: { type }})
            }
        }
    }
</script>

<style scoped>

</style>

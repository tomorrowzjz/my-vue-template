<template>
    <div class="form">
        <slot/>
    </div>
</template>

<script>
    import AsyncValidator from 'async-validator'

    export default {
        name: 'XmForm',
        props: {
            model: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            rule: {
                type: Object,
                default: () => {
                    return {}
                }
            }
        },
        data() {
            return {
                formItems: []
            }
        },
        mounted() {
            this.calcFormItems()
        },
        updated() {
            this.calcFormItems()
        },
        methods: {
            calcFormItems() {
                // 获取form-item的引用
                if (this.$slots.default) {
                    const children = this.$slots.default.filter((vnode) => {
                        return vnode.tag &&
                            vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'form-item'
                    }).map(({ componentInstance }) => componentInstance)

                    if (!(children.length === this.formItems.length && children.every((pane, index) => pane === this.formItems[index]))) {
                        this.formItems = children
                    }
                }
            },
            validate() {
                const validator = new AsyncValidator(this.rule)

                let isSuccess = true

                const findErrorByProp = (errors, prop) => {
                    return errors.find((error) => {
                        return error.field === prop
                    }) || ''
                }

                validator.validate(this.model, (errors, fields) => {
                    this.formItems.forEach((formItem) => {
                        const prop = formItem.prop
                        const error = findErrorByProp(errors || [], prop)
                        if (error) {
                            isSuccess = false
                        }

                        formItem.showError(error && error.message || '')
                    })
                })

                return Promise.resolve(isSuccess)
            }
        }
    }
</script>

<style scoped>

</style>

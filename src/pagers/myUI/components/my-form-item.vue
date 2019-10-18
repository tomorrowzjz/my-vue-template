<template>
    <div class="formItem">
        <span v-if="label" class="label">{{ label }}:</span>
        <slot/>
        <div v-show="errorMessage" class="error">
            {{ errorMessage }}
        </div>
    </div>
</template>

<script>
    import Schema from 'async-validator'
    export default {
        name: 'FormItem',
        components: {},
        props: {
            label: {
                type: String,
                default: ''
            },
            prop: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                errorMessage: ''
            }
        },

        computed: {},
        watch: {},
        created() {

        },
        inject: ['form'],

        mounted() {
            this.$on('doValidate', this.doValidate)
            if (this.prop) {
                this.$parent.$emit('formItemAdd', this)
            }
        },
        methods: {
            doValidate() {
                return new Promise((resolve) => {
                    const des = { [this.prop]: this.form.rules[this.prop] }
                    const validate = new Schema(des)
                    validate.validate({ [this.prop]: this.form.model[this.prop] }, (err) => {
                        if (!err) {
                            this.errorMessage = ''
                            resolve(true)
                        } else {
                            this.errorMessage = err[0].message
                            resolve(false)
                        }
                    })
                })
            }
        }
    }
</script>

<style scoped lang="scss">
  .formItem{
    display: flex;
    align-items: center;
    margin: 10px;
  }
  .label{
    width: 100px;
  }
  .error{
    color: #ff0000;
  }
</style>

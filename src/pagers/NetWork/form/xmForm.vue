<template>
    <div class="page">
        <xm-form ref="baseForm" :model="form" :rule="rule">
            <xm-form-item label="姓名" prop="name">
                <input v-model="form.name">
            </xm-form-item>
            <xm-form-item label="邮箱" prop="email">
                <input v-model="form.email">
            </xm-form-item>
            <xm-form-item>
                <button @click="submit">提交</button>
            </xm-form-item>
        </xm-form>
    </div>
</template>

<script>
    import xmForm from './formItem.vue'
    import xmFormItem from './xmFormItem.vue'

    export default {
        components: {
            xmForm,
            xmFormItem
        },
        data() {
            return {
                form: {
                    name: '',
                    email: ''
                },
                rule: {
                    name: [
                        { required: true, message: '用户名不能为空', trigger: 'blur' }
                    ],
                    email: [
                        { required: true, message: '邮箱不能为空', trigger: 'blur' },
                        { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submit() {
                // 调用form组件的validate方法
                this.$refs.baseForm.validate().then((res) => {
                    console.log(res)
                }).catch((e) => {
                    console.log(e)
                })
            }
        }
    }
</script>

<style scoped>

</style>

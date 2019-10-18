<template>
    <div>
        <!--<input type="text" v-focus>-->
        <!--<span v-demo:foo.a.b="message"> </span>-->
        <div v-zjz="flag">
            zjzjzjzj
        </div>
        <el-button @click.native="toggle">test</el-button>
    </div>
</template>

<script>
    export default {
        name: '',
        directives: {
            //      focus: {
            //        // 指令的定义
            //        inserted: function (el) {
            //          el.focus()
            //          console.log(el);
            //        }
            //      },
            demo: {
                bind: function(el, binding, vnode) {
                    console.log('bind')
                    console.log(el)
                    console.log(binding)
                    console.log(vnode)
                    const s = JSON.stringify
                    el.innerHTML =
                        'name: ' + s(binding.name) + '<br>' +
                        'value: ' + s(binding.value) + '<br>' +
                        'expression: ' + s(binding.expression) + '<br>' +
                        'argument: ' + s(binding.arg) + '<br>' +
                        'modifiers: ' + s(binding.modifiers) + '<br>' +
                        'vnode keys: ' + Object.keys(vnode).join(', ')
                }
            },

            zjz: {
                inserted: function(el) {
                    //          el.style.display = 'block';
                    //          if(binding.value){
                    //            el.style.display = 'none';
                    //          }else {
                    //            el.style.display = 'block';
                    //          }
                },
                bind: function(el, binding, vnode) {
                    console.log('bind')
                    console.log(el)
                    console.log(binding.value)
                    console.log(vnode)
                    //          if(binding.value){
                    //            el.style.display = 'block';
                    //          }else {
                    //            el.style.display = 'none';
                    //          }
                },
                update(el, binding) {
                    if (binding.value) {
                        el.style.display = 'none'
                    } else {
                        el.style.display = 'block'
                    }
                }
            }
        },
        data() {
            return {
                message: 'Welcome to Your Vue.js App',
                flag: false
            }
        },

        methods: {
            toggle() {
                this.flag = !this.flag
                console.log(this.flag)
            }
        }
    }
</script>

<style scoped>

</style>

<template>
    <div class="form">
        <slot></slot>
    </div>
</template>

<script>
  import AsyncValidator from 'async-validator';

  export default {
    name: "xm-form",
    props: {
      model: {
        type: Object
      },
      rule: {
        type: Object,
        default: ()=>{
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
          let children = this.$slots.default.filter(vnode => {
            return vnode.tag &&
              vnode.componentOptions && vnode.componentOptions.Ctor.options.name === 'form-item'
          }).map(({componentInstance}) => componentInstance)

          if (!(children.length === this.formItems.length && children.every((pane, index) => pane === this.formItems[index]))) {
            this.formItems = children
          }
        }
      },
      validate() {
        let validator = new AsyncValidator(this.rule);

        let isSuccess = true

        let findErrorByProp = (errors, prop) => {
          return errors.find((error) => {
              return error.field === prop
            }) || ""
        }

        validator.validate(this.model, (errors, fields) => {
          this.formItems.forEach(formItem => {
            let prop = formItem.prop
            let error = findErrorByProp(errors || [], prop)
            if (error) {
              isSuccess = false
            }

            formItem.showError(error && error.message || "")
          })
        });

        return Promise.resolve(isSuccess)
      }
    }
  }
</script>


<style scoped>

</style>

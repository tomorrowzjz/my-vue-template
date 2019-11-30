import Vue from 'vue'
/*  原文章  https://www.cnblogs.com/lianjy/p/10726662.html
// main.js

// 注册滚动条加载触发事件v-loadmore绑定
import directives from './directives'
Vue.use(directives)

*<el-select
  v-model="chatmode"
  placeholder="聊天模式"
  size="mini"
  v-loadmore="loadMore">
  <el-option
    v-for="item in chatmodes"
    :key="item.value"
    :label="item.qa_name"
    :value="item.qa_code"
    :disabled="item.disabled">
  </el-option>
</el-select>

<script>
export default {
  methods: {
    loadMore () {
      // 这里写入要触发的方法
    }
  }
}
</script>
*/
Vue.directive('loadmore', {
    bind(el, binding) {
        // 获取element-ui定义好的scroll盒子
        const SELECTWRAP_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
        SELECTWRAP_DOM.addEventListener('scroll', function() {
            const CONDITION = this.scrollHeight - this.scrollTop <= this.clientHeight
            if (CONDITION) {
                binding.value()
            }
        })
    }
})


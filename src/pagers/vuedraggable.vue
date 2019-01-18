<template>
<table class="table table-condensed">
    <thead>
    <tr>
        <th>视频ID</th>
        <th>名称</th>
        <th>作者</th>
        <th>创建时间</th>
        <th>时长</th>
        <th>操作</th>
    </tr>
    </thead>
    <dragtable element="tbody" class="list-group" v-model="tableData">
        <tr style="cursor:move;" v-for="(item,index) in 8" :key="'item'+index">
            <td>1</td>
            <td>2</td>
            <td>4</td>
            <td>5</td>
            <td>index</td>
            <td>删除</td>
        </tr>
    </dragtable>
</table>
</template>

<script>
  import dragtable from 'vuedraggable'
  export default {
    components: { dragtable },
    data() {
      return {
        tableData: {

        }
      }
    }
  }
</script>
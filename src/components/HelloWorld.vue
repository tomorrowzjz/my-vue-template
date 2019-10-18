<template>
    <div>
        <el-row :gutter="30">
            <el-col :span="6" class="panel-animation">
                <i class="el-icon-user"/>
                <p>访客</p>
            </el-col>
            <el-col :span="6" class="panel-animation">
                <i class="el-icon-bell"/>
                <p>代办</p>
            </el-col>
            <el-col :span="6" class="panel-animation">
                <i class="el-icon-date"/>
                <p>提醒</p>
            </el-col>
            <el-col :span="6" class="panel-animation">
                <i class="el-icon-chat-dot-round"/>
                <p>消息</p>
            </el-col>
        </el-row>
        <el-row :gutter="30">
            <draggable
                :list="list"
                v-bind="{animation:500}"
                ghost-class="ghost"
                handle=".handle">
                <el-col
                    v-for="element in list"
                    :span="12"
                    :key="element.name"
                    class="list-group-item">
                    <div class="content-display panel-animation">
                        <div class="header">
                            {{ element.name }}
                            <i class="el-icon-rank handle"/>
                        </div>
                    <img src="../assets/timg.jpg" width="auto"></div>
                </el-col>
            </draggable>
        </el-row>
        {{ mag }}
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        name: 'ChinaMap',
        components: {
            draggable
        },
        data() {
            return {
                list: [
                    { name: 'John', text: '', id: 0 },
                    { name: 'Joao', text: '', id: 1 },
                    { name: 'Jean', text: '', id: 2 },
                    { name: 'zjz', text: '', id: 3 }
                ],
                mag: [1, 2, 3]
            }
        },
        mounted() {
            console.log(this.mag, this.list)
        },
        methods: {

        }
    }
</script>

<style scoped>
  .panel-animation {
    animation-duration: .3s;
    animation-name: appexpand-2XUCF;
    text-align: center;
  }

  .panel-animation > i {
    font-size: 60px;
  }

  .content-display{
    text-align: center;
    overflow: hidden;
    padding: 10px;
  }

  .ghost {
    /*opacity: 0.5;*/
    /*background: #c8ebfb;*/
    /*border: 1px dashed #666;*/
  }

  .header{
    display: flex;
    /*justify-content: space-between;*/
    align-items: center;
    margin: 10px 0;
  }

  .el-icon-rank{
    font-size: 20px;
  }

  @keyframes appexpand-2XUCF {
    0% {
      transform: scaleX(0)
    }
    to {
      transform: scaleX(1)
    }
  }

</style>

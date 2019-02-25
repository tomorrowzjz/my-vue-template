<template>
    <div class="drag">
        <h2>List 1 Draggable</h2>
        <draggable element='ul' v-model="tasks" class="dragArea" :options="{group:'g2'}">
            <li v-for="item in tasks" :key='item.name'>
                <p>{{item.name}}</p>
                <draggable v-model="item.tasks" class="dragArea" :options="{group:'g2'}">
                    <div v-if="item.tasks.length">
                        <p v-for="el in item.tasks" :key='el.name'>{{el.name}}</p>
                    </div>
                </draggable>
            </li>
        </draggable>
    </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    components: { draggable },
    data() {
      return {
        "tasks": [{
          "name": "task 1",
          "tasks":  [{
            "name": "task 1-1",
          },{
            "name": "task 1-2"
          }]
        }, {
          "name": "task 2",
          "tasks": [{
            "name": "task 2-1",
          },{
            "name": "task 2-2"
          }]
        }]
      }
    }
  }
</script>

<style scope>
    .normal {
        background-color: grey;
    }

    .drag {
        background-color: green;
        padding-bottom: 10px;
    }

    .dragArea {
        min-height: 10px;
        padding-bottom: 10px;
    }
</style>
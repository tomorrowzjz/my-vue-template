<template>
    <draggable :list="childs"
               class="dragArea"
               :options="{draggable:'.item', group:'pages'}"
               :element="'ul'">
        <li v-for="item in childs" :key="item.id" class="item">
            <div>{{ item.title }}</div>

            <template v-if="item.children && item.children.length > 0">
                <menu-child :childs="item.children"></menu-child>
            </template>
        </li>
    </draggable>
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: 'menu-child',
    props: ['childs'],
    components: {draggable},
  }
</script>
<template>
    <draggable
        :list="childs"
        :options="{draggable:'.item', group:'pages'}"
        :element="'ul'"
        class="dragArea">
        <li v-for="item in childs" :key="item.id" class="item">
            <div>{{ item.title }}</div>

            <template v-if="item.children && item.children.length > 0">
                <menu-child :childs="item.children"/>
            </template>
        </li>
    </draggable>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: 'MenuChild',
        components: { draggable },
        props: {
            childs: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>

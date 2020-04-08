<template>
    <div>
        <ul>
            <li v-for="(value, index) in arr" :key="index">
                <test />
            </li>
        </ul>
        <button @click="handleDelete">deleteFirstNode</button>
    </div>
</template>
<script>
    export default{
        name: 'Vuediff',
        components: {
            test: {
                template: '<li>{{Math.random()}}</li>'
            }
        },
        data() {
            return {
                arr: [1, 2, 3]
            }
        },
        methods: {
            handleDelete() {
                this.arr.splice(0, 1)
            }
        }
    }
</script>

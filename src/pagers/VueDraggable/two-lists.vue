<template>
    <div class="fluid container">
        <div class="form-group form-group-lg panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Sortable control</h3>
            </div>
            <div class="panel-body">
                <div class="checkbox">
                    <label><input v-model="editable" type="checkbox">Enable drag and drop</label>
                </div>
                <button type="button" class="btn btn-default" @click="orderList">Sort by original order</button>
            </div>
        </div>

        <div class="col-md-3">
            <draggable v-model="list" :options="dragOptions" :move="onMove" class="list-group" element="ul" @start="isDragging=true" @end="isDragging=false">
                <transition-group :name="'flip-list'" type="transition">
                    <li v-for="element in list" :key="element.order" class="list-group-item">
                        <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" aria-hidden="true" @click=" element.fixed=! element.fixed"/>
                        {{ element.name }}
                        <span class="badge">{{ element.order }}</span>
                    </li>
                </transition-group>
            </draggable>
        </div>

        <div class="col-md-3">
            <draggable v-model="list2" :options="dragOptions" :move="onMove" element="span">
                <transition-group name="no" class="list-group" tag="ul">
                    <li v-for="element in list2" :key="element.order" class="list-group-item">
                        <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" aria-hidden="true" @click=" element.fixed=! element.fixed"/>
                        {{ element.name }}
                        <span class="badge">{{ element.order }}</span>
                    </li>
                </transition-group>
            </draggable>
        </div>

        <div class="list-group col-md-3">
            <pre>{{ listString }}</pre>
        </div>
        <div class="list-group col-md-3">
            <pre>{{ list2String }}</pre>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    const message = [
        'vue.draggable',
        'draggable',
        'component',
        'for',
        'vue.js 2.0',
        'based',
        'on',
        'Sortablejs'
    ]

    export default {
        name: 'Hello',
        components: {
            draggable
        },
        data() {
            return {
                list: message.map((name, index) => {
                    return { name, order: index + 1, fixed: false }
                }),
                list2: [],
                editable: true,
                isDragging: false,
                delayedDragging: false
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: 'description',
                    disabled: !this.editable,
                    ghostClass: 'ghost'
                }
            },
            listString() {
                return JSON.stringify(this.list, null, 2)
            },
            list2String() {
                return JSON.stringify(this.list2, null, 2)
            }
        },
        watch: {
            isDragging(newValue) {
                if (newValue) {
                    this.delayedDragging = true
                    return
                }
                this.$nextTick(() => {
                    this.delayedDragging = false
                })
            }
        },
        methods: {
            orderList() {
                this.list = this.list.sort((one, two) => {
                    return one.order - two.order
                })
            },
            onMove({ relatedContext, draggedContext }) {
                const relatedElement = relatedContext.element
                const draggedElement = draggedContext.element
                return (
                    (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
                )
            }
        }
    }
</script>

<style>
    .flip-list-move {
        transition: transform 0.5s;
    }

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: 0.5;
        background: #c8ebfb;
    }

    .list-group {
        min-height: 20px;
    }

    .list-group-item {
        cursor: move;
    }

    .list-group-item i {
        cursor: pointer;
    }
</style>

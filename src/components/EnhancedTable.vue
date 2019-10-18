<template>
    <el-table :data="tableData">
        <template v-for="colConfig in colConfigs">
            <slot v-if="colConfig.slot" :name="colConfig.slot"/>
            <component
                v-else-if="colConfig.component"
                :key="colConfig.id"
                :is="colConfig.component"
                :col-config="colConfig"/>
            <el-table-column v-else v-bind="colConfig" :key="colConfig.id" />
        </template>
    </el-table>
</template>

<script>
    export default {
        props: {
            colConfigs: {
                type: Array,
                default: () => {
                    return []
                }
            },
            tableData: {
                type: Array,
                default: () => {
                    return []
                }
            }
        }
    }
</script>

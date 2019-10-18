<template>
    <el-table :data="tableData">
        <template v-for="colConfig in colConfigs">
            <slot v-if="colConfig.slot" :name="colConfig.slot" />
            <el-table-column v-bind="colConfig" :key="colConfig.id" />
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
        },
        data() {
            return {
            }
        }
    }
</script>

<template>
    <hot-table :settings="settings"/>
</template>

<script>
    import { HotTable } from '@handsontable-pro/vue'

    export default {
        components: {
            HotTable
        },
        data: function() {
            return {
                settings: {
                    data: [
                        ['', 'Ford', 'Volvo', 'Toyota', 'Honda'],
                        ['2016', 10, 11, 12, 13],
                        ['2017', 20, 11, 14, 13],
                        ['2018', 30, 15, 12, 13]
                    ],
                    colHeaders: true,
                    rowHeaders: true
                }
            }
        }
    }
</script>
<style>
    @import "https://cdn.jsdelivr.net/npm/handsontable@6.2.2/dist/handsontable.full.min.css";
</style>

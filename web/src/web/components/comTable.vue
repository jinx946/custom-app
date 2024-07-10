<template>
    <div class="com-table">
        <el-table :data="tableData" style="width: 100%;height: 100%;" v-bind="$attrs">
            <el-table-column v-for="(item, index) in columnData" :key="index" :prop="item.prop" :label="item.label"
                :width="item.width">
                <template #default="scope">
                    <!-- 文字 tableData对应项应为string -->
                    <span class="item-content" v-if="!item.type" :title="scope.row[item.prop]">{{ scope.row[item.prop]
                        }}</span>
                    <!-- 自定义内容 -->
                    <span v-else-if="item.type === 'custom'">
                        <slot :name="item.prop" v-bind:row="scope.row" v-bind:index="scope.$index">
                        </slot>
                    </span>
                </template>
            </el-table-column>
        </el-table>
    </div>

</template>
<script setup>
import { ref, reactive, defineProps } from 'vue';
const props = defineProps({
    columnData: {
        type: Array,
        default: () => ([{ prop: 'index', label: '序号', width: 100 }])
    },
    tableData: {
        type: Array,
        default: () => ([])
    }
})
</script>
<style lang='scss' scoped>
.com-table {
    width: 100%;
    height: 100%;
}
</style>
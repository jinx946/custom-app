<template>
    <div class="field-content">
        <el-row>
            <el-col :span="11">
                <div class="">生成随机对象</div>
                <formInput ref="formInputRef" />
            </el-col>
            <el-col :span="11">
                <div class=""></div>
                <strToArr></strToArr>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="11">

            </el-col>
            <el-col :span="11">
            </el-col>
        </el-row>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import formInput from './components/formInput.vue';
import strToArr from './components/strToArr.vue'
import comTable from '@/web/components/comTable.vue';
const formInputRef = ref();

</script>
<style lang="scss" scoped>
.field-content {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
}
</style>
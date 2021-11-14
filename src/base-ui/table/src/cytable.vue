<template>
  <div>
    <el-table
      :data="data"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column v-if="showSelectColumn" type="selection" width="50" />
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        label="序号"
        width="50"
      />
      <template v-for="item in propList" :key="item.label">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
        >
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    data: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      default: false
    },
    showSelectColumn: {
      type: Boolean,
      default: false
    }
  },
  emits: ['selectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      emit('selectionChange', value)
    }
    return {
      handleSelectionChange
    }
  }
})
</script>

<style scoped></style>

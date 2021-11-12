<template>
  <div>
    <el-table :data="data" style="width: 100%">
      <template v-for="item in propList" :key="item.label">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :min-width="item.minWidth"
        />
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
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

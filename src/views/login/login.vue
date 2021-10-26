<template>
  <div>
    <el-button type="primary">Primary</el-button>
    <h2>{{ $store.state.name }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'
export default defineComponent({
  component() {
    ElButton
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>

<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleChangeFold">
      <i-expand v-if="isFold" />
      <i-fold v-else />
    </el-icon>
    面包屑
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleChangeFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      handleChangeFold
    }
  }
})
</script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  align-items: center;
  .fold-menu {
    font-size: 25px;
    cursor: pointer;
    margin-right: 5px;
  }
}
</style>

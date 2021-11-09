<template>
  <div class="nav-header">
    <div>
      <el-icon class="fold-menu" @click="handleChangeFold">
        <i-expand v-if="isFold" />
        <i-fold v-else />
      </el-icon>
    </div>
    <div class="nav-wrapper">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item
          ><a href="/">promotion management</a></el-breadcrumb-item
        >
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import userInfo from './user-info.vue'
export default defineComponent({
  emits: ['foldChange'],
  components: { userInfo },
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
  height: 100%;
  .fold-menu {
    font-size: 25px;
    cursor: pointer;
    margin-right: 5px;
  }
  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;
  }
}
</style>

<template>
  <div class="nav-header">
    <div>
      <el-icon class="fold-menu" @click="handleChangeFold">
        <i-expand v-if="isFold" />
        <i-fold v-else />
      </el-icon>
    </div>
    <div class="nav-wrapper">
      <breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import userInfo from './user-info.vue'
import breadcrumb from '@/base-ui/breadcrumb/index'
import { pathMapBreadcrumbs } from '@/utils/mapMenus'
import { useStore } from '@/store'
import { useRoute } from 'vue-router'
export default defineComponent({
  emits: ['foldChange'],
  components: { userInfo, breadcrumb },
  setup(props, { emit }) {
    const isFold = ref(false)
    // store
    const store = useStore()
    // router
    // data
    const breadcrumbs = computed(() => {
      const userMenus = store.state.login.menus
      const route = useRoute()
      const currentPath = route.path
      return pathMapBreadcrumbs(userMenus, currentPath)
    })
    // func
    const handleChangeFold = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return {
      isFold,
      breadcrumbs,
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

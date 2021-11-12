<template>
  <div class="user">
    <page-search :searchFormConfig="formCofig" />
    <div class="content">
      <cy-table :data="userList" :propList="propList" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useStore } from '@/store'
import { formCofig } from './config/searchConfig'
import PageSearch from '@/components/page-search'
import cyTable from '@/base-ui/table/index'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    cyTable
  },
  setup() {
    //  store
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.state.system.userList)
    const userCount = computed(() => store.state.system.userCount)
    // data
    const formData = ref({
      name: '',
      password: '',
      motion: '',
      time: ''
    })
    const propList = [
      { prop: 'name', label: '用户名', minWidth: '100' },
      { prop: 'realname', label: '真实姓名', minWidth: '100' },
      { prop: 'cellphone', label: '手机号码', minWidth: '100' },
      { prop: 'enable', label: '状态', minWidth: '100', slotName: 'status' }
    ]
    return {
      formCofig,
      formData,
      userList,
      userCount,
      propList
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>

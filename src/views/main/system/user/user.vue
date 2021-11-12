<template>
  <div class="user">
    <page-search :searchFormConfig="formCofig" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { formCofig } from './config/searchConfig'
import PageSearch from '@/components/page-search'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
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
    // data
    const formData = ref({
      name: '',
      password: '',
      motion: '',
      time: ''
    })
    return {
      formCofig,
      formData
    }
  }
})
</script>

<style scoped></style>

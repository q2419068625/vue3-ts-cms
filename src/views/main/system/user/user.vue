<template>
  <div class="user">
    <page-search :searchFormConfig="formCofig" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { formCofig } from './config/searchConfig'
import PageSearch from '@/components/page-search'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
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

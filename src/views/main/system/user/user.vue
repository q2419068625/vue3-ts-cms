<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @handleResetClick="handleResetClick"
      @handleSearchClick="handleSearchClick"
    />
    <page-content
      ref="pageContentRef"
      :contentTableConfig="contentTableConfig"
      pageName="users"
    ></page-content>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { searchFormConfig } from './config/searchConfig'
import { contentTableConfig } from './config/content.config'
import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const pageContentRef = ref<InstanceType<typeof PageContent>>()
    const handleResetClick = () => {
      pageContentRef.value?.getPageData()
    }
    console.log(pageContentRef)
    const handleSearchClick = (params: any) => {
      console.log(pageContentRef.value)
      pageContentRef.value?.getPageData(params)
    }
    return {
      searchFormConfig,
      contentTableConfig,
      handleResetClick,
      handleSearchClick,
      pageContentRef
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

import { ref } from 'vue'
import PageContent from '@/components/page-content'
export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()
  const handleResetClick = () => {
    pageContentRef.value?.getPageData()
  }
  const handleSearchClick = (params: any) => {
    console.log(pageContentRef.value)
    pageContentRef.value?.getPageData(params)
  }
  return [pageContentRef, handleResetClick, handleSearchClick]
}

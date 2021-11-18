import CYRequest from '../../index'
import { IDataType } from '@/service/types'
export function getPageListData(url: string, queryInfo: any) {
  return CYRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

// url: /users/id
export function deletePageData(url: string) {
  return CYRequest.delete<IDataType>({
    url: url
  })
}

export function createPageData(url: string, newData: any) {
  return CYRequest.post<IDataType>({
    url: url,
    data: newData
  })
}

export function editPageData(url: string, editData: any) {
  return CYRequest.patch<IDataType>({
    url: url,
    data: editData
  })
}

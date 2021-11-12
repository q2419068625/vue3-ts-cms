import CYRequest from '../../index'
import { IDataType } from '@/service/types'
export function getPageListData(url: string, queryInfo: any) {
  return CYRequest.post<IDataType>({
    url: url,
    data: queryInfo
  })
}

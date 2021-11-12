import CYRequest from '../index'
import { IAccount } from './types'
import { IDataType } from '@/service/types'
enum LoginApi {
  AccountLogin = '/login',
  userinfo = '/users/'
}
export const login = (account: IAccount) => {
  return CYRequest.post<IDataType>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export const getUserInfo = (id: string) => {
  return CYRequest.get<IDataType>({
    url: LoginApi.userinfo + id,
    showLoading: false
  })
}

export const getUserMenu = (id: string) => {
  return CYRequest.get<IDataType>({
    url: `/role/${id}/menu`,
    showLoading: false
  })
}

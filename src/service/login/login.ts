import CYRequest from '../index'
import { IAccount, IDataType } from './types'
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
    url: LoginApi.userinfo + id
  })
}

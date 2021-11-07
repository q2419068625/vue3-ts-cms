import CYRequest from '../index'
import { IAccount } from './types'
export const login = (account: IAccount) => {
  return CYRequest.post({
    url: '/login',
    data: account
  })
}

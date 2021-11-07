import { Module } from 'vuex'
import { ILoginAccount } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'
import { login } from '@/service/login/login'
const loginModule: Module<ILoginAccount, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  actions: {
    async accountLogin({ commit }, playout: IAccount) {
      const result = await login(playout)
      console.log(result)
    }
  }
}
export default loginModule

import { Module } from 'vuex'
import { ILoginAccount } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'
import { login, getUserInfo } from '@/service/login/login'
import localCache from '@/utils/cache'
const loginModule: Module<ILoginAccount, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    }
  },
  actions: {
    async accountLogin({ commit }, playout: IAccount) {
      const result = await login(playout)
      const { id, token } = result.data.data
      localCache.setCache('token', token)
      commit('changeToken', token)
      const userInfo = await getUserInfo(id)
      commit('changeUserInfo', userInfo.data.data)
      localCache.setCache('userInfo', userInfo.data.data)
    }
  }
}
export default loginModule

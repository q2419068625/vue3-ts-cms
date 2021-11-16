import { Module } from 'vuex'
import { ILoginAccount } from './types'
import { IRootState } from '../types'
import { IAccount } from '@/service/login/types'
import { login, getUserInfo, getUserMenu } from '@/service/login/login'
import localCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes, mapMenusToPermissions } from '@/utils/mapMenus'
const loginModule: Module<ILoginAccount, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      menus: [],
      permissions: []
    }
  },
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeMenus(state, menus: any) {
      state.menus = menus
      const routes = mapMenusToRoutes(menus)
      routes.forEach((route) => {
        router.addRoute('Main', route)
      })

      // 获取用户按钮的权限
      const permissions = mapMenusToPermissions(menus)
      state.permissions = permissions
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
      // 菜单
      const menus = await getUserMenu(userInfo.data.data.id)
      commit('changeMenus', menus.data.data)
      localCache.setCache('menus', menus.data.data)
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('menus')
      if (userMenus) {
        commit('changeMenus', userMenus)
      }
    }
  }
}
export default loginModule

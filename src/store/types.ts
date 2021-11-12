import { ILoginAccount } from './login/types'
import { ISystemState } from './main/system/types'
export interface IRootState {
  name: string
  password: string
}

export interface IRootWithModule {
  login: ILoginAccount
  system: ISystemState
}

export type IStoreType = IRootState & IRootWithModule

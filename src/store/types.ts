import { ILoginAccount } from './login/types'
export interface IRootState {
  name: string
  password: string
}

export interface IRootWithModule {
  login: ILoginAccount
}

export type IStoreType = IRootState & IRootWithModule

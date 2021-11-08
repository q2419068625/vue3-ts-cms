export interface IAccount {
  name: string
  password: string
}

export interface IDataType<T = any> {
  code: string
  data: T
}

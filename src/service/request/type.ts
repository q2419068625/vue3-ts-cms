import type { AxiosResponse, AxiosRequestConfig } from 'axios'
export interface CYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  rsponsetInterceptor?: (res: any) => any
  rsponsetInterceptorCatch?: (error: any) => any
}

export interface CYRequestConfig extends AxiosRequestConfig {
  interceptor?: CYRequestInterceptors
  showLoading?: boolean
}

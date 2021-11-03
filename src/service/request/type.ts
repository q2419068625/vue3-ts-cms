import type { AxiosResponse, AxiosRequestConfig } from 'axios'
export interface CYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  rsponsetInterceptor?: (res: T) => T
  rsponsetInterceptorCatch?: (error: any) => any
}

export interface CYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptor?: CYRequestInterceptors<T>
  showLoading?: boolean
}

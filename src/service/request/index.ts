import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { CYRequestInterceptors, CYRequestConfig } from './type'
import { ElLoading } from 'element-plus'
import type { ILoadingInstance } from 'element-plus/lib/components/loading/src/loading.type'
const defaultLoading = true
class CYRequest {
  instance: AxiosInstance
  interceptor?: CYRequestInterceptors
  loading?: ILoadingInstance
  showLoading?: boolean
  constructor(config: CYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptor = config.interceptor
    this.showLoading = config.showLoading ?? defaultLoading
    this.instance.interceptors.request.use(
      this.interceptor?.requestInterceptor,
      this.interceptor?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptor?.rsponsetInterceptor,
      this.interceptor?.rsponsetInterceptorCatch
    )
    this.instance.interceptors.request.use(
      (config) => {
        const token = '123'
        if (token) {
          config.headers!.Authorization = `Bearer ${token}`
        }
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中...',
            background: 'rgba(0, 0, 0, 0.7)'
          })
        }
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      (config) => {
        this.loading?.close()
        return config
      },
      (error) => {
        this.loading?.close()
        return error
      }
    )
  }

  request<T>(config: CYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptor?.requestInterceptor) {
        config = config.interceptor.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptor?.rsponsetInterceptor) {
            res = config.interceptor.rsponsetInterceptor(res)
          }
          this.showLoading = defaultLoading
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = defaultLoading
          reject(err)
        })
    })
  }
  get<T>(config: CYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: CYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: CYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T>(config: CYRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default CYRequest

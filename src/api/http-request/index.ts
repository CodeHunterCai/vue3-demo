import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError
} from 'axios'
import { ElMessage } from 'element-plus'
import axiosConfig from '../config'
import AxiosCanceler from '../helper/axios-cancel'
import { GlobalStore } from '@/stores'

const axiosCanceler = new AxiosCanceler()

class HttpRequest {
  service: AxiosInstance
  public constructor(axiosConfig: AxiosRequestConfig) {
    this.service = axios.create(axiosConfig)

    this.service.interceptors.request.use(
      (config) => {
        const globalStore = GlobalStore()
        axiosCanceler.addPending(config)
        config.headers.Language = globalStore.language
        return {
          ...config
        }
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        const { data, config } = response
        axiosCanceler.removePending(config)
        if (data instanceof Blob) {
          return data
        }

        // 权限过期
        if (data?.loginStatus === 0) {
          const globalStore = GlobalStore()
          globalStore.setSsoLoginUrl(data?.loginUrl)
          globalStore.deleteUser()
          globalStore.jumpToSsoLogin()
          return Promise.reject(data)
        }

        if (data?.code === 0) {
          return data?.data
        }

        ElMessage.error(data?.message)
        return Promise.reject(data)
      },
      async (error: AxiosError) => {
        const { response } = error
        if (error.name === 'CanceledError') {
          return Promise.reject(error)
        }
        // 请求超时
        if (error.message.indexOf('timeout') !== -1) {
          ElMessage.error('Request Timeout')
        } else if (response?.status === 403) {
          const globalStore = GlobalStore()
          globalStore.deleteUser()
          globalStore.jumpToSsoLogin()
        } else if (response?.status) {
          ElMessage.error(`${response?.status} Network Error`)
        } else if (error.name === 'CanceledError') {
          ElMessage.error('Canceled Error')
        } else {
          ElMessage.error(error.message)
        }
        return Promise.reject(error)
      }
    )
  }
  get(url: string, params = {}, requestConfig = {}): any {
    return this.service.get(url, { params, ...requestConfig })
  }
  post(url: string, data = {}, params = {}, requestConfig = {}): any {
    return this.service.post(url, data, {
      ...requestConfig,
      params: {
        ...params
      }
    })
  }
}

export default new HttpRequest(axiosConfig)

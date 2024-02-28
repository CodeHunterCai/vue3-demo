import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type AxiosError
} from 'axios'
import AxiosCanceler from './helper/AxiosCancel'
import { ElMessage } from 'element-plus'
import { ContentTypeEnum } from './enum/HttpEnum'
import axiosConfig from './config'
import { GlobalStore } from '@/stores'

const axiosCanceler = new AxiosCanceler()

class HttpRequest {
  service: AxiosInstance
  public constructor(axiosConfig: AxiosRequestConfig) {
    this.service = axios.create(axiosConfig)

    this.service.interceptors.request.use(
      (config) => {
        axiosCanceler.addPending(config)
        console.log(config)
        // TODO token 和 language
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
        if (data?.code === 403) {
          ElMessage.error(data.CommonOut.ErrMsg)
          // TODO 删除用户跳转登录
          const globalStore = GlobalStore()
          globalStore.deleteUser()
          return Promise.reject(data)
        } else if (data?.code) {
          ElMessage.error(data.msg)
          return Promise.reject(data)
        } else if (data.CommonOut.Code) {
          ElMessage.error(data.CommonOut.ErrMsg)
          return Promise.reject(data)
        }
        return data
      },
      async (error: AxiosError) => {
        const { response } = error
        // 请求超时
        if (error.message.indexOf('timeout') !== -1) {
          ElMessage.error('Request Timeout')
        } else if (response?.status === 403) {
          // TODO 删除用户跳转登录
          const globalStore = GlobalStore()
          globalStore.deleteUser()
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
  get(url: string, params: object, requestConfig = {}) {
    return this.service.get(url, { params, ...requestConfig })
  }
  post(url: string, params: object, requestConfig = {}) {
    return this.service.post(url, params, requestConfig)
  }
}

export { ContentTypeEnum }

export default new HttpRequest(axiosConfig)

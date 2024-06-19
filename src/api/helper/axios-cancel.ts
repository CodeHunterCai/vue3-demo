import axios, { type AxiosRequestConfig, type Canceler } from 'axios'
import { isFunction } from '@/utils/is'
import qs from 'qs'

let pendingMap = new Map<string, Canceler>()

function getPendingUrl(config: AxiosRequestConfig) {
  return [config.method, config.url, qs.stringify(config.data), qs.stringify(config.params)].join('&')
}

class AxiosCanceler {
  addPending(config: AxiosRequestConfig) {
    this.removePending(config)
    const url = getPendingUrl(config)
    config.cancelToken =
      config.cancelToken ||
      new axios.CancelToken((cancel) => {
        if (!pendingMap.has(url)) {
          pendingMap.set(url, cancel)
        }
      })
  }
  removePending(config: AxiosRequestConfig) {
    const url = getPendingUrl(config)

    if (pendingMap.has(url)) {
      const cancel = pendingMap.get(url)
      cancel && isFunction(cancel) && cancel()
      pendingMap.delete(url)
    }
  }
  removeAllPending() {
    pendingMap.forEach((cancel) => {
      cancel && isFunction(cancel) && cancel()
    })
    pendingMap.clear()
  }
  reset(): void {
    pendingMap = new Map<string, Canceler>()
  }
}

export { getPendingUrl }

export default AxiosCanceler

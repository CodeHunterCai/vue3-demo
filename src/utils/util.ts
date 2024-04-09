import { notUndDefOrNull, isArray, isObject } from './is'
import { languageList } from '@/i18n'

/**
 * @description:  数据不为空
 */
export function hasVal(val: any) {
  if (!notUndDefOrNull(val)) {
    return false
  }
  if (val === '') {
    return false
  }
  if (isArray(val) && val.length === 0) {
    return false
  }
  if (isObject(val) && Object.keys(val).length === 0) {
    return false
  }
  return true
}

/**
 * @description 获取localStorage
 * @param {String} key Storage名称
 * @return string
 */
export function localGet(key: string) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(window.localStorage.getItem(key) as string)
  } catch (error) {
    return value
  }
}

/**
 * @description 存储localStorage
 * @param {String} key Storage名称
 * @param {Any} value Storage值
 * @return void
 */
export function localSet(key: string, value: any) {
  if (!notUndDefOrNull(value)) {
    return
  }
  if (isArray(value) || isObject(value)) {
    window.localStorage.setItem(key, JSON.stringify(value))
    return
  }
  window.localStorage.setItem(key, value)
}

/**
 * @description 清除localStorage
 * @param {String} key Storage名称
 * @return void
 */
export function localRemove(key: string) {
  window.localStorage.removeItem(key)
}

/**
 * @description 清除所有localStorage
 * @return void
 */
export function localClear() {
  window.localStorage.clear()
}

/**
 * @description 获取浏览器默认语言
 * @return string
 */
export function getBrowserLang() {
  const browserLang = navigator.language ? navigator.language : navigator.browserLanguage
  let defaultBrowserLang = ''
  if (
    browserLang.toLowerCase() === 'cn' ||
    browserLang.toLowerCase() === 'zh' ||
    browserLang.toLowerCase() === 'zh-cn'
  ) {
    defaultBrowserLang = languageList[0].value
  } else {
    defaultBrowserLang = languageList[1].value
  }
  return defaultBrowserLang
}

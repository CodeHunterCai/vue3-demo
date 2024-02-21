const toString = Object.prototype.toString

/**
 * @description: 判断值是否为某个类型
 */
export function is(val: any, type: string) {
  return toString.call(val) === `[object ${type}]`
}

/**
 * @description: 是否已定义
 */
export function isDef(val: any) {
  return typeof val !== 'undefined'
}

/**
 * @description: 是否未定义
 */
export function isUnDef(val: any) {
  return !isDef(val)
}

/**
 * @description:  是否为数值
 */
export function isNumber(val: any) {
  return is(val, 'Number')
}

/**
 * @description:  是否为字符串
 */
export function isString(val: any) {
  return is(val, 'String')
}

/**
 * @description:  是否为boolean类型
 */
export function isBoolean(val: any) {
  return is(val, 'Boolean')
}

/**
 * @description:  是否为数组
 */
export function isArray(val: any) {
  return val && Array.isArray(val)
}

/**
 * @description:  是否为函数
 */
export function isFunction(val: any) {
  return is(val, 'Function')
}

/**
 * @description:  是否为AsyncFunction
 */
export function isAsyncFunction(val: any) {
  return is(val, 'AsyncFunction')
}

/**
 * @description:  是否为null
 */
export function isNull(val: unknown): val is null {
  return val === null
}

/**
 * @description: 是否为对象
 */
export function isObject(val: any) {
  return val !== null && is(val, 'Object')
}

/**
 * @description:  是否为时间
 */
export function isDate(val: any) {
  return is(val, 'Date')
}

/**
 * @description:  是否为promise
 */
export function isPromise(val: any) {
  return is(val, 'Promise') && isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * @description:  不是undefined或者null
 */
export function notUndDefOrNull(val: any) {
  if (isUnDef(val) || isNull(val)) {
    return false
  }
  return true
}

/**
 * @description:  数据不为空
 */
export function hasVal(val: any, checkComplexData: boolean = false) {
  if (!notUndDefOrNull(val)) {
    return false
  }
  if (!checkComplexData) {
    return true
  }
  if (isArray(val) && val.length === 0) {
    return false
  }
  if (isObject(val) && Object.keys(val).length === 0) {
    return false
  }
  return true
}

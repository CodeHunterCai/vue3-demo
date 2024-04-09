import { createPinia } from 'pinia'

const pinia = createPinia()

export * from './modules/GlobalStore'
export * from './modules/AuthStore'

export default pinia

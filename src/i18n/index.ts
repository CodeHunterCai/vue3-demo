import { createI18n } from 'vue-i18n'
import languageList from './config'
import pinia from '@/stores'
import { GlobalStore } from '@/stores'

const globalStore = GlobalStore(pinia)

const i18nTranslateData: { [prop: string]: any } = {}
languageList.forEach((language) => {
  const translateData = {}
  const fileList: { [prop: string]: any } = language.fileList
  Object.keys(fileList).forEach((fileName) => {
    const fileModule = fileList?.[fileName]?.default
    if (fileModule) {
      Object.assign(translateData, fileModule)
    }
  })
  i18nTranslateData[language.value] = translateData
})

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: globalStore.language || languageList[0].value,
  messages: i18nTranslateData
})

export { languageList }

export default i18n

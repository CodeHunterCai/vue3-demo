import { createI18n } from 'vue-i18n'
import languageList from './config'
import { getBrowserLang } from '@/utils/util'

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
  locale: getBrowserLang() === 'zh' ? languageList[0].value : languageList[1].value,
  messages: i18nTranslateData
})

export default i18n
export { languageList }

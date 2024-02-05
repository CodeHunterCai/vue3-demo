import { createI18n } from 'vue-i18n'

const languageList = [
  {
    value: 'zh-cn',
    label: '中文',
    fileList: import.meta.glob('@/i18n/zh-cn/*.ts', { eager: true })
  },
  {
    value: 'en-us',
    label: 'English',
    fileList: import.meta.glob('@/i18n/en-us/*.ts', { eager: true })
  }
]

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
  // TODO 语言默认值需要根据上次选择动态设置
  locale: languageList[0].value,
  messages: i18nTranslateData
})

export default i18n
export { languageList }

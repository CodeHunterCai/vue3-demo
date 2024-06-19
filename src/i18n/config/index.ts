export const languageList = [
  {
    value: 'zh-cn',
    label: '中文',
    fileList: import.meta.glob('@/i18n/language/zh-cn/*.ts', { eager: true })
  },
  {
    value: 'en-us',
    label: 'English',
    fileList: import.meta.glob('@/i18n/language/en-us/*.ts', { eager: true })
  }
]

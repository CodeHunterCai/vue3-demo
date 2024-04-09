import httpRequest from '@/api'

export function getMenuListApi() {
  return httpRequest.get('/menu')
}

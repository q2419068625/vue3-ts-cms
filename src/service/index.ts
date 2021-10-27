import CYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
export default new CYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

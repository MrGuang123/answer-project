import http from './request'

export default {
  getQuestion (params) {
    return http.post('', params)
  }
}

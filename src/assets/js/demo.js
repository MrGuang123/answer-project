import http from './request'

export default {
  login(params) {
    return http.post('path/to/login', params)
  }
}
// 使用的时候import引入，import demo from 'path/to/demo'
// demo.login(params).then(data =>{
//  逻辑处理
// })
// 需要将path/to/login和path/to/demo改为真实路径

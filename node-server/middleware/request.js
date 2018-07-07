import axios from 'axios'

let http = axios.create({
  // TODO:没有加baseURL
  baseURL: 'http://192.168.0.32:5000',
  headers: {
    'Content-Type': 'application/json'
  }
})

// TODO:目前直接返回数据，没有处理
function successHandle(response) {
  return response
}
// TODO:没有根据错误编码进行处理，直接返回错误数据
function errorHandle(err) {
  return Promise.reject(err)
}

function sendRequest(method, url, params) {
  let response = http({
    url: url,
    method: method,
    data: params
  })
  return response.then(successHandle).catch(errorHandle)
}

export default {
  get(url, params) {
    return sendRequest('get', url, params)
  },
  post(url, params) {
    return sendRequest('post', url, params)
  }
}

import http from '../middleware/request'

// 获取本人提交的题目列表
// function getPulltopic

export default {
  getPulltopic () {
    let params = {
      uid: 123,
      page: 1,
      count: 10,
      condition: [{ auditing: 0 }]
    }
    // params = JSON.stringify(params)
    return http
      .post('/exam/question/list', params)
      .then(rtn => {
        return rtn.data
      })
      .catch(err => {
        console.log(err)
      })
  }
}

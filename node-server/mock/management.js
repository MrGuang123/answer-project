import Mock from 'mockjs'
// console.log(Mock)
export default Mock.mock({
  'object|3': {
    status: 1,
    meg: 'success',
    'result|1-10': [
      {
        'name|+1': ['Hello', 'Mock.js', '!'],
        uid: 123,
        page: 1,
        pages: 3,
        'list|1-3': [
          {
            pub_uid: 123,
            uname: '用户1',
            date: '',
            qtype: 'judgment',
            audit_flag: 0,
            judgment: {
              qid: 123,
              title: 'PHP是世界上最好的语言',
              subject: '',
              answer: false,
              analysis: 'PH不是js才是'
            }
          }
        ]
      }
    ]
  }
})

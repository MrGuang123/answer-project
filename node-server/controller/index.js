import management from '../dao/management'
// import data from '../mock/management'
const Router = require('koa-router')
const router = new Router()

// console.log(management)
// koa将路由打到前端，history-callback
const routerInit = function (app) {
  router.get('/', async (ctx, next) => {
    // console.log('***********')
    // console.log(11111)
    // console.log('***********')
    // ctx.body = 11111
    ctx.body = await ctx.render('index')
  })

  router.get('/exam/question/list', async (ctx, next) => {
    ctx.body = await management.getPulltopic()
  })

  app.use(router.routes()).use(router.allowedMethods())
}
export default routerInit

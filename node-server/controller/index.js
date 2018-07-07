const Router = require('koa-router')
const router = new Router()
import management from '../dao/management'
import data from '../mock/management'
// console.log(management)
// koa将路由打到前端，history-callback
const routerInit = function(app) {
  router.get('/', async (ctx, next) => {
    ctx.body = await management.getPulltopic()
  })
  router.get('/exam/question/list', async (ctx, next) => {
    // ctx.body = await data
    ctx.body = await management.getPulltopic()
  })

  app.use(router.routes()).use(router.allowedMethods())
}
export default routerInit

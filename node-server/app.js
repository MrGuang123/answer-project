import routerInit from './controller'
import path from 'path'
const history = require('koa-connect-history-api-fallback')
const render = require('koa-swig')
const co = require('co')
const serve = require('koa-static')
// 后台服务接口地址： http://192.168.0.32:5000
const Koa = require('koa')

const app = new Koa()
// 引入静态资源
app.use(serve(path.join(__dirname, './static')))
console.log(__dirname)
app.context.render = co.wrap(render({
  root: path.join(__dirname),
  autoescape: true,
  ext: 'html',
  writeBody: false
}))

// 启动路由
routerInit(app)
app.use(history())
app.listen(3000, () => {
  console.log('ther server is running at port ' + 3000)
})

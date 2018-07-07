// 后台服务接口地址： http://192.168.0.32:5000
const Koa = require('koa')

const app = new Koa()

// 启动路由
import routerInit from './controller'
routerInit(app)

app.listen(3000)

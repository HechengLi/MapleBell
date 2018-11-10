'use strict'

const koa = require('koa')
const koaRouter = require('koa-router')

const app = module.exports = new koa()
const router = new koaRouter()

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World'
  })
  .get('/test', (ctx, next) => {
    ctx.body = 'test'
  })

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(8081, () => {console.log('listening on port 8081')})

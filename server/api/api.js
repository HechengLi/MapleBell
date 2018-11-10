const koaRouter = require('koa-router')

const router = new koaRouter()

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World'
  })
  .get('/test', (ctx, next) => {
    ctx.body = 'test'
  })

module.exports = router

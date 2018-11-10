'use strict'

const koa = require('koa')
const router = require('./api/api')
const initDB = require('./api/db')

const app = module.exports = new koa()

initDB()

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(8081, () => {console.log('listening on port 8081')})

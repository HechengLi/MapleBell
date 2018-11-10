'use strict'

const koa = require('koa')
const api = require('./api/api')
const Database = require('./api/db')

const app = new koa()

const db = new Database('localhost', 'root', '19930326')
db.init().then(() => {api.setDB(db)})

const router = api.router
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(8081, () => {console.log('listening on port 8081')})

module.exports = 1

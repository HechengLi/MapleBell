'use strict'

const koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors')

const api = require('./api/api')
const Database = require('./api/db')

const app = new koa()
app.use(cors())
app.use(bodyParser())

const db = new Database('localhost', 'root', '19930326')
db.init().then(() => {api.setDB(db)})

const router = api.router
app.use(router.routes())
  .use(router.allowedMethods())

app.listen(8081, () => {console.log('listening on port 8081')})

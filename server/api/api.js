const koaRouter = require('koa-router')

const router = new koaRouter()
let db = null;

function setDB(newDB) {
  db = newDB
}

router
  .post('/bosstime', async (ctx, next) => {
    await db.select('bosstime').then(data => {
      ctx.body = data
    })
  })

module.exports.router = router
module.exports.setDB = setDB

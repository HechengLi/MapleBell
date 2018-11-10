const koaRouter = require('koa-router')

const router = new koaRouter()
let db = null;

function setDB(newDB) {
  db = newDB
}

router
  .post('/getBossTime', async (ctx, next) => {
    await db.select('bosstime').then(data => {
      ctx.body = data
    })
  })
  .post('/addBossTime', async (ctx, next) => {
    const body = ctx.request.body
    if (!body.boss_name || !body.boss_level || !body.spawn_location || !body.spawn_time) {
      ctx.body = 'not enough info'
      return
    }
    await db.insert('bosstime', 'boss_name, boss_level, spawn_location, spawn_time',
                    `\'${body.boss_name}\', ${body.boss_level}, \'${body.spawn_location}\', ${body.spawn_time}`).then(data => {
      console.log(data)
      ctx.body = 'success'
    })
  })

module.exports.router = router
module.exports.setDB = setDB

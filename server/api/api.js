const koaRouter = require('koa-router')

const router = new koaRouter()
let db = null;

function setDB(newDB) {
  db = newDB
}

router
  .post('/getBossTime', async (ctx, next) => {
    ctx.body = await db.select('boss_schedule')
  })
  .post('/addBossTime', async (ctx, next) => {
    const body = ctx.request.body
    if (!body.boss_name || !body.boss_level || !body.spawn_location || !body.spawn_time) {
      ctx.body = 'not enough info'
      return
    }
    ctx.body = await db.insert('boss_schedule', 'boss_name, boss_level, spawn_location, spawn_time',
                    `\'${body.boss_name}\', ${body.boss_level}, \'${body.spawn_location}\', ${body.spawn_time}`)
  })

module.exports.router = router
module.exports.setDB = setDB

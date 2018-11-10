const mysql = require('mysql')

function Database(host, user, password) {
  this.host = host
  this.user = user
  this.password = password
  this.connection = null
}

Database.prototype.init = function() {
  const connection = mysql.createConnection({
    host: this.host,
    user: this.user,
    password: this.password
  })

  const _this = this
  const promise = new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) reject(err)
      connection.query('USE MapleBell')
      _this.connection = connection
      console.log('Database connected')
      resolve()
    })
  })

  return promise
}

Database.prototype.select = function(table, params='*') {
  const promise = new Promise((resolve, reject) => {
    this.connection.query(`SELECT ${params} FROM ${table}`, (err, result, fields) => {
      if (err) reject(err)
      resolve(result)
    })
  })
  return promise
}

module.exports = Database

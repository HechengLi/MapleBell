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
    database: 'MapleBell',
    user: this.user,
    password: this.password,
    connectionLimit: 10
  })
  this.connection = connection
  // const _this = this
  // const promise = new Promise((resolve, reject) => {
  //   connection.connect((err) => {
  //     if (err) reject(err)
  //     _this.connection = connection
  //     console.log('Database connected')
  //     resolve()
  //   })
  // })
  //
  // return promise
}

Database.prototype.select = function(table, params='*') {
  const promise = new Promise((resolve, reject) => {
    this.connection.query(`SELECT ${params} FROM ${table}`, (err, results, fields) => {
      if (err) reject(err)
      resolve(results)
    })
  })
  return promise
}

Database.prototype.insert = function(table, fields, values) {
  const promise = new Promise((resolve, reject) => {
    console.log(`INSERT INTO ${table}(${fields}) VALUES(${values})`)
    this.connection.query(`INSERT INTO ${table}(${fields}) VALUES(${values})`, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  })
  return promise
}

module.exports = Database

const mysql = require('mysql')
const util = require('util')

function Database(host, user, password) {
  this.host = host
  this.user = user
  this.password = password
  this.connection = null
}

Database.prototype.init = function() {
  const connection = mysql.createPool({
    host: this.host,
    database: 'MapleBell',
    user: this.user,
    password: this.password,
    connectionLimit: 10
  })
  this.connection = connection

  connection.getConnection((err, connection) => {
    if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        console.error('Database connection was closed.')
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
        console.error('Database has too many connections.')
      }
      if (err.code === 'ECONNREFUSED') {
        console.error('Database connection was refused.')
      }
    }
    if (connection) connection.release()
    return
  })

  connection.query = util.promisify(connection.query)
}

Database.prototype.select = async function(table, params='*') {
  let result
  try {
    result = await this.connection.query(`SELECT ${params} FROM ${table}`)
  } catch(err) {
    throw new Error(err)
  }
  return result
}

Database.prototype.insert = function(table, fields, values) {
  let result
  try {
    result = this.connection.query(`INSERT INTO ${table}(${fields}) VALUES(${values})`)
  } catch(err) {
    throw new Error(err)
  }
  return result
}

module.exports = Database

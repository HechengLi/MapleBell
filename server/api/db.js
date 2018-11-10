const mysql = require('mysql')

function initDB() {
  const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '19930326'
  })

  con.connect((err) => {
    if (err) throw err
    console.log('Database connected')
  })

  return con
}

module.exports = initDB

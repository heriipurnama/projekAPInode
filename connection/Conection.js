const mysql = require('mysql')

const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Root123!',
  database: 'ok'
})

con.connect(function (err) { if (err) throw err })
module.exports = con

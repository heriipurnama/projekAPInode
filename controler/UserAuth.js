'use strict'
const connection = require('../connection/Conection')
const response = require('../utils/Response')

exports.index = function (req, res) {
  response.ok('hello from node JS restFull API', res)
}

exports.users = function (req, res) {
  const sql = 'SELECT * FROM student_test'

  connection.query(sql, function (_error, rows, field) {
    if (_error) {
      console.log(_error)
    } else {
      response.ok(rows, res)
    }
  })
}

exports.findUser = function (req, res) {
  const name = req.params.name
  const sql = 'SELECT * FROM student_test WHERE name= ?'

  connection.query(sql,
    [name],
    function (_error, rows, field) {
      if (_error) {
        console.log(_error)
      } else {
        response.ok(rows, res)
      }
    })
}

exports.insertUser = function (req, res) {
  const name = req.body.data.name
  const test = req.body.data.test
  const score = req.body.data.score
  const sql = `INSERT INTO student_test (name, test, score ) 
               VALUES ('${name}','${test}',${score})`

  connection.query(sql,
    function (error, rows, fields) {
      if (error) {
        console.log(error)
      } else {
        response.ok(req.body.data, res)
      }
    })
}

exports.updateUser = function (req, res) {
  const name = req.params.name
  const test = req.body.data.test
  const score = req.body.data.score
  const sql = `UPDATE student_test SET test = '${test}', score = ${score} 
               WHERE name = '${name}' `

  connection.query(sql,
    function (error, rows, fields) {
      if (error) {
        console.log(error)
      } else {
        response.ok(req.body.data, res)
      }
    })
}

exports.deleteUser = function (req, res) {
  const name = req.body.data.name
  const sql = `DELETE FROM student_test WHERE name='${name}'`

  connection.query(sql,
    function (error, rows, field) {
      if (error) {
        console.log(error)
      } else {
        response.ok(req.body.data, res)
      }
    })
}

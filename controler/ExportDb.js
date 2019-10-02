'use strict'

const response = require('../utils/Response')
const { exec } = require('child_process')

// Database connection settings.
const exportFrom = {
  host: '127.0.0.1',
  user: 'root',
  password: 'Root123!',
  database: 'ok'
}
// the file be located
const dumpFile = 'ok.sql'

exports.exportDb = async function (req, res) {
  exec(`mysqldump -u${exportFrom.user} -p${exportFrom.password} -h${exportFrom.host} --compact ${exportFrom.database} > ${dumpFile}`,
    (_error, stdout, stderr) => {
      if (_error) {
        console.log(_error)
      } else {
        response.ok('Succes Import!', res)
      }
    })
}

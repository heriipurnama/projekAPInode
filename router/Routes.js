'use strict'

module.exports = async function (app) {
  const userAuth = require('../controler/UserAuth')
  const exportDb = require('../controler/ExportDb')

  // userAuth
  app.route('/').get(userAuth.index)
  app.route('/users').get(userAuth.users)
  app.route('/user/:name').get(userAuth.findUser)
  app.route('/user/insertUser').post(userAuth.insertUser)
  app.route('/user/updateUser/:name').put(userAuth.updateUser)
  app.route('/user/deleteUser').delete(userAuth.deleteUser)

  // Export Db
  app.route('/exportDb').get(exportDb.exportDb)
}

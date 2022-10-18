const userModel = require('../models/user.js')

const getUser = (req) => {
    const sql = `select * from menus`
    return userModel.getUser(sql)
}

module.exports = {
    getUser
}
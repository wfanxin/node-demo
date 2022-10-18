const { execSQL } = require('../db/mysql.js')

const getUser = (sql) => {
    return execSQL(sql)
}

module.exports = {
    getUser
}
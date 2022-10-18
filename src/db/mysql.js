const mysql = require('mysql') // 引入mysql模块
const db_config = require('../config/database.js')

// 创建连接对象
const connection = mysql.createConnection(db_config.mysql)

// 开始连接
connection.connect()

const execSQL = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    execSQL
}
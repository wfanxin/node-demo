const { success, error } = require('../utils/response.js') // 引入response处理功能模块
const { execSQL } = require('../db/mysql.js')
const user = require('../controllers/user.js')

// 创建web路由函数
const web = (req, res) => {
    // 请求类型
    const method = req.method
    const path = req.path

    if (method === 'GET') {
        switch (path) {
            case '/api/user':
                return success('user接口')
            case '/api/list':
                return success('list接口')
            case '/api/menus':
                return user.getUser(req).then((result) => {
                    return success(result)
                })
                
        }
    } else if (method === 'POST') {
        return success('POST请求')
    }
}

module.exports = web
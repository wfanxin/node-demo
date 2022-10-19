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
            case '/api/cookie':
                // res.setHeader('Set-Cookie', 'name=xeg') // 不支持中文，设置单个
                res.setHeader('set-Cookie', ['name=xeg; path=/', 'age=18', 'height=175']) // 多个设置单个
                return success('cookie设置成功')
                
        }
    } else if (method === 'POST') {
        return success('POST请求')
    }
}

module.exports = web
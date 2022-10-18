const qs = require('querystringify') // 引入url解析模块
const web = require('./routes/web.js') // 引入web路由函数
const { getPostData } = require('./utils/request.js') // 引入request处理功能模块

const app = (req, res) => {
    // 设置相应格式
    res.setHeader('Content-Type', 'application/json')

    const url = req.url
    req.path = url.split('?')[0] // 获取path
    req.query = qs.parse(url.split('?')[1]) // 获取query
    
    // 获取post数据
    getPostData(req).then((postData) => {
        req.body = postData

        const webData = web(req, res) // 执行路由函数
        console.log('webData', webData)
        if (webData) {
            res.end(JSON.stringify(webData))
        } else {
            // 路由未匹配到
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.write('404 Not Found')
            res.end()
        }
    })
}

module.exports = app
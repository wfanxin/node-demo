const http = require('http') // 引入http模块
const app = require('./app.js') // 引入createServer回调函数
const { port } = require('./config/index.js') // 获取配置信息

const server = http.createServer(app) // 创建http服务对象

// 监听端口
server.listen(port, () => {
    console.log(`server runnig at port ${port}...`)
})
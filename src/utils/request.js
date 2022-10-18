const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        if (req.method !== 'POST') { // 不是POST请求
            resolve({})
            return
        }

        if (req.headers['content-type'] !== 'application/json') { // 不是application/json
            resolve({})
            return
        }

        let postData = '' // 存储数据流

        // 数据流获取中
        req.on('data', (chunk) => {
            postData += chunk.toString()
        })

        // 数据流获取结束
        req.on('end', () => {
            if (postData) { // 有数据
                resolve(JSON.parse(postData))
            } else { // 没有数据
                resolve({})
            }
        })

    })
}

module.exports = {
    getPostData
}
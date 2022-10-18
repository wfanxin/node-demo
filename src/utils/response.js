// 成功
const success = (data, message) => {
    if (typeof data === 'string') {
        message = data
        data = null
    }

    return {
        code: 0,
        data,
        message
    }
}

// 失败
const error = (data, message) => {
    if (typeof data === 'string') {
        message = data
        data = null
    }

    return {
        code: 1,
        data,
        message
    }
}

module.exports = {
    success,
    error
}
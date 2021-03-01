const axios = require("axios");

class Ajax {
    static echo(data) {
        return new Promise((res, rej) => {
            setTimeout(() => {
                if (data) {
                    res(data)
                } else {
                    rej(new Error('error'))
                }
            }, 150)
        })
    }

    static async get(backendUrl, fn) {
        try {
            const response = await axios.get(backendUrl)
            return response.data
        } catch (e) {
            return fn(e)
        }
    }
}

module.exports = Ajax
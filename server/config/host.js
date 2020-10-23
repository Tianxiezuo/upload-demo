const appEnv = require('../helper/appEnv')

const port = appEnv.get({
    dev: 3000,
    production: 7009,
})

const server = appEnv.get({
    dev: 'http://127.0.0.1:3000',
    production: 'http://222.29.227.28:7009',
})

module.exports = {
    port,
    server
}

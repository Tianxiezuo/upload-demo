import fe from '@4a/env/fe'
import AppEnv from '@4a/env'

// 根据hostname发现env
fe.setHostname({
    dev: ['localhost', '127.0.0.1', '0.0.0.0'],
    production: '222.29.227.28',
})

export default new AppEnv(fe.env)

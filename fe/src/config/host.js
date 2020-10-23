import appEnv from '@/base/appEnv'

export const server = appEnv.get({
    dev: 'http://127.0.0.1:3000',
    production: 'http://222.29.227.28:7009',
})

export const uploadURI = server + '/upload'

export default {
    server,
    uploadURI,
}

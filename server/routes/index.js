const path = require('path')
const router = require('koa-router')()
const multer = require('@koa/multer')
const upload = multer({ dest: 'public/uploads/' })
const { server } = require('../config/host')
const ocr = require('../helper/ocr')
const appEnv = require('../helper/appEnv')

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.post('/upload', upload.single('file'), async (ctx, next) => {
    const file = ctx.file

    console.log(ctx.file)

    const filepath = path.join(__dirname, '..', file.path)
    console.log('filepath:', filepath)

    await ocr(filepath, file.mimetype.slice(6)).catch(err => {
        console.log('ocr error:', err.message)
    })

    ctx.type = file.mimetype
    ctx.body = appEnv.get({
        dev: [server, 'uploads', file.filename].join('/'),
        production: [server, 'builds', file.filename, '.' + file.mimetype.slice(6)].join('/'),
    })
})

module.exports = router

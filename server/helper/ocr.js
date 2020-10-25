const path = require('path')
const exec = require('child_process').execSync
// const ocrsh = path.join(__dirname, '../bin/ocr.sh')
const ocrsh = '/home/lixuxiang/project/ctOCR.sh'


module.exports = async (filepath, filetype) => {
    const ret = exec(`bash ${ocrsh} ${filepath} ${filetype}`)
    console.log('exec ocr.sh:', ret.toString())
}

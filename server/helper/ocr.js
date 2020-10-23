const path = require('path')
const exec = require('child_process').execSync
const ocrsh = path.join(__dirname, '../bin/ocr.sh')

module.exports = async (filepath, filetype) => {
    const ret = exec(`sh ${ocrsh} ${filepath} ${filetype}`)
    console.log('exec ocr.sh:', ret.toString())
}

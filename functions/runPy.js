const { execSync } = require('child_process')
const path = require('path')
const runpy = async (codePath,inputPath) => {
    var runfile = path.resolve(codePath)
    const op = runfile.replaceAll(/\\/g, "/")
    const filename = path.basename(codePath)
    const command = `cd ${path.dirname(op)} && python ${filename.split('.')[0]}.py } < ${path.basename(inputPath)}`
    var arr = []
    try {
        const out=execSync(`${command}`)
        arr.push(out.toString());
        arr.push('')
    }catch(e){
        arr.push('')
        arr.push(e.stderr.toString());
    }
    return arr
}
module.exports = { runpy };
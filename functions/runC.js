const { execSync } = require('child_process')
const path = require('path')
const runc = async (codePath,inputPath) => {
    var runfile = path.resolve(codePath)
    const op = runfile.replaceAll(/\\/g, "/")
    const filename = path.basename(codePath)
    const command = `cd ${path.dirname(op)} && g++ ${filename.split('.')[0]}.c && a.exe < ${path.basename(inputPath)}`
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
module.exports = { runc };
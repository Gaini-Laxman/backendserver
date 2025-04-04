const fs = require('fs')
const path = require('path')
const deleteFile = (filePath) => {
        const fn = `./codes/${path.basename(filePath)}`.split('.')[1].split('/')[2]
        const ext = `./codes/${path.basename(filePath)}`.split('.')[2]
        fs.unlinkSync(`./codes/${path.basename(filePath)}`)
        if (ext === 'java') {
                try {
                        fs.unlinkSync(`./codes/${fn}.class`)
                }
                catch (e) {
                        // console.log(e);
                }
        }
        if (ext === 'c' || ext === 'cpp') {
                try {
                        fs.unlinkSync(`./codes/a.exe`)
                }
                catch (e) {
                        // console.log(e)
                }
        }
        if(ext=='txt'){
                try {
                        fs.unlinkSync(`./codes/${fn}.txt`)
                }
                catch (e) {
                        // console.log(e)
                }
        }
}
module.exports = { deleteFile }
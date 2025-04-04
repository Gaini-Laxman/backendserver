const fs = require('fs')
var randomWords = require('random-words');


const createFile = async (content, ext) => {
    filename = randomWords(1)[0] + `${new Date().getHours()}${new Date().getSeconds()}${new Date().getMilliseconds()}`
    if (ext == 'java') {
        newjavaClass = content.replace('Main',filename,'utf8')
        fs.writeFileSync(`./codes/${filename}.${ext}`, newjavaClass)
    }
    else if (ext == 'c' || ext == 'cpp') {
        newjavaClass = content.replace('int main(){ ',`\nint main(){ `,'utf8')
        fs.writeFileSync(`./codes/${filename}.${ext}`, newjavaClass)
    }
    else {
        fs.writeFileSync(`./codes/${filename}.${ext}`, content,'utf8')
    }
    return `./codes/${filename}.${ext}`
}
module.exports = { createFile };
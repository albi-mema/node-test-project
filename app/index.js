const concat = require('./concat')
const calc   = require('./calc')
const fs     = require('fs')


const filename = './app/numbers.json'

var content = JSON.parse(fs.readFileSync(filename,'utf8')).numbers

console.log(content)




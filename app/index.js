const concat = require('./concat')
const calc   = require('./calc')
const fs     = require('fs')


const filename = './app/numbers.json'

var content = JSON.parse(fs.readFileSync(filename,'utf8')).numbers

let concated   = concat.concat(content,[16,17,18])
let calculated = calc.sum(content)


console.log(`The rezulting list is ${concated}`)
console.log(`The sum is ${calculated}`)


const concat = require('./concat')
const calc   = require('./calc')
const fs     = require('fs')
const prime  = require('./primes')

const filename = './app/numbers.json'

var content = JSON.parse(fs.readFileSync(filename,'utf8')).numbers

let concated      = concat.concat(content,[16,17,18,19])
let calculated    = calc.sum(content)

let limit = 100
let prime_numbers = prime.primes_up_to(limit)


console.log(`The rezulting list is ${concated}`)
console.log(`The sum is ${calculated}`)
console.log(`The prime numbers up to ${limit} are ${prime_numbers}`)


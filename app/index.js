const concat = require('./concat')
const calc   = require('./calc')
const fs     = require('fs')
const prime  = require('./primes')
const _      = require('lodash')
let filename = './app/numbers.json'

let content = JSON.parse(fs.readFileSync(filename,'utf8')).numbers

let concated      = concat.concat(content,[16,17,18,19])
let calculated    = calc.sum(content)

let limit = 100
let primNumbers = prime.primes_up_to(limit)

let sumOfPrimes = _.reduce(primNumbers,(x,y) => x + y)

console.log(`The rezulting list is ${concated}.`)
console.log(`The sum is ${calculated}.`)
console.log(`The prime numbers up to ${limit} are ${primNumbers}.`)
console.log(`The sum of the first ${limit} prime numbers is ${sumOfPrimes}.`)


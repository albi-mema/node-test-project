const _ = require('lodash')



function range(start,end){
    let numbers = [];
    for(let i = start;i < end;i++){
        numbers.push(i)
    }
    return numbers
}


prime = (number) => _.filter(range(2,number),(x) => number % x == 0).length == 0

primes_up_to = (limit) => _.filter(range(2,limit),(x) => prime(x))

module.exports.primes_up_to = primes_up_to
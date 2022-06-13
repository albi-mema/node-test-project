const _ = require("lodash");

let prime = (number) =>_.filter(_.range(2, number), (x) => number % x == 0).length == 0;

let primes_up_to = (limit) => _.filter(_.range(2, limit), (x) => prime(x));

module.exports.primes_up_to = primes_up_to;

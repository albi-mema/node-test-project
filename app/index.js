const concat = require("./concat");
const calc = require("./calc");
const fs = require("fs");
const prime = require("./primes");
const _ = require("lodash");
const palindrome = require("./palindrome");

const filename = "./app/numbers.json";

numbers = [15,16,17];

const readFileAndAddRezult = async () => {
    try {
        let data = await fs.promises.readFile(filename,'utf-8');
        let result = JSON.parse(data).numbers
        const concated = concat.concat(result, numbers);
        console.log(`The rezulting list is ${concated}.`);
    } catch (error) {
        console.log("Could not read file.")
    }
}



const word1 = "hello";
const word2 = "1001";

function displayIsPalindrome(word) {
    if (palindrome.palindrome(word)) {
        return `The word ${word} is a palindrome`;
    } else {
        return `The word ${word} is not a palindrome`;
    }
}

const limit = 100;
const primNumbers = prime.primes_up_to(limit);
const sumOfPrimes = _.reduce(primNumbers, (x, y) => x + y);

const calculated = calc.sum(numbers);

readFileAndAddRezult()
console.log(`The sum is ${calculated}.`);
console.log(`The prime numbers up to ${limit} are ${primNumbers}.`);
console.log(`The sum of the first ${limit} prime numbers is ${sumOfPrimes}.`);
console.log(displayIsPalindrome(word1));
console.log(displayIsPalindrome(word2));

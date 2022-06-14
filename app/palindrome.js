const _ = require("lodash");


const palindrome = (word) => word ==  
        _.chain(word)
        .split("")
        .reverse()
        .join("")
        .value()




module.exports.palindrome = palindrome


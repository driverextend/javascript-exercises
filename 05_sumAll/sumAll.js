const sumAll = function(start, end) {
    if (!(Number.isInteger(start))) return 'ERROR'
    if (!(Number.isInteger(end))) return 'ERROR'
    if (start < 0 || end < 0) return 'ERROR'

    let sumArr = new Array(Math.max(start, end))

    let sum = 0

    for (let index = 1; index <= sumArr.length; index++)
        sum += index

    return sum;
};

console.log(sumAll(1, 4)) // returns the sum of 1 + 2 + 3 + 4 which is 10

// Do not edit below this line
module.exports = sumAll;

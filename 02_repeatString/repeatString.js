const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';

    let repeatedString = "";

    for(let i = 1; i <= num; i++){
        repeatedString += string;
    }

    return repeatedString;
};

// repeatString('hey', 3) // returns 'heyheyhey'

// Do not edit below this line
module.exports = repeatString;

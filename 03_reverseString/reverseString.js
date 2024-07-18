const reverseString = function(word) {
    wordExpanded = []

    for (let index = word.length - 1; index >= 0; index--) {
        wordExpanded.push(word[index])
    }

    return wordExpanded.join('')
};

// Do not edit below this line
module.exports = reverseString;

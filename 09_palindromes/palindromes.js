const palindromes = function (word) {
    let letters = word.toLowerCase().split("").filter(letter => letter !== "," && letter !== " " && letter !== "." && letter !== "!" )
    // console.log(letters);
    
    for (let i = 0; i < letters.length / 2; i++) {        
        if (letters[i] !== letters[letters.length - 1 - i]){
            return false
        }
    }
        
    return true
};


// console.log(palindromes("racecar")); // true
// console.log(palindromes("hello")); // false
// console.log(palindromes("A car, a man, a maraca.")); // false

// Do not edit below this line
module.exports = palindromes;

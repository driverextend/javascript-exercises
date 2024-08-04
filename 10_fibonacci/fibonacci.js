const fibonacci = function(n) {
    if (n < 0) return "OOPS"
    if (n <= 0) return 0
    if (n == 2 || n == 1) return 1
    
    return fibonacci(n - 1) + fibonacci(n - 2)


};

// console.log(fibonacci(5)); // 5
// console.log(fibonacci(10)); // 55



// Do not edit below this line
module.exports = fibonacci;

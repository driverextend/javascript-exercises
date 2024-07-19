const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0)
            return (year % 400 == 0);
        else return true
    } else return false

    return (year % 4 == 0 && year % 400 == 0)
};

console.log(leapYears(2000));
console.log(leapYears(1985));


// Do not edit below this line
module.exports = leapYears;

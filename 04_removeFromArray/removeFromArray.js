const removeFromArray = function(arr, ...elements) {

    for (const ele of elements) {
        while (arr.indexOf(ele) != -1) {
            arr.splice(arr.indexOf(ele), 1)
        }
    }

    return arr
};

console.log(removeFromArray([1, 2, 3, 4], 1, 2)); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;

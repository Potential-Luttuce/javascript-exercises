const removeFromArray = function(array, ...args) { //...rest operator
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) { //grab any item in array that is NOT in the ...args
            newArray.push(item);
        }
    })

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

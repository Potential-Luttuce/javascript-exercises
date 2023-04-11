const removeFromArray = function(array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.puch(item);
        }
    })

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

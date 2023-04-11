const reverseString = function(word) {
    let string = "";
    let wordLength = word.length + 1;
    for (let i = 1; i < wordLength; i++) {
        string += word.at(-i);
    }   
    return string;
};

// Do not edit below this line
module.exports = reverseString;

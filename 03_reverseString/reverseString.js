const reverseString = function(string) {
    const array = string.split('');
    const reversedArray = array.reverse();
    return reversedArray.join('');
};

// Do not edit below this line
module.exports = reverseString;

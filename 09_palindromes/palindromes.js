const palindromes = function (str) {
    //split string into array
    const arr = str.split(" ").join("").split("");    
    //filter non alphanumerical
    function isAlphanumeric(str) {
        return /^[a-zA-Z0-9]+$/.test(str);
      }
    let filtered = arr.filter((item) => isAlphanumeric(item)) 
    //join back into string 
    filtered = filtered.join("");
    //convert to either upper or lowercase
    filtered = filtered.toUpperCase();
    //split in middle
    let secondHalf;
    let firstHalf;
    if(filtered.length % 2 == 0){
         secondHalf = filtered.slice(filtered.length / 2);
         firstHalf = filtered.slice(0, filtered.length / 2);
    }
    else{
         secondHalf = filtered.slice(filtered.length / 2);
         firstHalf = filtered.slice(0, filtered.length / 2 + 1);
    }
    //reverse second string
    function reverse(str)
    {
        return str.split("").reverse().join("");
    }
    secondHalf = reverse(secondHalf);
    //compare if both halves are the same
    return secondHalf === firstHalf ? true:false;
};

// Do not edit below this line
module.exports = palindromes;

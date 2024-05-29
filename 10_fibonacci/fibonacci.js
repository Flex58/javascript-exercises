const fibonacci = function(n) {
    let fibonacci = [1,1];
    let reduced;
    if (n == 0){
        return 0;
    }
    else if (n < 0){
        return "OOPS"
    }
    else if (n == 1 || n == 2){
        return 1;
    }
    for (let i = 0; i < n -2; i++){
        reduced = fibonacci.reduce((sum, current) => sum + current, 0)
        fibonacci.shift()
        fibonacci.push(reduced)
    }
    return reduced;
};

// Do not edit below this line
module.exports = fibonacci;

const repeatString = function(string, num) {
let j = '';
if (num < 0){
    return 'ERROR';
}
for (let i = 0; i < num; i++){
    j += string;
}
return j;
};

// Do not edit below this line
module.exports = repeatString;

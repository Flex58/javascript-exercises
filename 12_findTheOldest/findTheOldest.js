const findTheOldest = function(arr) {
    const date = new Date().getFullYear();
    const sorted = arr.sort((a,b) => {
        if (a.yearOfDeath == undefined){
            return date - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1:-1
        }
        else if (b.yearOfDeath == undefined){
            return a.yearOfDeath - a.yearOfBirth < date - b.yearOfBirth ? 1:-1
        }
        return a.yearOfDeath - a.yearOfBirth < b.yearOfDeath - b.yearOfBirth ? 1:-1
    })
    return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;

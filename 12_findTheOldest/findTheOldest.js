const findTheOldest = function(people) {

    const sorted = people
                    .sort((prev, next) => (next.yearOfDeath - next.yearOfBirth) - (prev.yearOfDeath - prev.yearOfBirth));
    
    return sorted[0];

};

// Do not edit below this line
module.exports = findTheOldest;

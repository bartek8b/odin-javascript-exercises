const findTheOldest = function(people) {

    let age = function(person){
        if (person.yearOfDeath === undefined){
            return new Date().getFullYear() - person.yearOfBirth;
        }
        else{
            return person.yearOfDeath - person.yearOfBirth;
        }
    }

    const sorted = people
                    .sort((prev, next) => age(next) - age(prev));
    
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;

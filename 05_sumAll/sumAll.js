const sumAll = function(num1, num2) {
    let sum = 0;

    //The below should be uncommented to the function trasform "number" to Number
    // Math.floor before Number can be adder for even better functionality
    // num1 = Number(num1);
    // num2 = Number(num2);

    if (isNaN(num1) || isNaN(num1)){
        return "ERROR";
    }
    else if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    else if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    else{
        if(num1 === num2) {
            sum = num1;
            return sum;
        }
        else if (num1 > num2){
            for(let i = num2; i <= num1; i++){
            sum += i;
            }
        return sum;
        }
        else if (num2 > num1){
            for(i = num1; i <= num2; i++){
            sum += i;
            }
        return sum;
        }
    }       

};

// Do not edit below this line
module.exports = sumAll;

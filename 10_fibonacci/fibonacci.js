const fibonacci = function(num) {

    const sequence = [1, 1];

    num = Number(num);

    //Push the proper num of fibonacci numbers into the array
    if(!(num <= 2)){
        for(let i = 0; i < num; i++){
            sequence.push(sequence[i] + sequence [i + 1]);      
        }
    }

    //Default cases
    else{
        if(num === 0){
            return 0;
        }
        else if(num < 0){
            return "OOPS";
        }
    }    

    return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

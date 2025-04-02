const fibonacci = function(num) {
    const array = [1, 1];    

    num = Number(num);

    if(!(num <= 2)){
        for(let i = 0; i < num; i++){
            array.push(array[i] + array [i + 1]);            
        }
    }
    else{
        if(num === 0){
            return 0;
        }
        else if(num < 0){
            return "OOPS";
        }
    }
    
    return array[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;

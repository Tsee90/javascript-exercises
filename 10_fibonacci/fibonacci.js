const fibonacci = function(num) {
    num = parseInt(num);
    if(num === 0){
        return num;
    }else if(num < 0){
        return 'OOPS'
    }else{
        let previous = 1;
        let current = 1;
        let newNum = 1;
        for(i = 2; i < num; i++){
            newNum = current + previous;
            previous = current;
            current = newNum;
        }
        return newNum;
    }
};

// Do not edit below this line
module.exports = fibonacci;

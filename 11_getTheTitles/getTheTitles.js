const getTheTitles = function(arr) {
    let newArr = [];
    for(i = 0; i < arr.length; i++){
        newArr[i] = arr[i].title;
    }
    return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;

const findTheOldest = function(arr) {
    let currentOldestAge = 0;
    let oldie = {};
    for(i = 0; i < arr.length; i++){
        let age = 0;
        let birth = arr[i].yearOfBirth;
        let death = 0;
        if(arr[i].yearOfDeath === undefined){
            death = 2024;
        }else{
            death = arr[i].yearOfDeath;
        }
        age = death - birth;
        if(age >= currentOldestAge){
            currentOldestAge = age;
            oldie = arr[i];
        }
    }
    return oldie;
};

// Do not edit below this line
module.exports = findTheOldest;

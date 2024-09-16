const palindromes = function (string) {
    string = string.replace(/\W|\s/g,'');
    string = string.toLowerCase();
    string2 = '';
    for(i = string.length -1; i >= 0; i--){
        string2 += string[i];
    }
    if(string === string2){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

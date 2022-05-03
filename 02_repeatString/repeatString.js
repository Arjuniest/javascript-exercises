const repeatString = function(word, num) {
    let repeatString = "";
    if(num < 0){
        return "ERROR";
    }
    for(let i = 0; i < num; i++){
        repeatString = word + repeatString;
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;

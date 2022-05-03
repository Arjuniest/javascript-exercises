const reverseString = function(str) {
    let reverse = "";
    for(let i = str.length - 1; i > -1; i--){
        reverse = reverse + str.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;

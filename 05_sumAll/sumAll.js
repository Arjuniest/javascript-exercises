const sumAll = function(num1, num2) {
    let sum = 0;
    if( (num2 > -1) &&  (num1 > -1) && (Number.isInteger(num1) && Number.isInteger(num2))){
        if(num2 > num1){  // two cases, for one num2 is greater and for the other num1 is greater
            for(i = num1; i <= num2; i++){
                sum += i;
            }
            return sum;
        }
        else if(num1 > num2){ 
            for(i = num2; i<= num1; i++){
                sum += i;
            }
            return sum;
        }
    } else return "ERROR"

};

// Do not edit below this line
module.exports = sumAll;

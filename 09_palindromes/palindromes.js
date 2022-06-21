const palindromes = function (words) {
    wordsNew = words.toLowerCase().replace(/[^a-z]/g, "");
    let reverse ='';

    for (let i = words.length -1 ; i >= 0; i--) {
        reverse += wordsNew.charAt(i);        
    }
    if( reverse === wordsNew){
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

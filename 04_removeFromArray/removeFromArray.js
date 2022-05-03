const removeFromArray = function(...args) { //taking arguments as a rest parameter.
    // method one: 
    // const array = args[0];
    // return array.filter(val => !args.includes(val))

    const array = args[0];
    const newArray = [];
    //use forEach to go through the array
    array.forEach((item) => {
        //pushing every element to the new array
        if (!args.includes(item)){
            newArray.push(item);
        };
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;

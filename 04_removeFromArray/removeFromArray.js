const removeFromArray = function() {
    var theArray = arguments[0];
    var newArray = [];
    var numVars = arguments.length-1;
    
    for (var j = 0; j <= theArray.length-1; j++){
        for (var i = 1; i <= numVars; i++){
            if (theArray[j] != arguments[i]){
                newArray.push(theArray[j]);
                theArray.shift()
            }
            console.log(theArray)
            console.log(newArray)
        }
    }

    
    
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

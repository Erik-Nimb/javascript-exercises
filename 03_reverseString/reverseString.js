const reverseString = function(string) {
    
    var l = 0;
    var r = string.length-1;
    const newString = [];
    
    if (string == ""){
        return "";
    }
    for(let i = r; i>=0;i--){
        newString.push(string[i]);
    }
    
    return newString.join('');
};

// Do not edit below this line
module.exports = reverseString;

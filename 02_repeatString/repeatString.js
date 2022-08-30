const repeatString = function(string, num) {
    var output = '';
    if (num < 0){
        return "ERROR";
    }

    for (var i = 0; i < num; i++){
        output += string;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;


const repeatString = function(string,num) {

    if(num==0) return "Error";
    let sum="";
    for (let i=0;i<num;i++){

        sum+=string;

    }

    return sum;
}


// Do not edit below this line
module.exports = repeatString;

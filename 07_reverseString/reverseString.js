const reverseString = function(string) {

    let stringArray=string.split("");
    
    return stringArray.reduceRight((sum,item)=>{

        return sum+item;
    },"")


};

// Do not edit below this line
module.exports = reverseString;

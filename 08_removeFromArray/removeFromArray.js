const removeFromArray = function(arr, ...excItems) {

        
    let filtredArray=arr.filter((item)=>{

                return !(excItems.includes(item));
            })

    return filtredArray;

};

// Do not edit below this line
module.exports = removeFromArray;

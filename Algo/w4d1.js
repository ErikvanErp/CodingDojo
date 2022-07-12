// given an array of integers 
// return the integer that occurs an odd number of times
// the array will have at least 3 items

function arrayOddOccurrences(arr){
    var values = {};

    for (var i=0; i < arr.length; i++){
        if (values[arr[i]]){
            values[arr[i]] ++;
        }
        else {
            values[arr[i]] = 1;
        }
    }

    for (let j in values){
        if(values[j] % 2 == 1){
            return j;
        }
    } 

    return values
}

var newarr =  arrayOddOccurrences([3, 3, 4, 5, 4, 6, 7, 7, 7, 7, 6, 6])
console.log(newarr)


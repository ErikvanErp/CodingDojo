// arr is an array of integers
// find the 1st point in the array where
// the sum of the items to the left
// is equal to the sum of the items to the right 
//
// return -1 if it does not exist
function arrayBalanceIndex(arr){
    if (arr.lenght <= 1){
        return -1
    }
    left = 0;
    right= 0;
    // initially, right equals the sum of what is to the right of index 0
    for (var i=1; i < arr.length; i++){
        right += arr[i]
    } 

    // start at index 0 with the left/right values above
    for (var i=0; i < arr.length; i++){
        if(left == right){
            return i
        }
        left += arr[i]
        right -= arr[i+1]
    }

return -1
}
console.log(arrayBalanceIndex([3,4,3,4,3]))
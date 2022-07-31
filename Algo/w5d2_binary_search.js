// binary search
// given a sorted array, return whether the array contains a given value
//  bonus: return how many times the given number occurs

// alternative to recursion:
// keep track of left and right index
// starting at left = 0 and right = length - 1

function binarySearch(sortedNums, searchNum){

    if (sortedNums.length == 1){
        if (sortedNums[0] == searchNum){
            return true;
        }
        else {
            return false;
        }
    }

    halfway = Math.floor(sortedNums.length / 2)
    if (sortedNums[halfway] == searchNum){
        return true;
    } 
    else if (sortedNums[halfway] > searchNum){
        return binarySearch(sortedNums.slice(0,halfway), searchNum);
    }
    else {
        return binarySearch(sortedNums.slice(halfway, sortedNums.length), searchNum);
    }
}


var arr = [1, 2, 3, 4, 6, 7, 9, 11, 12]
console.log(binarySearch(arr, 1) == true)
console.log(binarySearch(arr, 2) == true)
console.log(binarySearch(arr, 3) == true)
console.log(binarySearch(arr, 4) == true)
console.log(binarySearch(arr, 6) == true)
console.log(binarySearch(arr, 7) == true)
console.log(binarySearch(arr, 9) == true)
console.log(binarySearch(arr, 11) == true)
console.log(binarySearch(arr, 12) == true)

console.log(binarySearch(arr, 5) == false)
console.log(binarySearch(arr, 8) == false)
console.log(binarySearch(arr, 10) == false)

console.log(binarySearch(arr, -3) == false)
console.log(binarySearch(arr, 21) == false)

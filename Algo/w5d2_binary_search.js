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

    return true;
}


console.log(binarySearch([2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9], 4))
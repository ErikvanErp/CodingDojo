/* 
  Array: Mode
  
  Create a function that, given an array of ints,
  returns the int that occurs most frequently in the array.
  What if there are multiple items that occur the same number of time?
    - return all of them (in an array)
    - what if all items occur the same number of times?
      - return empty array
*/

/**
 * Finds the mode or all modes if there are more than one. The mode is the
 *    value which occurs the most times in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Test
 * @returns {Array<number>} Mode or modes in any order.
 */
function mode(nums) {
    if (nums.length < 2){
        return nums;
    }

    frequencies = frequencyTable(nums);

    var maxFrequency = 1;
    var modes = [];
    
    // find the maximum frequency
    // push all numbers with the max frequency to modes array 
    for (var x in frequencies){    
        if (maxFrequency < frequencies[x]){
            maxFrequency = frequencies[x];
            modes = [parseInt(x)];
        } 
        else if (maxFrequency == frequencies[x]) {
            modes.push(parseInt(x));
        }
    }
    
    // find the minimum frequency
    var minFrequency = maxFrequency;
    for (var y in frequencies){
        if (minFrequency > frequencies[y]){
            minFrequency = frequencies[y];
        }
    }

    // if all integers occur the same number of times
    // and there is more than 1 distinct integer: return []
    // else return the modes array
    return maxFrequency == minFrequency && modes.length > 1? [] : modes
}

// Count how often each character occurs in a given array
// Do not count spaces
function frequencyTable(arr) {
    var frequencies = {}
    for (var i = 0; i < arr.length; i++) {
      if (frequencies[arr[i]]) {
        frequencies[arr[i]]++;
      }
      else {
        frequencies[arr[i]] = 1;
      }
    }
    return frequencies
  }


const nums1 = [];
const nums2 = [1];
const nums3 = [5, 1, 4];
const nums4 = [5, 1, 4, 1];
const nums5 = [5, 1, 4, 1, 5];
const nums6 = [5, 1, 4, 1, 5, 6, 6, 4];
const nums7 = [5, 5, 5, 5, 5, 5];



console.log(mode(nums1)) // []
console.log(mode(nums2)) // [1]
console.log(mode(nums3)) // []
console.log(mode(nums4)) // [1]
console.log(mode(nums5)) // [5, 1]
console.log(mode(nums6)) // []
console.log(mode(nums7)) // [5]
// Given two arrays, return a new array containing the items from each array interleaved
// - if array A contains [1, 2, 3] and array B contains [44, 55, 66], 
//   return an array containing [1, 44, 2, 55, 3, 66]. 
// If one array is longer than the other, the extra items will just be at the end of the array
// - given an array containing [7, 8, 9] and [1, 2, 3, 4, 5, 6], 
//   return an array containing [7, 1, 8, 2, 9, 3, 4, 5, 6]

function interleaveArrays(arrayA, arrayB) {
        let newArray = [];
        let maxLength = Math.max(arrayA.length, arrayB.length);
      
        for ( let i = 0; i<maxLength; i++){
          if(arrayA[i]){
            newArray.push(arrayA[i]);
          }
          if(arrayB[i]){
            newArray.push(arrayB[i]);
          }
        }
        return newArray;
      }

console.log(interleaveArrays([1, 3], ["a", "b", "c", "d"]))
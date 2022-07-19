/*
Implement deduplicateSortedArray(arr), 
a function that accepts one argument: an array of items (arr). 
This array of items could be numbers or strings, but not both. 
The array is guaranteed to be sorted 

The function's output will be the same array, but with all duplicate items in it removed.
 For example, if your input was [0, 0, 1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 5, 6], 
 your expected output would be [0, 1, 2, 3, 4, 5, 6] 
You very specifically want to do this in-place - you modify the array you're given.
You can return that array if you want, but it's not necessary.
*/

function deduplicateSortedArray(arr){
    if (arr.length <= 1){
        return arr;
    }
    var prev = 0;
    for (var i = 1; i < arr.length; i++){
        if (arr[i] != arr[prev]){
            prev++;
            arr[prev] = arr[i]
        }
    }
    arr.length = prev + 1;
    return arr
}




console.log(deduplicateSortedArray([2, 3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7]))
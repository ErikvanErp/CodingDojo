// Given two sorted arrays,
// return a new array containing only the elements
// present in both arrays.aIf there are duplicate elements, 
// make sure that the new array contains the smallest number of duplicates.

function intersectionOfSortedArrays(array1, array2){
    var newarr = [];
    var i = 0, j = 0; 
    while(i < array1.length && j < array2.length){
        if (array1[i] == array2[j]){
            newarr.push(array1[i]);
            i++;
            j++;
        }
        else if (array1[i] < array2[j]){
            i++;
        }
        else {
            j++;
        }
    }

    return newarr;
}

arr1 = [3, 4, 5, 6, 6, 6, 6, 7, 7, 8]
arr2 =  [4, 6, 6, 7, 8, 9, 10]
console.log(intersectionOfSortedArrays(arr1, arr2))


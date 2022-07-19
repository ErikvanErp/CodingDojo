// bubble sort
// O( n^2 / 2 )


function bubbleSort(arr){
    var temp;
    for (var j = arr.length - 1; j >=1; j--){
        // after round 1, the final item in arr is the largest
        // after round 2, the final 2 items are the 2 largest
        // etc. 
        // hence the inner loop only needs to go up to position j
        for (var i=0; i < j; i++){
            if (arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr
}





// test cases
console.log(bubbleSort([3,2,1,5,4,7,6]))
console.log(bubbleSort([64,32]))
console.log(bubbleSort([3, 3, 17, 3, 6]))
console.log(bubbleSort([3]))
console.log(bubbleSort([5, 4, 3, 2, 1]))
console.log(bubbleSort([]))

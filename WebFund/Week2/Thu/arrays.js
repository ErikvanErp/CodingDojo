// 1
function alwaysHungry(arr) {
    foodPresent = false;
    for(var i=0; i<arr.length; i++){
        if(arr[i] == "food"){
            console.log("yummy");
            foodPresent = true;
        }
    }
    if (!foodPresent){
        console.log("I'm hungry");
    }
    return;
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

// 2
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }    
    }

    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

// 3

function betterThanAverage(arr) {
    var avg = average(arr);
    var count = 0
    
    for (var i=0; i<arr.length; i++){
        if(arr[i] > avg){
            count++;
        }
    }
    return count;
}
function average(arr){
    var sum = 0;
    for(var i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum / arr.length;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

// 4 done during algo

// 5
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (i=2; i<n; i++){
        fibArr.push(fibArr[i-2] + fibArr[i-1]);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



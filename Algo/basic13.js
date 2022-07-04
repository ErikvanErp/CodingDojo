// print 1-255
for (var i=1; i <= 255; i++){
    console.log(i);
}
// print sum 0-255
var sum = 0;
for (var i=0; i <= 255; i++){
    sum += i;
    console.log(`i: ${i}, sum: ${sum}`);
}
// find and print max
function findMax(arr){
    var max;
    for (var i=0; i < arr.length; i++){
        if (i == 0){
            max = arr[0];
        } 
        else if (arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax([]));
console.log(findMax([-5, 3, 0, 4, -19, 2]));

//array with odds

var odds = [];
for(var i=1; i <= 255; i += 2){
    odds.push(i);
}
console.log(odds);

// greater than Y
function greaterThan(arr, Y){
    var count = 0;
    for(var i=0; i < arr.length; i++){
        if(arr[i] > Y){
            count++;
            console.log(arr[i]);
        }
    }
    return count;
}
var Y = 3;
var array = [-4, 5, 7, 0, 3];
console.log(`There are ${greaterThan(array, Y)} entries greater than ${Y} in the array ${array}.`);

function arrayStats(arr){
    var max, min;
    var sum = 0;
    for(var i=0; i < arr.length; i++){
        if (i == 0){
            max = arr[0];
            min = arr[0];
        }
        else if (arr[i] > max){
            max = arr[i];
        } else if (arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    return {"max": max, "min":min, "avg":sum / arr.length};
}

var array = [-4, 5, 7, 0, 3];
stats = arrayStats(array);
console.log(`Max is ${stats.max}; min is ${stats.min}; average is ${stats.avg}`);


// square each value in a given array, returning that same array with changed values

function squareArray(arr){
    for(var i=0; i<arr.length; i++){
        arr[i] = arr[i] ** 2;
    }
    return arr;
}

array2 = [-1, 3, -4, 2, 56, 0];
squareArray(array2);
console.log(array2);
console.log(squareArray(array2));

// shift array values
// given an array, move all values forward by one index, 
// dropping the first and leaving a "0" value at the end

function shiftArray(arr){
    for(var i=0; i<arr.length - 1; i++){
        arr[i] = arr[i+1];
    }
    arr[i] = 0;
    return arr;
}
array3 = [-1, 3, -4, 2, 56, 0];
shiftArray(array3);
console.log(array3);
console.log(shiftArray(array3));

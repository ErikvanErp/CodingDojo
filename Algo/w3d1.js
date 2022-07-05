function shiftArray(arr, shiftBy){

    var arrNew = [];

    for (var i = 0; i < arr.length; i++){
        j = (i - shiftBy) % arr.length;
        if (j < 0){
            j += arr.length; // modulus % can return a negative number 
        }
        arrNew.push(arr[j]);
    }
    return arrNew;
}



console.log(shiftArray([1,2,3,4,5],1))
console.log(shiftArray([1,2,3,4,5],21))
console.log(shiftArray([1,2,3,4,5],-4))
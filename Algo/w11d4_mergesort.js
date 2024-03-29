function merge(left, right){
    let newArray = [];
    let i = 0;
    let j = 0;
    while (i < left.length || j < right.length){
        if (!left[i]){
            newArray.push(right[j]);
            j++;
        } else if (!right[j]){
            newArray.push(left[i]);
            i++;
        } else if (left[i] < right[j]){
            newArray.push(left[i]);
            i++;
        } else {
            newArray.push(right[j]);
            j++;
        }
    }
    return newArray;
}

function mergeSort(array){
    if (array.length < 2) { 
        return array; 
    }
    let mid = Math.floor(array.length / 2);
    let left = mergeSort(array.slice(0,mid));
    let right = mergeSort(array.slice(mid));
    return merge(left, right);
}

//console.log(merge([1, 4, 5, 10], [2,4,8,9]));
console.log(mergeSort([1, 5, 9, 2, 4, 2, 2, 1, 12, 3]));
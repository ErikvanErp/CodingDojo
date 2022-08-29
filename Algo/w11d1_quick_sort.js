function partition(array, left, right){
    let pivot = array[left + Math.floor((Math.random() * (right - left)))];
    
    let i = left;
    let j = right;

    while(i<j){
        while(array[i] < pivot){ i++; }
        while(array[j] > pivot){ j--; }

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return j;
}

// This quicksort implementation assumes the array has no duplicate elements
function quicksort(array, left=0, right=array.length - 1){
    let pivot = partition(array, left, right);
    if (left < pivot - 1) {
        quicksort(array, left, pivot - 1);
    }
    if (pivot + 1 < right) {
        quicksort(array, pivot + 1, right);
    }
    return array;
}

let arr = [20, 1, 3, 4, 5, 2, 16, 19, 18, 4];
quicksort(arr);
console.log(arr);



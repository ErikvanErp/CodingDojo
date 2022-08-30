const insertionSort = (array) => {
    for(let i = 0; i < array.length - 1; i++){
        let j = i + 1;
        while(j > 0 && array[j] < array[j -1]){
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            j--;
        }
    }
    return array;
}


console.log(insertionSort([5, 6, 2, 9, 10, 3, 0, 2]));
console.log(insertionSort([5]));
console.log(insertionSort([]));
console.log(insertionSort([5, 5, 5, 5]));
console.log(insertionSort([1, 2, 3, 4]));
console.log(insertionSort([4, 3, 2, 1]));


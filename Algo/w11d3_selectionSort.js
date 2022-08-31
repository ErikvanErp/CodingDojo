// Yet another (n^2) sorting algo

function selectionSort(array){
    for (let i = 0; i < array.length - 1; i++){
        var minIndex = i;
        for (j = i+1; j < array.length; j++){
            if (array[minIndex] > array[j]){
                minIndex = j;
            }
        }
        if (minIndex != i){
            let temp = array[minIndex];
            array[minIndex] = array[i];
            array[i] = temp;
        }
    }
    return array;
}

console.log(selectionSort([5, 2, 7, 8, 1, 2, 2, 5, 10, 12, 3]))
function quickSort(array, left, right){
    const len = array.length;
    let pivot;
    let partitionIndex;

    if(left < right) {
        pivot = right;
        partitionIndex = partition(array, pivot, left, right);

        //sort left and right
        quickSort(array, left, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, right);
    }
    return array;
}

function partition(array, pivot, left, right){
    let pivotValue = array[pivot];
    let partitionIndex = left;

    for(let i = left; i < right; i++) {
        if(array[i] < pivotValue){
            swap(array, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(array, right, partitionIndex);
    return partitionIndex;
}

function swap(array, firstIndex, secondIndex){
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const getKthLargest = function (array, k) {
    const indexToFind = array.length-k
    quickSort(array, 0, array.length-1)
    return array[indexToFind]
}
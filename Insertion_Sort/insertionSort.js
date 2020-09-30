// Insertion Sort
// builds up the sort by gradually creating a larger portion which is always sorted

// Time Complexity: O(n^2) Performs well on Nearly Sorted Data
// Space Complexity: O(1)

function insertionSort(arr){
    console.log(`Array starts: [${arr}]`)
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i];
        // console.log(currentVal, i , j)
        for (var j = i - 1; j > -1 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
            console.log(arr)
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([2,1,9,76,4]));
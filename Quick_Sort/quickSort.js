// Quick sort
// Pivot helper should do this in place - don't make a new array. It accepts three arguments: an array, a start index and an end index (these can default to 0 and the array length minus 1, respectively)

// let arr = [5, 2, 1, 8, 4, 7, 6, 3]

// Time Complexity BEST CASE: O(n log n) 
// Time Complexity WORST CASE: O(n^2)
// Space Complexity: O(log n)

function pivot(arr, start=0, end=arr.length-1) {

    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for(var i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}

// console.log(pivot([4,8,2,1,5,7,6,3]));


function quickSort(arr, left=0, right=arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right) // 3
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4,6,9,1,2,5]));

// [4,6,9,1,2,5,3]

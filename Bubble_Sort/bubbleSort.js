// Bubble Sort
// A sorting algorithm where the largest values bubble to the top

// Optimized with noSwaps!!
// Time Complexity: O(n)
// Space Complexity: O(1)
// Performs well on nearly sorted data

function bubbleSort(arr) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--){
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            // console.log(arr, arr[j], arr[j+1])
            if(arr[j] > arr[j+1]) {
                // SWAP!
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
        // console.log("ONE PASS COMPLETE!")
    }
    return arr;
}

console.log(bubbleSort([37,45,29,8, 12,-3]))

// ES6 VERSION
function bubbled(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}

function swap(arr, idx1, idx2) {
    console.log(arr, idx1, idx2)
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

const swapped = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

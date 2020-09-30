// Time complexity: O(log n)

// Only works on a sorted array!

// function accepts a sorted array and a value
function binarySearch(arr, elem) {
    // create a left pointer at the start of the array, and a right pointer at the end of the array
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2); 
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2); 
    }
    if (arr[middle] === elem) {
        return middle;
    }
    return -1;
};


function binarySearch(arr, elem) {
    // create a left pointer at the start of the array, and a right pointer at the end of the array
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2); 
    while (arr[middle] !== elem && start <= end) {
        if (elem < arr[middle]) end = middle - 1; 
        else start = middle + 1;
        middle = Math.floor((start + end) / 2); 
    }
    return arr[middle] === elem ? middle : -1;
};

// [2, 5, 6, 9, 13, 15, 28, 30]
//  S        M               E

// [2, 5, 6, 9, 13, 15, 28, 30]
//              S    M       E

// [2, 5, 6, 9, 13, 15, 28, 30]
//                  SM       E
 


console.log(binarySearch([2,5,6,9,13,15,28,30], 28));


// while the left pointer comes before the right pointer:
    
// create a pointer in the middle
  
// if you find the value you want, return the index

// if the value is too small, move the left pointer up





// function binarySearch(arr, val) {
//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((start + end) / 2); 
//     while (start <= end) {


//        let currentElement = arr[middle]

//        if(currentElement < val) {
//            start = middle + 1;
//        }

//        else if (currentElement > val) {
//            end = middle - 1;
//        }

//        else { 
//            return middle;
//        }
//     }
// }


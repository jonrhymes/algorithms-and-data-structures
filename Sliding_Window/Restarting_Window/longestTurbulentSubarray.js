// Given an integer array arr, return the length of a maximum size turbulent subarray of arr.

// A subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

// More formally, a subarray [arr[i], arr[i + 1], ..., arr[j]] of arr is said to be turbulent if and only if:

//     For i <= k < j:
//         arr[k] > arr[k + 1] when k is odd, and
//         arr[k] < arr[k + 1] when k is even.
//     Or, for i <= k < j:
//         arr[k] > arr[k + 1] when k is even, and
//         arr[k] < arr[k + 1] when k is odd.

function longestTurbulentSubarray(arr) {

    if (arr.length == 1) return 1;
    
    let left = 0;
    let right = 1;
    let running_length = 1;
    let max_length = running_length;
    
    while(left < arr.length && right < arr.length){
        if(arr[left] < arr[left+1]){
            if ((running_length % 2 == 0 && !(arr[right-1] > arr[right])) ||
                (running_length % 2 == 1 && !(arr[right-1] < arr[right]))){
                    left = right-1;
            }
        }
        else if (arr[left] > arr[left+1]){
            if ((running_length % 2 == 0 && !(arr[right-1] < arr[right])) ||
                (running_length % 2 == 1 && !(arr[right-1] > arr[right]))){
                left = right-1;
            }
        }
        else {
            left = left + 1;
        }
        running_length = right - left + 1;
        if(running_length > max_length) max_length = running_length;
        right++;
    }
    return max_length;
};


console.log(longestTurbulentSubarray([9,4,2,10,7,8,8,1,9]))
console.log(longestTurbulentSubarray([4,8,12,16]))
console.log(longestTurbulentSubarray([100]))

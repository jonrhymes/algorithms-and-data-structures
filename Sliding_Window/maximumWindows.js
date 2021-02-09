// Maximum sum of a contiguous subarray of fixed size K

// Example input:
// [4,2,1,7,8,1,2,8,1,0]

// Constraint 1: Maximum
// Constraint 2: Window size

// Keep track of two items:
// 1. Current Running Sum (defaults to zero)
// 2. Maximum so far (defaults to -Infinity)

// First, grow the window to the size and ask, is it greater than negative Infinity? Yes. So update Sum and Max. 

// Second, to "slide" the window down, programmatically you have to remove the value at Index 0 and push in the next value at Index 3. 

// Time Complexity: O(N) - linear time

// Accepts two values: an array and a size k
function maximumSumSubarray(arr, k) {
    if (arr.length < k) return null;
    // the absolute smallest size that can be returned is negative infinity.
    var max = -Infinity;

    // current running sum
    var sum = 0;

    // we have to loop over the array. This restricts the window by way of index of 2. 
    for (let i = 0; i < arr.length; i++) {
        // add together all of the numbers in the array; 
        sum += arr[i]
        // console.log(sum)

        // if the index is equal to (3 - 1 = 2), fixes the size of the window to be two indexes past where it started at (0). So it must have an array length of 3, with a 0-index, 1-index, and 2-index.
        if (i >= k - 1) {

            // Max updates with the biggest sum, compared between the max and the sum
            max = Math.max(max, sum);

            // In order to "slide" ahead, the first item at the beginning of the window must be removed. Moves window up.
            sum -= arr[i - (k - 1)];
            console.log(`Sum: ${sum}, Max: ${max}`)
        }
    }
    return max;
}

// console.log(maximumSumSubarray([4,2,1,7,8], 3))
console.log(maximumSumSubarray([], 3))
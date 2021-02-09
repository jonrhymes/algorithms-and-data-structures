/* Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array. */

// Time Complexity: O(n^2)
// Space Complexity: O(1)

//function maxSubarraySum(arr, num){
//    if (arr.length < num) return null;
//    let total = 0;
//    for (let i = 0; i < num; i++){
//       total += arr[i];
//    }
//    let currentTotal = total;
//    for (let i = num; i < arr.length; i++) {
//       currentTotal += arr[i] - arr[i-num];
//       total = Math.max(total, currentTotal);
//    }
//    return total;
// }

function maxSubarraySum(arr, num) {
   let maxSum = 0;
   let tempSum = 0;
   if (arr.length < num) return null;
   // first, set an initial value of the first array through the num. Instantiates the length of the window from the first index through the num. 
   for (let i = 0; i < num; i++){
      maxSum += arr[i];
   }
   tempSum = maxSum;
      // where the slide activates and starts at the beginning of num's index until the end of the array's length
   for (let i = num; i < arr.length; i++){
      tempSum = tempSum - arr[i - num] + arr[i];
      console.log(tempSum)
      maxSum = Math.max(maxSum, tempSum);
   }
   return maxSum;
}

// Naive Approach. O(n^2)
// function maxSubarraySum(arr, num){
//    if (num > arr.length){
//       return null;
//    }
//    var max = -Infinity;
//    for (let i = 0; i < arr.length - num + 1; i++){
//       temp = 0;
//       for (let j = 0; j < num; j++){
//          temp += arr[i + j];
//       }
//       if (temp > max) {
//          max = temp;
//       }
//    }
//    return max;
// }


console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([], 4); // null
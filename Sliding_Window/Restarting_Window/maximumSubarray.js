//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// O(n) time and O(1) non-input space

function maxSumSubarray(nums) {
    let max = nums[0];
    let window = nums[0];

    for (let i = 1; i < nums.length; i++){
        // console.log(windowSum, maxSum)
        if (window < 0) {
            window = nums[i];
        } else {
            window += nums[i];
        }
        max = Math.max(max, window);
    }
    return max;
};

console.log(maxSumSubarray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSumSubarray([1]))
console.log(maxSumSubarray([0]))
console.log(maxSumSubarray([-1]))
console.log(maxSumSubarray([-100000]))
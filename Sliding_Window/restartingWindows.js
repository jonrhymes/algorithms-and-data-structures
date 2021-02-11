// O(n) time and O(1) non-input space

var findMaxConsecutiveOnes = function (nums) {
    var max = 0;
    var window = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            window = 0;
        } else {
            window += 1;
            max = Math.max(max, window)
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,0,1,0,0,1,1,1,1,1,1,0,1]))
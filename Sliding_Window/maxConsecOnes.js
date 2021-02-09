
var findMaxConsecutiveOnes = function (nums) {
    var max = 0;
    var window = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            // Detecting the ending point for this window.
            window = 0;
        } else {
            // How do you detect that a new window of 1s has started?
            console.log(`window: ${window}, max: ${max}`)
            window += 1;
            max = Math.max(max, window)
            // console.log(max)
        }
    }
    return max;
};

console.log(findMaxConsecutiveOnes([1,0,1,0,0,1,1,1,1,1,1,0,1]))

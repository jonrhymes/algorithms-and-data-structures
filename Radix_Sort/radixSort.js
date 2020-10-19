// Radix Sort
// Not a comparison sort. Takes advantage of a special property in numbers which will sort into buckets [0 - 9], starting from the 1s-column then 10s, 100s, etc. 

// Time Complexity: O(nk)
// Space Complexity: O(n + k)

// Helper - Get Digit (moves from right to left)

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Helper - Digit Count, How many digits in num

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
};

function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets)
        nums = [].concat(...digitBuckets);
        console.log(nums)
    }
    return nums;
}

console.log(radixSort([23,345,5647,12,3452,8965]))
// Dynamic Variant. Smallest Subarray with given sum k. 

function smallestSubarray(arr, targetSum) {

    var currentWindowSum = 0;
    var windowStart = 0;
    var minWindowSize = Infinity;

    for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
        currentWindowSum += arr[windowEnd];

        while (currentWindowSum >= targetSum) {
            minWindowSize = Math.min(minWindowSize, windowEnd - windowStart + 1);

            currentWindowSum -= arr[windowStart];

            windowStart++;
        }
    }
    return minWindowSize;
}


console.log(smallestSubarray([4,2,2,7,8,1,2,8,10], 8))
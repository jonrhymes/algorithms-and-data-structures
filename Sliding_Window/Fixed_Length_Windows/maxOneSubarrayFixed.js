function maxOneSubarrayFixed(arr, k) {
    let maxSum = 0;
    let window = 0;
    if (arr.length < k) return null;

    for (let i = 0; i < k; i++) {
        maxSum += arr[i];
    }
    window = maxSum;

    for (let i = k; i < arr.length; i++){
        window = window - arr[i - k] + arr[i];
        maxSum = Math.max(maxSum, window)
    }
    return maxSum;
}

console.log(maxOneSubarrayFixed([1,0,0,1,1,0,1,0,1,1,1,0,0,1], 5))
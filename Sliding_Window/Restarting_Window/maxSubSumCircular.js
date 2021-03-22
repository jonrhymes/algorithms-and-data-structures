const maxSubarraySumCircular = function(A) {
    let n = A.length;
    let maxSum = A[0];
    let minSum = A[0];
    
    let tempMaxSum = 0;
    let tempMinSum = 0;
    let arraySum = 0;

    if (A == null || n == 0) return 0;
    
    for (let i = 0; i < n; i++){
        arraySum += A[i];
        
        tempMaxSum += A[i];
        
        maxSum = maxSum < tempMaxSum ? tempMaxSum : maxSum;
        tempMaxSum = tempMaxSum < 0 ? 0 : tempMaxSum;
        
        tempMinSum += A[i];
        minSum = minSum > tempMinSum ? tempMinSum : minSum;
        tempMinSum = tempMinSum > 0 ? 0 : tempMinSum;
    }
    if (arraySum == minSum) {
        return maxSum;
    } else {
        return Math.max(maxSum, (arraySum - minSum))
    }
};

const maxSubarraySumCircularNaive = function (A) {
    
    if (A == null || A.length == 0) return 0;

    let maxSum = A[0];
    let minSum = A[0];
    let tempMaxSum = A[0];
    let tempMinSum = A[0];
    let arraySum = A[0];
    
    for (let i = 1; i < A.length; i++) {
        if (tempMaxSum + A[i] > A[i]) {
            tempMaxSum += A[i];
        } else {
            tempMaxSum = A[i];
        }
        maxSum = Math.max(tempMaxSum, maxSum);

        if (tempMinSum + A[i] < A[i]) {
            tempMinSum += A[i];
        } else {
            tempMinSum = A[i];
        }
        minSum = Math.min(tempMinSum, minSum)

        arraySum += A[i];
    }
    if (arraySum == minSum) {
        return maxSum;
    } else {
        return Math.max(arraySum - minSum, maxSum);
    }
};

console.log(maxSubarraySumCircularNaive([1,-2,3,-2])) // 3
console.log(maxSubarraySumCircularNaive([5,-3,5])) // 10
console.log(maxSubarraySumCircularNaive([3, -1, 2, -1])) // 4


console.log(maxSubarraySumCircular([1,-2,3,-2])) // 3
console.log(maxSubarraySumCircular([5,-3,5])) // 10
console.log(maxSubarraySumCircular([3, -1, 2, -1])) // 4


const doubleArray = function (s) {
    
    const newS = s.concat(s)

    console.log(newS)

    let left = s[0];
    let right = s[0];

    for (let i = 1; i < s.length; i++){
        if (A[i] > 0) {
            right++;
        }
    }


console.log(newArr)
}

console.log(doubleArray([1,-2,3,-2])) // 3
console.log(doubleArray([5,-3,5])) // 10
console.log(doubleArray([3, -1, 2, -1])) // 4





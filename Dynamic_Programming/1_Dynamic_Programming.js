// DYNAMIC PROGRAMMING
// Method for solving problems by breaking them down into subproblems, solving those subproblems once and storing their solutions

// ... Only works if OPTIMAL SUBSTRUCTURE & Overlapping Subproblems (repeating data) are present

// Fibonacci Sequence

// Fib(n) = Fib(n-1) + Fib(n-2)
// Fib(2) is 1
// Fib(1) is 1


// Big O is O(2^n) --- VERY BAD! 
// Because it repeats anything above Fib(2), recalculating multiple same calls

// function fib(n) {
//     if(n <= 2) return 1;
//     return fib(n-1) + fib(n-2)
// }

// console.log(fib(10))


// A MEMO-IZED SOLUTION
// Big O Time Complexity = O(N) ... grows linear  

function fib(n, memo=[]){
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1;
    var res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}
// console.log(fib(50))

// REFACTORED -- 

// function fib(n, memo=[undefined,1,1]){
//     if(memo[n] !== undefined) return memo[n];
//     var res = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = res;
//     return res;
// }


// TABULATION
// Usually done using ITERATION
// Better SPACE complexity
// TIME complexity = O(N)

function fib_table(n) {
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}

console.log(fib_table(50))



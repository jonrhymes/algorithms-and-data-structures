// A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.

/* Input : 4
Output : 7
Explantion:
Below are the four ways
 1 step + 1 step + 1 step + 1 step
 1 step + 2 step + 1 step
 2 step + 1 step + 1 step 
 1 step + 1 step + 2 step
 2 step + 2 step
 3 step + 1 step
 1 step + 3 step

Input : 3
Output : 4
Explantion:
Below are the four ways
 1 step + 1 step + 1 step
 1 step + 2 step
 2 step + 1 step
 3 step

 */

function count(n, memo=[]) {
    if (n <= 1) return 1;
    if (n == 2) {
        return 2;
    } else {
        let res = count(n - 3, memo) + count(n - 2, memo) + count(n - 1, memo);
        memo[n] = res;
        return res;
    }
}

console.log(count(4)) // 7
console.log(count(3)) // 4
/*
factorial(n)
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four (4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24. factorial zero (0!) is always 1.
*/


// RECURSIVE APPROACH:
function factorial(x) {
    if (x < 0) return 0;
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}


// Iterative solution:
// function factorial(num) {
//     let total = 1;
//     for (let i = num; i > 1; i--) {
//         total *= i;
//     }
//     return total;
// };


// RECURSIVE APPROACH:
// function factorial(num) {
//     if (num === 1) return 1;
//     return num * factorial(num - 1);
// };

// Recursive approach 2:
// const factorial = n => {
//     if (n == 0) return 1;
//     return n * factorial(n - 1);
// };

console.log(factorial(5))
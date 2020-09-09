/* 
power(n, x)
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents */

function power(base, exponent) {
    if(exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

// const power = (n, x) => {
//     if (x == 0) return 1;
//     if (x == 1) return n;
//     let t = power(n, Math.floor(x / 2));
//     return t * t * power(n, x % 2);
// };

console.log(power(5, 4))
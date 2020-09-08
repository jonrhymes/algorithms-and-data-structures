// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Time complexity: O(n)

// function sameFrequency(num1, num2) {
//     let strNum1 = num1.toString();
//     let strNum2 = num2.toString();
//     if (strNum1.length !== strNum2.length) {
//         return false;
//     }
//     const freqCount1 = {};

//     for (let val of strNum1) freqCount1[val] = (freqCount1[val] || 0) + 1;
//     console.log(freqCount1)
//     for (let val of strNum2) {
//         if (!freqCount1[val]) return false;
//         freqCount1[val]--;
//     }
//     // if they have the same length, start with the first number and store it. 
//     return true;
//     // use the second set to delete any number in the first 
// };


function sameFrequency(num1, num2) {
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if (strNum1.length !== strNum2.length) return false;

    let countNum1 = {};
    let countNum2 = {};

    for (let i = 0; i < strNum1.length; i++) {
        countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
    }
    for(let j = 0; j < strNum1.length; j++){
        countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
      }
      
      for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]) return false;
      }
     
      return true;
}


console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
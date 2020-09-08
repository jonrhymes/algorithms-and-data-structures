/* Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing. */

// Time Complexity: O(n + m)
// Space Complexity: O(1)

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }


// const isSubsequence = (str1, str2) => {
//     if (!str1) return true;

//     let i = 0;
//     for (let j = 0; j < str2.length; j++) {
//         if (i == str1.length - 1) return true;
//         if (str1[i] === str2[j]) i++;
//     }

//     return false;
// };


// Solution 2:

// const isSubsequence = (str1, str2) => {
//     if (str1.length === 0) return true;
//     if (str2.length === 0) return false;
//     if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
//     return isSubsequence(str1, str2.slice(1));
//   };

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
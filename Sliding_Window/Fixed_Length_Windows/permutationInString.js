// Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

// Example 1:

// Input: s1 = "ab" s2 = "eidbaooo"
// Output: True
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:

// Input:s1= "ab" s2 = "eidboaoo"
// Output: False


var checkInclusion = function (s1, s2) {
    let len1 = s1.length, len2 = s2.length;
    if (len1 > len2) return false;
    // creating an array of an uninitialized alphabet
    let count = Array(26);
    count.fill(0)

    // loop through s1
    for (let i = 0; i < len1; i++) {
        // turn each letter in s1 into a positive 1s, while turning each letter in s2 - within the length of s1 - into negative 1s.
        count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        count[s2.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }
    if (allZero(count)) return true;
    // continue the indexing of s2, starting at index where s1 left off
    for (let j = len1; j < len2; j++){
        count[s2.charCodeAt(j) - 'a'.charCodeAt(0)]--;
        count[s2.charCodeAt(j - len1) - 'a'.charCodeAt(0)]++;
        if (allZero(count)) return true;
    }
    // check if arrays contain only zeroes
    function allZero(count) {
        for (let i = 0; i < 26; i++){
            if (count[i] !== 0) return false;
        }
        return true;
    }; 
    return false;
}

console.log(checkInclusion('ab', 'eidbaooo'))
// console.log(checkInclusion('ab', 'eidboaoo'))
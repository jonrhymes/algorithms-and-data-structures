// Valid Anagram
/* Given two strings, write a function called validAnagram to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. */

// Time Complexity: O(n)
// Space Complexity: O(n)

// function validAnagram(str1, str2) {
//     // if the lengths are NOT the same, return false
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for (let val of str1) {
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; 
//     }
//     for (let val of str2) {
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1; 
//     }
//     for (let key in frequencyCounter1) {
//         if(frequencyCounter2[key] !== frequencyCounter1[key]) {
//             return false;
//         }
//     }
//     return true;
// }


function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // if letter exists, increment. Otherwise, set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // can't find letter or letter is zero, then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}


console.log(validAnagram('', ''))
console.log(validAnagram('aaz', 'zza'))
console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'car'))
console.log(validAnagram('awesome', 'awesom'))
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpanama'))
console.log(validAnagram('qwerty', 'qeywrt'))
console.log(validAnagram('texttwisttime', 'timetwisttext'))
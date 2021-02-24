// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.

// O(n) time and O(1) non-input space

function longestUnicharSubstring(s) {
    maxChar = 1;
    window = 1; 

    for (let i = 0; i < s.length; i++){
        if (s[i] != s[i + 1]) {
            window = 1;
        } else {
            window += 1;
            maxChar = Math.max(maxChar, window)
        }
    }
    return maxChar;
}

console.log(longestUnicharSubstring("leetcode"))
console.log(longestUnicharSubstring("abbcccddddeeeeedcba"))
console.log(longestUnicharSubstring("triplepillooooow"))
console.log(longestUnicharSubstring("hooraaaaaaaaaaay"))
console.log(longestUnicharSubstring("tourist"))
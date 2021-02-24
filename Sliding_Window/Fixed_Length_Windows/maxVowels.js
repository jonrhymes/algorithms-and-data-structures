// Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

function maxVowels(s, k) {
    const set = new Set("aeiou");
    let [count, num, max] = [0, 0, 0];
    for (let i = 0; i < s.length; i++){
        if (num < k) num++;
        else if(set.has(s[i - num])) count--;
        if(set.has(s[i])) count++;
        max = Math.max(count, max);
    }
    return max;
}

console.log(maxVowels('abciiidef', 3)) // 3
console.log(maxVowels('aeiou', 2)) // 2
console.log(maxVowels('leetcode', 3)) // 2
console.log(maxVowels('rhythms', 4)) // 0
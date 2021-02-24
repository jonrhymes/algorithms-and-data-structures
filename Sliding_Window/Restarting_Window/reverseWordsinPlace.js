// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// String.prototype.reverse = function () {
//     return this.split('').reverse().join('');
// }

// function reverseWords(s) {
//     let a = s.split(' ');
//     let i;
//     for (i in a){
//         a[i] = a[i].split('').reverse().join('');
//     }
//     return a.join(' ')
// }

function reverseWords(s) {
    let words = s.split(' ');
    let word;
    for (word in words) {
        words[word] = words[word]
            .split('')
            .reverse()
            .join('');
    }
    return words.join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"))
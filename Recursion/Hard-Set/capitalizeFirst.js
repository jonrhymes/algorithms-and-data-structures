/*
capitalizeFirst
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array
*/

function capitalizeFirst(arr) {
    let result = [];
    for (let words of arr) {
        words = words.charAt(0).toUpperCase() + words.slice(1)
        result.push(words)
    }
    return result;
}

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']
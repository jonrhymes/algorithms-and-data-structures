/*
capitalizeWords
Given an array of words, return a new array containing each word capitalized
*/

let words = ['i', 'am', 'learning', 'recursion'];

function capitalizeWords(array) {
    if (array.length === 1) {
        return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length - 1)[0].toUpperCase())
    console.log(res)
    return res;
}
  
  
  console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
/* Frequency Counter / Multiple Pointers - areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. */

//Frequency Counter:
// Time Complexity: O(n)
// Space Complexity: O(n)

function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
};

// Multiple Pointers:
// Time Complexity: O(n log n)
// Space Complexity: O(1)

function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true;
      }
      start++
      next++
    }
    return false;
  }

// Solution 1:
// const areThereDuplicates = (...args) => {
//     let lookup = {};

//     for(let val of args) {
//         if (lookup[val]) return true;
//         lookup[val] = (lookup[val] || 0) + 1;
//     }
//     return false;
// };


// Solution 2:
// const areThereDuplicates = (...args) => {
//     args.sort();

//     let i = 0;

//     for (let j = 1; j < args.length; i++, j++) {
//         if (args[i] === args[j]) {
//             return true;
//         }
//     }
//     return false;
// }

// Solution 3:
// const areThereDuplicates = () => {
//     return new Set(arguments).size !== arguments.length
// }

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true
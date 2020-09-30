// function accepts an array and a value. Loop through the array and check if the current array element is equal to the value

// Time complexity: O(n)



// function accepts an array and a value
function linearSearch(arr, val) {
    // Loop through the array and check if the current array element is equal to the value
    for (let i = 0; i < arr.length; i++) {
        // If it is, return the index at which the element is found
        if (arr[i] === val) return i;
 
    }
    // if the value is never found, return -1;
    return -1;
};

const arr = [34, 56, 1, 2]
const val = 100

console.log(linearSearch(arr, val))
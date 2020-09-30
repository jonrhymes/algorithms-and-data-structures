// JavaScript's built-in SORT function, doesn't always work properly b/c it's based off Unicode 

function numberCompare(num1, num2) {
    return num1 - num2;
}

console.log([5, 11, 91, 3].sort(numberCompare))

function compareByLen(str1, str2) {
    return str1.length - str2.length;
}

console.log(["Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen));
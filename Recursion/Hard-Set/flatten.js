/*
flatten
Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
*/

function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
  }




// const flatten = oldArr => {
//     let newArr = [];
//     for (let i = 0; i < oldArr.length; i++) {
//       if (Array.isArray(oldArr[i])) {
//         newArr = newArr.concat(flatten(oldArr[i]));
//       } else {
//         newArr = [...newArr, oldArr[i]];
//       }
//     }
//     return newArr;
//   };
function countDown(num) {
    if (num <= 0) {
        console.log("All done!");
        return; // IMPORTANT to have here
    }
    console.log(num);
    num--;
    countDown(num);
};

// function countDown(num) {
//     for (let i = num; i > 0; i--) {
//         console.log(i);
//     }
//     console.log("All done!")
// }

countDown(3);
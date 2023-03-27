// <-------------- Var -------------------->

// console.log(counter); // undefined
// var counter = 1;
// console.log(counter);


// <-------------- let -------------------->

// console.log(counter); // error (can not access counter before initialization)
// let counter = 1;
// console.log(counter);


// // <-------------- function -------------------->
// let number1 = 2;
// let number2 = 3;

// let ans = add(number1,number2);  //5
// console.log(ans);
// function add(a,b){
//     return a+b;
// }



// // <--------------  function Expersion-------------------->

// let number1 = 2;
// let number2 = 3;

// let ans = add(number1,number2);  // error (can not access add before initialization)
// console.log(ans);


// let add = function (a,b){
//     return a+b;
// }



// <-------------- Arrow function -------------------->

let number1 = 2;
let number2 = 3;

let ans = add(number1,number2);  // error (can not access add before initialization)
console.log(ans);


let add = (a,b) => a+b;
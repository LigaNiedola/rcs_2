// for (let i = 1; i < 11; i += 1){
//     console.log(i)
// }

// for (let i = 1; i < 11; ++i){
//     console.log(i)
// // }

// for (let i = 10; i > 0;  i -= 1){  //i >= 1
//     console.log(i)
// }

// for (let i = 10; i > 0; --i){  //i >= 1
//     console.log(i)
// // }

// const array = ["Hello", "world", "I'm", "js", "developer"];

// array.forEach((text) => {
//     console.log(text);
// //   });

//   const array1 = ["Hello", "world", "I'm", "js", "developer"];

// array1.forEach((text) => {
//     console.log(array1.join(" "));
//   });

// const array = ["Hello", "world", "I'm", "js", "developer"];

// array.forEach((text) => {
//     const index = array[2];
//     console.log(index);
//   });

// const array = [1, 2, 3, 4];

// const newArray = array.map((element) => element * element);

// console.log(newArray);

const array = [1, 2, 3, 4];

const newArray = array.map((element) => {return element * element}); //element ** 2

console.log(newArray);
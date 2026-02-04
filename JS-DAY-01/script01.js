// // TDZ: when we declare the variable with let and const without its propoer initialization then the variable lies in temporal dead zone untill its proper initialization.


// // Q1.

// Q1. Pass/Fail check
let marks = [32, 11, 7, 24, 19, 35, 10, 0, 15, 17];

let passedMarks = marks.filter((x) => {
  if (x >= 16) {
    console.log(x, "pass");
    return true;   //   must return true to keep in filtered array
  } else {
    console.log(x, "fail");
    return false;  //   must return false to exclude
  }
});

console.log("Filtered (pass only):", passedMarks);


// Q2. Find sum using for loop
let arr1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  sum = sum + arr1[i];
}
console.log("Sum with for loop:", sum);


// Q2. Find sum using reduce
let arr2 = [1, 2, 3, 4, 5];
let total = arr2.reduce((acc, current) => acc + current, 0);
console.log("Sum with reduce:", total);
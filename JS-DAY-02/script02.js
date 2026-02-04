// Push example
let fruits = ["apple", "banana"];
let newLength = fruits.push("cherry");
console.log(newLength); //   prints 3


// Pop example
fruits = ["apple", "banana", "cherry"];
let removed = fruits.pop();
console.log(removed); //   prints "cherry"
console.log(fruits);  //   prints ["apple", "banana"]


// Q1. Reverse array using while + pop
let arr1 = [1, 2, 3, 4, 5];
let rev = [];
while (arr1.length > 0) {
    rev.push(arr1.pop());
}
console.log(rev); //   [5,4,3,2,1]


// Q2. Extract positive numbers using while + shift
let arr2 = [-3, 7, -6, -11, 13, 8];
let res = [];
while (arr2.length > 0) {
  let val = arr2.shift();
  if (val > 0) {
    res.push(val);
  }
}
console.log(res); //   [7, 13, 8]


// Q3. Palindrome check
function palindrome() {
    let arr = [1, 2, 3, 2, 1];
    let original = [];
    let reverse = [];

    for (let i = 0; i < arr.length; i++) {
        original.push(arr[i]);
    }
    while (arr.length > 0) {
        reverse.push(arr.pop());
    }
    for (let i = 0; i < original.length; i++) {  //   declare i properly
        if (original[i] !== reverse[i]) {
            return "not a palindrome";
        }
    }
    return "palindrome";
}
console.log(palindrome()); //   "palindrome"
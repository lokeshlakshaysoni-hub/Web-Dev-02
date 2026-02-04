// Find out the occurrence of "r" in the given string
let str = " tu meri main tera main teri tu mera ";
let count = str.split("r").length - 1;  // ✅ count occurrences
console.log("Occurrences of 'r':", count);


// -----------------------------------------------------------------------------
// Map example: add 2 to each element
let arr = [1, 2, 3, 4, 5];
let res = arr.map((x) => {
    return x + 2;
});
console.log("Array after +2:", res);


// -----------------------------------------------------------------------------
// setTimeout example
setTimeout(() => {
    alert("please sign up");
}, 1000);


// Another setTimeout example
setTimeout(() => {
    alert("please sign up");
}, 5000);


// -----------------------------------------------------------------------------
// Date example
let data = new Date();
console.log("Current Date:", data);


// IIFE (Immediately Invoked Function Expression)
(function () {
    console.log("This is an IIFE");
})();
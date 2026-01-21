console.log("hello world ")


// using push pop 

let fruits = [ "Banana" , "Mango" ]
let removed = [ "apple" ]

console.log(removed)
console.log(fruits)



// reverse the array 

let arr1 = [ 1 , 2 , 3 , 4 , 5 ]
let rev = []

while(arr1.length>0){
    rev.push(arr1.pop())
}

console.log(rev)


//  remove negative element 


let arr2 = [ 1 , 2 , 3 , 4 , 5 , -2 , -4 , -9 ];

let res = []

while(arr2.length>0){
    let val = arr2.shift();
    if(val>0){
        res.push(val);
    }
}
console.log(res)


// check palindrome 

function palindrome() {

  let arr3 = [1, 2, 3, 4, 5]
  let original = []
  let reverse = []

  for (let i = 0; i < arr3.length; i++) {
    original.push(arr3[i])
  }

  while (arr3.length > 0) {
    reverse.push(arr3.pop())
  }

  for (let i = 0; i < original.length; i++) {
    if (original[i] !== reverse[i]) {
      return "not a palindrome"
    }
  }

  return "palindrome"
}

console.log(palindrome())

//  remove duplicate 



// odd elements



//  moves all zeros to end
// Task 1--------------------------------------------------------------------------

const profile = document.getElementById("profile");

profile.style.backgroundColor="tomato";
profile.style.padding="15px";
profile.style.textAlign="center"


// Task 2  ----------------------------------------------------------------------
 
const x = document.getElementsByClassName("important");
console.log(x)

for(let i=0;i<x.length;i++){

    x[i].style.color = "red"
    x[i].style.fontSize = "55px"

}


// task3--------------------------------------------------------------------------

const task3 = document.getElementsByTagName("p");
console.log(task3);

for(let i=0;i<task3.length;i++){
    if(i%2===0){
        task3[i].style.color="blue"
    }
    else{
        task3[i].style.color="green"
    }
}
task3[task3.length-1].style.fontWeight="bold";

// Task4 ------------------------------------------------------------------------

const task4 = document.querySelectorAll(".box");

for(let i=0;i<task4.length;i++){
    task4[i].style.backgroundColor="cyan";
}
task4[0].textContent="im first box";

// Task5 -------------------------------------------------------------------------

const section=document.getElementById("content");
console.log(section.innerText);
// const task5=section.querySelectorAll("p");

// for(let i=0;i<task5.length;i++){
//     task5[i].style.color="purple"
// }

const section2= document.getElementById("guest").innerHTML= "<b>Hello world</b>"
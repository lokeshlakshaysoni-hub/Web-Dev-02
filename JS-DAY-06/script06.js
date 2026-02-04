const headingElement =document.getElementById('myHeading');
console.log(headingElement);

headingElement.textContent = "new Heading Text";
headingElement.style.color = "blue";
headingElement.style.backgroundColor ="yellow";


const paragraph = document.querySelector("#content1");
paragraph.textContent ="this paragraph has been updated using querySelector";
paragraph.style.color="blue";
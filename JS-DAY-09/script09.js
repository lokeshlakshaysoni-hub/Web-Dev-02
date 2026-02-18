function handlechange(event) {
    console.log(event);
    document.getElementById("output").
        textContent = "change detected! ";
}


document.getElementById("myInput").
    addEventListener("change", (event) => {

        // event is the synthetic event which comes under addEventListener's callback function.
        // it will print the event object in the console which contains all the details about the form tag.

        console.log(event.target.value);

        // event.target will print the element which is being targeted in the event listener, will print the user input value 

        document.getElementById("output").
            textContent = "change detected! ";
    });
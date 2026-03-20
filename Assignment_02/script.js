const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("num");
        resolve();
    }, 2000);
})



__________________________________________________________________________________________________________________________________________________________



function getData(){
    pro.then((res)=>console.log(res))
    console.log("after promise");
}


__________________________________________________________________________________________________________________________________________________________



async function demo(){
    return "Hello World";
}
console.log(demo()); 


__________________________________________________________________________________________________________________________________________________________


async function fetchData(city) {
    try {
        const API_key = "14ac0ec299dff0bd71094539fe83cf5a";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}



__________________________________________________________________________________________________________________________________________________________



let history = [];

async function getWeather() {
    let city = document.getElementById("cityInput").value;

    
    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let API_key = "14ac0ec299dff0bd71094539fe83cf5a";

    try {
        let response = await fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city +
            "&appid=" + API_key +
            "&units=metric"
        );

        let data = await response.json();

        if (data.cod != 200) {
            document.getElementById("result").innerHTML = "City not found ❌";
            return;
        }

        
        document.getElementById("result").innerHTML =
            "City: " + data.name + "<br>" +
            "Temperature: " + data.main.temp + " °C<br>" +
            "Humidity: " + data.main.humidity + "%";

        
        if (!history.includes(data.name)) {
            history.push(data.name);
        }

        showHistory();

    } catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML = "Error fetching data ❌";
    }
}



__________________________________________________________________________________________________________________________________________________________



function showHistory() {
    let list = document.getElementById("history");
    list.innerHTML = "";

    for (let i = 0; i < history.length; i++) {
        let li = document.createElement("li");
        li.innerText = history[i];

        
        li.onclick = function () {
            document.getElementById("cityInput").value = history[i];
            getWeather();
        };

        list.appendChild(li);
    }
}



function clearHistory() {
    history = [];
    document.getElementById("history").innerHTML = "";
}


__________________________________________________________________________________________________________________________________________________________
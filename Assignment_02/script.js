let history = [];

// Helper to show logs in our custom UI console
function customLog(message, type) {
    const consoleEl = document.getElementById("console");
    const logEntry = document.createElement("div");
    logEntry.className = `log ${type}`;
    logEntry.innerText = `> ${message}`;
    consoleEl.prepend(logEntry); // Newest logs at top
}

async function getWeather() {
    let city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    // Using your provided key
    const API_key = "14ac0ec299dff0bd71094539fe83cf5a";
    customLog(`Fetching data for ${city}...`, 'async');

    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
        );

        let data = await response.json();

        if (data.cod != 200) {
            document.getElementById("result").innerHTML = `<div class="weather-item">City not found ❌</div>`;
            customLog(`Error: ${data.message}`, 'promise');
            return;
        }

        // Display results using the stylized weather-item classes
        document.getElementById("result").innerHTML = `
            <div class="weather-item"><span>City:</span> <span>${data.name}</span></div>
            <div class="weather-item"><span>Temp:</span> <span>${data.main.temp} °C</span></div>
            <div class="weather-item"><span>Humidity:</span> <span>${data.main.humidity}%</span></div>
        `;

        customLog(`Success: ${data.name} retrieved.`, 'callback');

        if (!history.includes(data.name)) {
            history.push(data.name);
            showHistory();
        }

    } catch (error) {
        console.error(error);
        customLog("Network Error occurred", "async");
        document.getElementById("result").innerHTML = "Error fetching data ❌";
    }
}

function showHistory() {
    let list = document.getElementById("history");
    list.innerHTML = "";

    history.forEach(city => {
        let btn = document.createElement("button");
        btn.innerText = city;
        btn.onclick = function () {
            document.getElementById("cityInput").value = city;
            getWeather();
        };
        list.appendChild(btn);
    });
}

function clearHistory() {
    history = [];
    document.getElementById("history").innerHTML = "";
    customLog("History cleared", "promise");
}
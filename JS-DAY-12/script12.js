function print(num) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log(num);
            res();
        }, 1000)
    })
}

print(1)
    .then(() => print(2))
    .then(() => print(3))
    .then(() => print(4))
    .then(() => print(5))




// function getData(){
//     pro.then((x)=>console.log(x))
//     console.log(" After promise");
// }

//  async function
// 1. to avoid promise chainning
// 2. to execute asynchronous code properly
// 3. to handle the promise in a better way

// important
// async function always return a promise


const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise Resolved");
    }, 1000)
})

async function getData() {
    promise.then((x) => console.log(x))
    console.log(" After promise");
}

// async function  demo(){
//     return "async intro";
//     console.log(" After promise");
// }

getData();

// await calls the async function until the promise returns a result
// await can only be used inside an async function

async function getData() {
    const value = await pro;
    console.log(value);
    console.log(" After promise");
}


getData();

async function fetchData(city) {
    try {
        const API_key = "57b2f19e27a31d2201b78d0ce78907e8";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

        const data = await response.json();
        console.log(city);
        console.log(data.main.temp);
        console.log(data.main.humidity);
    } catch (err) {
        console.error(err);
    }
}
fetchData("london")
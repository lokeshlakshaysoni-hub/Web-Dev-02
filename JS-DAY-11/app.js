// promise is a object which is used to handle asynchronous operation in js
// it has three states
// 1. pending
// 2. fulfilled
// 3. rejected

let mypromise = new Promise((res, rej)=> {
    let data = "this is my data";
    if (data) {
        res(data);
    }else {
        rej(" error: no data found");
    }
    })

mypromise.then((d)=> {
    console.log(d);  // this is my data
}
).catch((err)=> {
    console.log(err);
}) 
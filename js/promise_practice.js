let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("resolve message");
    }else{
        reject("reject message");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) =>{
    console.log(error);
})
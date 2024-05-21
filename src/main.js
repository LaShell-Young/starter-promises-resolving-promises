const { welcome, goodbye, tell } = require("../utils/fortune-teller");

// const promise = welcome();
// console.log(promise);

// using promise response in then 
// const question = "Will the weather be nice today?";
// const tellPromise = tell(question);
// tellPromise.then((result) => {
//     console.log(question)
//     console.log(result)
// }).catch((err) => console.log(err))

// catch error
// const tellPromiseAndThrowError = tell()
//     .then((result) => {
//         console.log("Success:", result);
//     })
//     .catch((error) => {
//         console.log("Failure:", error);
//     });

// setTimeout(() => console.log(tellPromiseAndThrowError), 500);

// then & catch
welcome()
    .then(console.log) // Logs the result of welcome()
    .then(tell) // Calls tell, which returns a rejected promise (no question supplied).
    .then(console.log) // Skipped because tell returned a rejected promise.
    .catch(console.error) // Logs error from tell() or welcome()
    .then(goodbye) // Returns promise from goodbye()
    .then(console.log) // Logs the result from goodbye()
    .catch(console.error); // Logs error only from goodbye()
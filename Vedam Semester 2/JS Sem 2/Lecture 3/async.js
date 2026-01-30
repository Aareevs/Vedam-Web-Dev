console.log("Async Programming in JavaScript");

// Asynchronous Programming: In this type of programming, tasks are executed independently of the main program flow. 
// This means that certain operations can be initiated and allowed to run in the background while the main program continues to execute other tasks. 
// Once the asynchronous operation is complete, a callback function or promise is used to handle the result.

// ------Synchronous Code--------

// console.log("Before");

// function fun() {
//     console.log("I am Fun");
// }
// fun();

// console.log("After");

// ------Asynchronous Code--------

// console.log("Before");

// function fun() {
//     console.log("I am Fun");
// }

// setTimeout(fun, 0); //Delegated to browser through Web APIs and Web APIs allow you to use browser features

// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");
// console.log("After");

// Global Execution Context (GEC) will be released only after the JS Call Stack is free
// The Micro-Task Queue is for Promises and Mutation Observers
// The Callback Queue/Macro-Task is a waiting line for the functions to be pushed to the Call Stack
// Event Loop checks if the Call Stack is free and pushes the functions from Callback Queue to Call Stack

// -------More Async Examples--------

console.log("Before");

let flag = true;

function fun() {
    //2sec
    console.log("loop break");
    flag = false;
}

setTimeout(fun, 2000); 

console.log("After");
console.log("next");
while(flag){}
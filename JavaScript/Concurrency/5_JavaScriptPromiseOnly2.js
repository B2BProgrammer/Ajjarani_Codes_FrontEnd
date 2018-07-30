/***
 * Scenario to understand How Concurrency is handled in JavaScript ?
 *
 * 1. Ticket Collector is checking the tickets before letting person into movie Hall
 * 2.
 * Person 1 : Have ticket
 * Person 2 : Have ticket
 * Person 3 : Don't Have ticket (Equivalent to blocked or time consuming function)
 * Person 4 : Have ticket
 * Person 5 : Have ticket
 *
 * 3. How Js - will treat this situation, without P3, blocking the remaining P4 & P5
 *
 *
 */

/***
 *
 *WithOut using ASYNC/AWAIT Model
 *
 * -- Just using the Promise & CallBack Function
 */

console.log("Person 1 : Shows Ticket");
console.log("Person 2 : Shows Ticket");

/***
 * 1. Create a Promise[promiseWifeBringingTickts] : Syntax for creating a promise :
 * const promiseWifeBringingTickts = new Promise();
 *
 * 2. Promise can have arguments like functions
 *  () => {
 *
 *  }   // This is Callback function declaration syntax
 *  const promiseWifeBringingTickts = new Promise(() =>{ });
 *
 *  3. callback function will have 2 arguments :
 *  const promiseWifeBringingTickts = new Promise((resolve, reject) =>{ })
 *
 */

//Definition of promise, is availble so Js Compiler will
// move to next Js statment, until result of promise is ready

const promiseWifeBringingTickts = new Promise((resolve, reject) => {

    setTimeout( ()=> {
        resolve('ticket');  // This is the return of promise once condition is met
    },3000)
});

/**
 * Once the promise condition is met : (then block will get executed)
 * 1. promiseWifeBringingTickts.then();
 *
 * 2. then block will have callback function with 'tic' as argument( this is the return of promise)
 *  as then block will have the return of promise block
 *   promiseWifeBringingTickts.then(() => {
 *
 *   });
 *
 * 3. CallBack function, having arguments
 *  promiseWifeBringingTickts.then((tic) => {
 *     console.log(`Person 3 : shows ${tic}`)
 *   });
 *
 */

/**
 * In the then block, we will add more promise
 *
 */
const getPropcorn = promiseWifeBringingTickts.then((tic) =>{
     console.log(`husband : we should go in`);
     console.log('wife: no i am hungry ')
    return new Promise((resolve,reject)=> { resolve()})
})

console.log("Person 4 : Shows Ticket");
console.log("Person 5 : Shows Ticket");
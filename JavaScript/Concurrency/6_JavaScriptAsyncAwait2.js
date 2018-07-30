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
 * WITH ASYNC/AWAIT Model  (Best approach)
 *
 *
 */

console.log("Person 1 : Shows Ticket");
console.log("Person 2 : Shows Ticket");

/**
 * 1. Async Function
 *  async : before , will make function async
 *  VVV Important ** async function always returns promise
 *
 */
const preMovie = async () =>{
    // 1. Create a promise
    const promiseWifeBringingTickts = new Promise((resolve, reject) => {
        setTimeout( ()=> {
            resolve('ticket3');  // RESOLVE is the return of promise once condition is met
        },3000)
    });

    //2. await will wait for promise(promiseWifeBringingTickts) to complete & send it's resolve
    // await only works inside async function
    let ticketAwaited = await promiseWifeBringingTickts;

    return ticketAwaited;
}

/**
 * Execute the async function(preMovie)
 *
 *  - Async function always return promise, so we need to catch the promise
 *
 */
preMovie().then((m) => console.log(`Person 3 : shows ${m}`)); // Catching the message/promise sent from preMovie


console.log("Person 4 : Shows Ticket");
console.log("Person 5 : Shows Ticket");
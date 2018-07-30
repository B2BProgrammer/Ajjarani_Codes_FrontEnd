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
 *  async : before , will make function async
 *  VVV Important ** async function always returns promise
 *
 */
const preMovie = async () =>
    'preMovie + Person 3 : Shows Ticket3'; //Sending the promise as return of async function


/**
 * Execute the async function(preMovie)
 *
 *  - Async function always return promise, so we need to catch the promise
 *
 */
preMovie().then((m) => console.log(m)); // Catching the message/promise sent from preMovie


console.log("Person 4 : Shows Ticket");
console.log("Person 5 : Shows Ticket");
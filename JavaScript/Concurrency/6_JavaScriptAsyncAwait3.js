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
    // 1.a Create a promise[promiseWifeBringingTickts]
    const promiseWifeBringingTickts = new Promise((resolve, reject) => {
        setTimeout( ()=> {
            resolve('ticket3');  // RESOLVE is the return of promise once condition is met
        },3000)
    });

    //1.b await will wait for promise(promiseWifeBringingTickts) to complete & send it's resolve
    // await only works inside async function
    let ticketAwaited = await promiseWifeBringingTickts;

    console.log(`wife : I have the ${ticketAwaited}`);
    console.log(`husband : we should go in`);
    console.log('wife: no i am hungry ');


    // 2.a Create a Promise[getPopcorn]
    const getPopcorn = promiseWifeBringingTickts.then((tic) =>{
        return new Promise((resolve,reject)=> { resolve(`${tic} & popcorn`)}); // resolve returning teh promise
    });

    //const getPopCorn = new promise((resolve, reject)=> resolve(`${tic} & popcorn`));
    // 2.b Await promise
    let popCorn = await getPopcorn;
    console.log(`husband : I got some ${popCorn}`);
    console.log(`husband : we should go in`);
    console.log('wife : I need butter on my popcorn');

    // 2.a Promise
    const addButter = getPopcorn.then((tic) =>{
        return new Promise((resolve,reject)=> { resolve(`${tic} & popcorn & butter`)}); // resolve returning teh promise
    });

    //const addButter = new promise((resolve, reject)=> resolve(`${tic} & butter`));
    let butter = await addButter;
    console.log(`husband : I got some ${butter} on popcorn`);
    console.log(`Wife : lets get into movie hall`)

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
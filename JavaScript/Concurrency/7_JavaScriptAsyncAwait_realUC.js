

/**
 * 1. Async Function
 *  async : before , will make function async
 *  VVV Important ** async function always returns promise
 *
 */
const testUserForm = async () =>{
    // 1.a Create a promise[promiseWifeBringingTickts]
    const loadUserForm = new Promise((resolve, reject) => {
        setTimeout( ()=> {
            reject('page loaded');  // RESOLVE is the return of promise once condition is met
        },3000);
    });

    const enterUserName = new Promise((resolve,reject) => {
        setTimeout( ()=> {
            resolve('user entered');  // RESOLVE is the return of promise once condition is met
        },3000);
    });

    const verifyUserDetails = () => {

    }

    await loadUserForm;
    await enterUserName;

    const testResult = verifyUserDetails();
    return testResult;
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
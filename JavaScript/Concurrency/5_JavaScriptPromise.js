/**
 * Promise : Can send back resolve or reject
 */


/**
 * Construction of promise :
 *
 * 1. let promiseName = new Promise();
 * 2. [Parameter for promise] - Callback function having resolve & reject parameters
 *
 * 3. Inside callback function :
 *  Do anything, but end with
 *   3.a Resolve();
 *        &
 *   3.b Reject();
 *
 *
 *
 * 4. Waiting for promise to be resolved/rejected in
 *   4.a If resolved :
 *   - promiseName.then() [Write a function & get the data from resolve of promise]
 *
 *   4.b If rejected
 *   - promiseName.then().catch() [Write a function & get the data from resolve of promise]
 * -
 *
 *
 * @type {Promise<any>}
 */
let promiseToCleanTheRoom = new Promise(function (resolve, reject) {

     let isClean= false;
     if(isClean){
         resolve('cleaned');
     } else{
         reject('Not Cleaned');
     }
});

promiseToCleanTheRoom.then(function (fromResolve) {
    console.log("The room is "+ fromResolve);
}).catch(function (fromReject) {
    console.log("The room is "+ fromReject);
})


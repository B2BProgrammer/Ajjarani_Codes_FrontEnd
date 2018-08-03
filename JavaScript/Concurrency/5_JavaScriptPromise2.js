let cleanRoom =function () {
    return new Promise(function (resolve, reject) {
        resolve('Cleaned the room');
    });
};

let removeGarbage = function () {
    return new Promise(function (resolve,reject) {
        //resolve('remove garbage');
    });
};

let winIceCream = function () {
    return new Promise(function (resolve,reject) {
        //resolve('won Icecream');
    })
};

/**
 * Promise Chain
 */
cleanRoom().then(function (result) {
  return removeGarbage(result);
}).then(function (result) {
    return winIceCream(result);
}).then(function (result) {
    console.log('finished' + result);
})


/**
 * Promise :  Concurrent all promises resolve
 */

Promise.all([cleanRoom(),removeGarbage(),winIceCream()]).then(function () {
    console.log("All Finished")
})


/**
 * Promise :  Any One promise Resolved in group of promises
 */

Promise.race([cleanRoom(),removeGarbage(),winIceCream()]).then(function () {
    console.log("Any one finished");
})

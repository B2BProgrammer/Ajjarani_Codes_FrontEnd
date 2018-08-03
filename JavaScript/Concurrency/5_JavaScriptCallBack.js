/**
 * JavaScript CallBack fucntions(Higher Order Functions) *
 *
 * - functions are firstclass objects
 * - functions can be passed as arguments in function
 */

console.log("---------------SECTION 1------------------");
/**
  anonyms function - x
 */
let x = function () {
    console.log("I am called from inside a function ");
}

/**
 * function [y] takes callback function as parameter.
 *  ** note callback is not a reserved word[It is a concept]
 *  **
 *
 *  - send a function x as a parameter/argument in another function y & call the passed function - x
 *  in the body of function - y
 *
 * @param callback
 */
let y = function (callback1) {
    console.log('do something');
    callback1();
}

// Function x(body) itself is passed to function y
y(x);



console.log("---------------SECTION 2------------------");
/***
 * Why need of callback functions are helpful/Needed?
 */

// OLD Way of doing
let calc = function (num1, num2, calType) {

    if (calType === "add") {
        return num1 + num2;
    } else if (calType === "add"){
        return num1 * num2;
    }
};
console.log(calc(2,3,'add'));



console.log("---------------SECTION 3------------------");
/***
 * Reason : If this function becomes library functions & more & more activities can be performed
 *  How will we do this ?
 *
 *  Approaches :
 *  1. Write more code inside this function
 *          OR
 *  2. Abstract this function itself, so you can call more functions, so extensibility can be easier
 */

// New  Way of doing
// 1. Using CallBack Functions

let add1 = function(a,b){
    return a + b;
}

let multiply1 = function(a,b){
    return a * b;
}

let doWhatEver = function(){
    return "Hello from Ajith, Using CallBack Function";
}

let calc1 = function (num1, num2, funcallback) {
    return funcallback(num1 , num2);
};
console.log(calc1(50, 20, doWhatEver));



console.log("---------------SECTION 4------------------");
console.log(calc1(2,3, function(a,b){ return a - b;}));  // Sending parameters + function body

// Appropriate way of writing callback function(** Function is also provided to execute)
let divideValue = calc1(20,5, function(a,b){
    return a/b;
});
console.log(divideValue);




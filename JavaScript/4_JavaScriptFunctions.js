
/**
 *  PART 4  JavaScript Functions
 *
 * 1. Function Declaration
 * 2. Function Expression
 *
 *
    function functionName(parameters) {
    code to be executed
    }
   -- Declared functions, need to be invoked for later use & will be executed when invoked
 *
 */

/**
 * SECTION 1 : Function Declaration
 * [Not closed by ;] - as not executed
 *
 * - Waiting to be called ...
 */
function myFunction41(a, b) {
    return a * b;
}
var x = myFunction41(4, 3); // Return Value of Function, can be used as values

/***
 * SECTION 2 :Function Expression
 * [Closed by ;] [Because this is executable statement]
 *
 * 1. Anonymous function (a function without a name)
 * 2. Functions stored in variables, are Anonymous, Always called from variable name
 */
var x = function (a, b) {return a * b};
var z = x(4,3) // Calling the function x
console.log("Called the Function Expression :"+z);

/**
 * SECTION 3 : Function Constructor
 *
 */
var funcValue = new Function("a", "b", "return a * b");
var x1 = funcValue(4, 3);
console.log("Called the Function Constructor :"+x1);


/***
 *SECTION 4 : Self Invoking Functions
 *
 * - invoking automatically, without being called
 *
 * (); - Adding this, Is letting know the compiler to invoke on itself
 *
 * ( -- function defintion inside here)();
 */
( function () {
        var x = "Hello, Ajith - I got Self Invoked !! .. I am part of Self Invocation Function";
        console.log(x);
    }
)();



let myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.log(myObject.fullName());         // Will return "John Doe"









/**
 *  PART 2
 *
 * Module wise building of Javascript
 *
 * 1. Using the HTML file & document.getElementById to learn & experience all the concepts of javascript
 *
 *
 */




/**
 * Chapter 11 : Scopes Learning - part 1
 *
 * (Finding & Analysing the scope(Boundary - where the variable is accessible?)
 *
 * 1. Finding the scope of the variable/function/object ?
 * (In JavaScript, objects and functions are also variables.)
 *
 * Levels of Scope :
 *
 * 1. Global Scope  (Complete JavaScript Environment) [These variables belong to window object]
 * 2. Local/Function Scope   (Only within the Function, where declared)
 * 3. Block Scope (ECMA2015 onwards)
 */

var egGlobalScope = "GlobalScopeVariable"
function myfunction11() {

    document.getElementById("demo").innerHTML = egGlobalScope;

    myFunction();
    //document.getElementById("demo").innerHTML = "The type of carName is " + typeof carName; //carName is Can't be accessed Out of Scope

    function myFunction() {
        var carName = "Volvo1";  //Scope of carName only this scope
    }
}


/**
 * Scopes Learning - Part 2
 * Local Scope : Passed to ??
 * *
 */
function myfunction111() {
    var carName = "Volvo2"; //Scope only in this myfunction51 [Local or Function Scope]
    myFunction();

    function myFunction() {
        document.getElementById("demo").innerHTML = "I can display " + carName;
    }
}


/**
 * Scopes Learning - Part 3
 * Difference between Global & Local Scope
 *
 */
function myfunction112() {
    myFunction();

    // code here can use carName as a global variable
    document.getElementById("demo").innerHTML = "I can display " + carName;

    function myFunction() {
        carName = "Volvo3";  //Not declared using var (This will, Now be automatically Global Variable)
        //var carName = "Volvo3";  //var : will make this local/function Scope[not accessible outside scope]
    }
}




/**
 * Chapter 12 :  Important Concepts
 *
 * 1) Hoisting :  VVV Important
 * 2) Strict Mode :
 *
 *
 * PART 1 :
 * Hoisting is JavaScript's default behavior of moving declarations to the top.
 * ** In Javascript, variable can be USED before DECLARED
 *
 * Why & How ?
 * Js default behaiour all the declaration are moved to the top of current scope, in background
 *
 * PART 2 :
 * "use strict" :  [for cleaner code]
 * - JavaScript in strict mode does not allow variables to be used if they are not declared.
 * - new variable in global scope are completely avoided, as no global variables are created

 *
 */

function myfunction12() {
    x = 5; // Assign 5 to x           --> ASSINGING 1st STEP

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element --> USAGE 2nd STEP

    var x;                                  // Declare x    --> DECLARATION 3rd STEP
}


function  myfunction121() {
    var x = 5; // Initialize x + Assign - 5

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x + " " + y;           // Display x[USAGE 2nd STEP]  and y[USAGE 2nd STEP]

    var y = 7; // Initialize y + Assign - 7

}

/**
 * PART 2 :
 * "use strict" :  [for cleaner code]
 * - JavaScript in strict mode does not allow variables to be used if they are not declared.
 * - new variable in global scope are completely avoided, as no global variables are created
 * - prevents using keywords as variable names

 */
function myfunction122() {
    //"use strict"
    y = 3.14; // This will cause an error

    var x = 3.14;
    delete x; // This will cause an error

    var obj = {};
    Object.defineProperty(obj, "x", {value:0, writable:false});

    obj.x = 3.14;   // This will cause an error
}

/**
 * Chapter 13 : this Keyword
 *
 * - this is the owner of the function
 */

function myfunction13() {
    // Create an object:
    var person = {
        firstName: "John",
        lastName : "Doe",
        id       : 5566,
        fullName : function() {
            // this.fullName();
            return this.firstName + " " + this.lastName;
        }
    };

    // Display data from the object:
    document.getElementById("demo").innerHTML = person.fullName(); //John Doe

    var x = this;
    // document.getElementById("demo").innerHTML = x;  // -[object Window]
}



/**
 * Chapter 14 : Let [Keywords] + Block Scope
 *
 * - [var] initiated variables can't have block Scope
 * - [let] initiated variables CAN have BLOCK scope *
 *  {
 *      let x = 2;
 *  }
 *  x can NOT be used outside of block
 *
 * -  with "let" defined global keywords do not belong to window object
 * -  with "let" - one variable can be declared only once in 1 scope
 * -  Variables and constants declared with let or const are not hoisted!
 */

/**
 * Without let - BLOCK scope Not achieved
 */
function myfunction14() {
    var  x = 10;
    // Here x is 10
    {
        var x = 2;
        // Here x is 2
    }
    // Here x is 2
    document.getElementById("demo").innerHTML = x;
}

/**
 * with "let" used to declare block scope can be achieved
 */
function myfunction141() {
    var  x = 10;
    // Here x is 10
    {
        let x = 2;
        // Here x is 2
        document.getElementById("demo").innerHTML = x;
    }
    // Here x is 10
    // document.getElementById("demo").innerHTML = x;
}

function myfunction142() {
    let x = 2;       // Allowed
    //let x = 3;       // Not allowed
    document.getElementById("demo").innerHTML = x;

    {
        let x = 4;   // Allowed
      //  let x = 5;   // Not allowed
        document.getElementById("demo").innerHTML = x;
    }
}


/***
 * Chapter 15 : Const [Keywords] + Block Scope
 *
 * - Same behavior as "Let", except they cannot be reassigned
 * -
 *
 */
function myfunction15() {
    try {
        //1. Const declared variable, value can't be changed
        /*const PI = 3.141592653589793;
        PI = 3.14;*/

        // 2. with const Created object:
        const car = {type:"Fiat", model:"500", color:"white"};

        // Change a property:[Allowed]
        car.color = "red";

        // Add a property: [Allowed]
        car.owner = "Johnson";
        // Display the property:
        document.getElementById("demo").innerHTML = "Car owner is " + car.owner;
    }
    catch (err) {
        document.getElementById("demo").innerHTML = err;
    }
}


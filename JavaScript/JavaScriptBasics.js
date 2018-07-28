/**
 *
 * Module wise building of Javascript
 *
 * 1. Using the HTML file & document.getElementById to learn & experience all the concepts of javascript
 *
 *
 * Common Class - Sort of Js Library implementation & Writing all the logics from W3Schools into this JavaScriptBasics.js
 *
 * document.getElementById - Common method to
 * 1) Parse/Traverse Document object
 * 2) Find the element by the id
 *
 */


/**
 Chapter 1 : Basics of using Functions & alert object in Javascript
 */

function myFunction1() {
    document.getElementById("demo").innerHTML = "Paragraph Changed";
    window.alert(5 + 6);  // Create a window alert
    document.write(5 + 6); // Deletes everything on screen & only prints in Write
    console.log("Hello Ajith");

}


/**
 Chapter 2 :
 1. Declaring & Initialing with the value of Variables
 2. Calling those Variables from HTML element
 */

function myfunction2() {
    var x = 5;
    var y = 6;
    var z = x + y;
    document.getElementById("demo").innerHTML = z;  // 11
    document.getElementById("demo").innerHTML = 10.50;  // 10.50
    document.getElementById("demo").innerHTML = 'John Doe'; // John Doe
    document.getElementById("demo").innerHTML = "Ajith Ajjarni";  // Ajith Ajjarani
    document.getElementById("demo").innerHTML = (5 + 6) * 10;  // 110
    document.getElementById("demo").innerHTML = "Ajith" + " " + "Chandrappa"; // Ajith Ajjarani

    var lastName = "Doe";
    var lastname = "Peterson";
    document.getElementById("demo").innerHTML = lastName; // Variable Names are caseSensitive
    var carName = "Lexus"
    document.getElementById("demo").innerHTML = carName;

    var bikeName;
    document.getElementById("demo").innerHTML = bikeName; //bikeName - no value, so .. it "UNDEFINED"

    x = "5" + 2 + 3;
    document.getElementById("demo").innerHTML = x;  //Concatenation - no addition as string "5" is added -> 523
}


/**
 * Chapter 3 : DataTypes[Though explicit declaration of datatypes doesn't exist in Js]
 *
 * 1. Strings
 * 2. Number [Decimals]
 * 3. Boolean
 * 4. Arrays
 * 5. Object [JSON]
 *
 * 6. Concatenation of Strings & Numbers
 * 7. Basic Fetching of value from JSON
 */
function myfunction3() {

    var y;                                         // y is undefined
    var car = "";                                  // The value is "", the typeof is "string"
    var person = null;                             // Value is null, but type is still an object

    var length = 16;                               // Number
    var lastName = "Johnson";                      // String
    var cars = ["Saab", "Volvo", "BMW"];           // Array
    var x = {
        firstName: "John",
        lastName: "Doe"
    };  // Object  --> this object itself is JavaScript Object Notation : JSON

    var x = 16 + 4 + "Volvo";
    document.getElementById("demo").innerHTML = x;  // 20Volvo .. Left to Right Calculation

    /*
     * String Declaration & String Initiation
     */
    var carName1 = "Volvo XC60";  // Using double quotes
    var carName2 = 'Volvo XC60';  // Using single quotes
    var answer1 = "It's alright";            // Single quote inside double quotes
    var answer2 = "He is called 'Johnny'";     // Single quotes inside double quotes
    var answer3 = 'He is called "Johnny"';       // Double quotes inside single quotes

    document.getElementById("demo").innerHTML =
        carName1 + "<br>" +
        carName2 + "<br>" +
        answer1 + "<br>" +
        answer2 + "<br>" +
        answer3;


    var x1 = 34.00;      // Written with decimals
    var x2 = 34;         // Written without decimals
    var y = 123e5;
    var z = 123e-5;

    document.getElementById("demo").innerHTML = x1 + "<br>" + x2 + "<br>" + y + "<br>" + z

    var x = true;
    var y = false;

    // Arrays Eg
    var cars = ["Saab", "Volvo", "BMW"];  //Arrays are 0-based
    document.getElementById("demo").innerHTML = cars[0];


    // JSON Eg
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };

    document.getElementById("demo").innerHTML =
        person.firstName + " is " + person.age + " years old.";


    typeof "John"                // Returns "string"
    typeof 3.14                  // Returns "number"
    typeof false                 // Returns "boolean"
    typeof [1, 2, 3, 4]             // Returns "object" (not "array", see note below)
    typeof {name: 'John', age: 34} // Returns "object"


    // Json Declaration - work
    var work = {
        "job": [
            {
                "employer": "Flipkart",
                "title": "User Experience Designer",
                "location": "India",
                "dates": "5th Jan 2014 - 8th Jan 2018 ",
                "description": "a piece of writing that partakes of the nature of both speech and song that is nearly always rhythmical, usually metaphorical, and often exhibits such formal elements as meter, rhyme, and stanzaic structure."
            },
            {
                "employer": "BBC",
                "title": "User Experience Designer",
                "location": "London",
                "dates": "5th jan 2011 - 8th Jan 2014",
                "description": "a piece of writing that partakes of the nature of both speech and song that is nearly always rhythmical, usually metaphorical, and often exhibits such formal elements as meter, rhyme, and stanzaic structure."
            }
        ]
    };


    document.getElementById("demo").innerHTML = work.job[0].employer + ": is First Employer & Title is" + work.job[0].title
        + work.job[1].employer + ": is Second Employer & Title is :" + work.job[1].title;


    var txt = "";
    for (var i in work) {
        txt += " Employer Name :" + work.job[i].employer + " Employee Title :" + work.job[i].title + "<br>";
    }

    document.getElementById("demo").innerHTML = txt;
}


/**
 * Chapter 4 : JSON Objects
 *
 * 1. Declaration of JSON Objects (Value(Property) : Pair)
 * 2. Traversal of JSON Objects
 */
function myfunction4() {

    var car = {
        type: "Fiat",  //Name:Value [pair]
        model: "500",
        color: "white"
    };

    var person = {
        firstName: "John",     // String as Property
        lastName: "Doe",
        age: 50,               // Number as Property
        eyeColor: "blue",
        // Function as Property   **Check the function declaration syntax
        fullName: function () {
            return this.firstName + "" + this.lastName;
        }
    };


    // 2 ways of accessing object - properties
    document.getElementById("demo").innerHTML = person.firstName + " " + person.lastName;
    document.getElementById("demo").innerHTML = person["firstName"] + " " + person["lastName"];
    document.getElementById("demo").innerHTML = person.fullName();
}


/**
 * Traversing JSON1
 */
function traverseJSON1() {

    const obj = {
        "a": 1,
        "b": 2,
        "c": 3
    };

    for (const prop in obj) {
        console.log("obj." + prop + " = " + obj[prop]);
    }

    // Output:
    // "obj.a = 1"
    // "obj.b = 2"
    // "obj.c = 3"
}


/**
 * Traversing JSON2
 */

function traverseJSON2() {
    // Json Declaration - work
    var work = {
        "job": [
            {
                "employer": "Flipkart",
                "title": "User Experience Designer",
                "location": "India",
                "dates": "5th Jan 2014 - 8th Jan 2018 ",
                "description": "a piece of writing that partakes of the nature of both speech and song that is nearly always rhythmical, usually metaphorical, and often exhibits such formal elements as meter, rhyme, and stanzaic structure."
            },
            {
                "employer": "BBC",
                "title": "User Experience Designer",
                "location": "London",
                "dates": "5th jan 2011 - 8th Jan 2014",
                "description": "a piece of writing that partakes of the nature of both speech and song that is nearly always rhythmical, usually metaphorical, and often exhibits such formal elements as meter, rhyme, and stanzaic structure."
            }
        ]
    };


    document.getElementById("demo").innerHTML = work.job[0].employer + " is First Employer " + work.job[0].title +
        work.job[1].employer + " is second Employer" + work.job[1].title
    var txt = "";
    console.log("Hello 1");

    for (var eachProp in work.job) {
        console.log(eachProp + " " + work.job[eachProp].employer);
        console.log(eachProp + " " + work.job[eachProp].title);
        console.log(eachProp + " " + work.job[eachProp].location);
        console.log(eachProp + " " + work.job[eachProp].dates);
        console.log(eachProp + " " + work.job[eachProp].description);

    }
}

/**
 * Traversing JSON3
 */
function traverseJSON3() {

    var education = {
        "schools": [
            {
                "name": "Washinton University",
                "location": "London",
                "degree": "Masters",
                "dates": 2033,
                "url": "https://www.google.com/",
                "Major": ["CS"]
            },
            {
                "name": "New York University",
                "location": "USA",
                "degree": "Bachelors",
                "dates": 2020,
                "url": "https://www.google.com/",
                "Major": ["CS"]
            }],
        "onlineCourse": [
            {
                "title": "Frontend Nano Degree",
                "school": "Udacity",
                "dates": "2016",
                "url": "https://www.google.com/"
            }
        ]
    };

    for (var eachProp in education) {
        console.log(eachProp + " " + education.schools[eachProp].name);
    }
}


/**
 * Chapter 5 : Scopes Learning - part 1
 *
 * (Finding & Analysing the scope(Boundary - where the variable is accessible?)
 *
 * 1. Finding the scope of the variable/function/object ?
 * (In JavaScript, objects and functions are also variables.)
 *
 * Levels of Scope :
 *
 * 1. Global Scope
 * 2. Local Scope
 * 3. Function Scope
 */

function myfunction5() {

    myFunction();
    document.getElementById("demo").innerHTML = "The type of carName is " + typeof carName; //carName is Can't be accessed Out of Scope

    function myFunction() {
        var carName = "Volvo1";  //Scope of carName only this scope
    }
}


/**
 * Scopes Learning - Part 2
 * Local Scope : Passed to ??
 * *
 */
function myfunction51() {
    var carName = "Volvo2"; //Scope only in this myfunction51
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
function myfunction52() {
    myFunction();

    // code here can use carName as a global variable
    document.getElementById("demo").innerHTML = "I can display " + carName;

    function myFunction() {
        carName = "Volvo3";  //Not declared using var (This will, Now be automatically Global Variable)
        //var carName = "Volvo3";  //var : will make this local/function Scope[not accessible outside scope]
    }
}


/***
 *   : EVENTS
 *
 * Events : HTML events are "things" that happen to HTML elements.
 *
 * For any Action in HTML
 * Specific Reaction is provided from HTML + Javascript
 * i.e Event
 *
 * Classification of Events :
 * 1) Embedded - inline Js
 * 2) Call External Function
 *
 * Eg :
 *
 * 1) onClick()
 * 2) onMouseover()
 *
 * Complete list of all the Events in HTML DOM
 * http://www.w3schools.com/jsref/dom_obj_event.asp
 */


/**
 * Chapter 6 : Strings Lessons
 *
 *  /*
 * http://www.w3schools.com/jsref/jsref_obj_string.asp
 * http://www.w3schools.com/js/js_string_methods.asp
 * Refer for more methods on String
 *
 */

function myfunction6() {

    var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var len = txt.length;

    document.getElementById("demo").innerHTML = len;
    document.getElementById("demo").innerHTML = "Hello \
	    											Dolly.";  // Breaking the line

    var x = "John";              // x is a string
    var y = new String("John");  // y is an object  ..Note don't create String as Object

    document.getElementById("demo").innerHTML = typeof x + "<br>" + typeof y;

    var str = "Please locate where 'locate' occurs!";  // String starts for Zero[0] index
    var pos = str.indexOf("locate");
    var pos = str.lastIndexOf("locate");
    var pos = str.search("locate");

    var str = "Apple, Banana, Kiwi";
    var res = str.slice(7, 13); //start, end
    var res = str.substring(7, 13);

}


/**
 * Chapter 7 : Number Lessons
 *
 * 1. In JavaScript : No classification as [Int, Short, Float, Decimal, Long]
 * Always 64 Bit Floating point
 */

function myfunction7() {
    var x = 34.00;    // A number with decimals
    var y = 34;       // A number without decimals

    var x = 0xFF;      // x will be 255, it is Hexadecimal


    var x = 123;
    x.toString();            // returns 123 from variable x
    (123).toString();        // returns 123 from literal 123
    (100 + 23).toString();   // returns 123 from expression 100 + 23

    var x = 9.656;
    x.toExponential(2);     // returns 9.66e+0
    x.toExponential(4);     // returns 9.6560e+0
    x.toExponential(6);     // returns 9.656000e+0

    // Number() changes to Numeric datatype
    x = true;
    Number(x);        // returns 1
    x = false;
    Number(x);        // returns 0
    x = new Date();
    Number(x);        // returns 1404568027739
    x = "10"
    Number(x);        // returns 10
    x = "10 20"
    Number(x);        // returns NaN
    document.getElementById("demo").innerHTML = x;


    parseInt("10");         // returns 10.
    parseInt("10.33");      // returns 10
    parseInt("10 20 30");   // returns 10
    parseInt("10 years");   // returns 10
    parseInt("years 10");   // returns NaN


    parseFloat("10");        // returns 10
    parseFloat("10.33");     // returns 10.33
    parseFloat("10 20 30");  // returns 10
    parseFloat("10 years");  // returns 10
    parseFloat("years 10");  // returns NaN
}


/***
 * Chapter 8 : Dates Lessons
 *
 */

function myfunction8() {

    var d = new Date();
    var d = new Date("October 13, 2014 11:13:00");

    document.getElementById("demo").innerHTML = d;
    document.getElementById("demo").innerHTML = d.toDateString();
}


/**
 * Chapter 9 : Arrays in JavaScript *
 *
 * -- Arrays are special objects
 * -- 0 referenced
 *
 *
 **** In JavaScript, arrays use numbered indexes.
 **** In JavaScript, objects use named indexes.

 ** - when element Name - number = use Arrays
 ** - when element Name - String = use JSON(Objects)
 *
 * http://www.w3schools.com/jsref/jsref_obj_array.asp - arrays reference
 */

function myfunction9() {
    var cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo").innerHTML = cars;

    var cars2 = new Array("Saab", "Volvo", "BMW");
    document.getElementById("demo").innerHTML = cars2;
    document.getElementById("demo").innerHTML = cars2[0];
    document.getElementById("demo").innerHTML = cars2[2];

    // Number Referenced
    var person = ["John", "Doe", 46];

    // Property Referenced
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 46
    };


    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;
    text = "<ul>";
    for (i = 0; i < fLen; i++) {
        text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo").innerHTML = text;

    // Array Methods
    document.getElementById("demo").innerHTML = fruits.toString();
    document.getElementById("demo").innerHTML = fruits.join(" * ");  //Banana * Orange * Apple * Mango

    fruits.push("Lemon");       // adds a new element (Lemon) to fruits
    var x = fruits.pop();      // the value of x is "Lemon"
    console.log(x);
    document.getElementById("demo").innerHTML = fruits.join(" * ");
}


/**
 * Chapter 10 : Boolean
 *
 * 1. Any Value is equated as True
 * 2. Any NonValue/undefined/untouched is equated to False
 */

function myfunction10() {

    var b1 = Boolean(100);
    var b2 = Boolean(3.14);
    var b3 = Boolean(-15);
    var b4 = Boolean("Hello");
    var b5 = Boolean('false');
    var b6 = Boolean(1 + 7 + 3.14);

    document.getElementById("demo").innerHTML =
        "100 is " + b1 + "<br>" +
        "3.14 is " + b2 + "<br>" +
        "-15 is " + b3 + "<br>" +
        "Any (not empty) string is " + b4 + "<br>" +
        "Even the string 'false' is " + b5 + "<br>" +
        "Any expression (except zero) is " + b6;
}


/**
 * Chapter 11 : Try-Catch Block Eg 1
 */
function myfunction11() {

    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    var x = document.getElementById("demo").value;
    var x = 10;

    try {
        if (x == "")
            throw "empty";
        if (isNaN(x))
            throw "not a number";
        x = Number(x);
        if (x < 5)
            throw "too low";
        if (x > 10)
            throw "too high";
    }
    catch (err) {
        message.innerHTML = "Input is " + err;
    }
}


/**
 * Try-Catch Block Eg 2
 */
function myfunction111() {
    var num = 1;
    try {
        num.toUpperCase();   // You cannot convert a number to upper case
        console.log(num);  // Used for debugging purpose
    }
    catch (err) {
        document.getElementById("demo").innerHTML = err.toString();
    }
}

/**
 * Chapter 12 :  Important Concepts
 *
 * 1) Hoisting :  VVV Important
 * 2) Strict Mode :
 *
 *
 * Hoisting is JavaScript's default behavior of moving declarations to the top.
 * ** In Javascript, variable can be USED before DECLARED
 *
 * Why & How ?
 * Js default behaiour all the declaration are moved to the top of current scope, in background
 *
 */

function myfunction12() {
    x = 5; // Assign 5 to x           --> ASSINGING 1st

    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element --> USAGE 2nd

    var x;                                  // Declare x    --> DECLARATION 3rd
}

/**
 *
 * 1) Addition is for numbers
 * 2) Concatenation is for Strings
 *
 *
 */



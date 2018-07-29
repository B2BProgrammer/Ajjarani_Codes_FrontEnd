
/**
 *  PART 3
 *
 * In JavaScript most are :
 * - Objects : properties & methods are availble for all objects
 *
 * Objects Eg :
 * 1. Functions
 * 2. Dates
 * 3. Maths
 * 4. Regular Exp
 *
 *
 * Primitives[5] are NOT objects : [they are immutable : they are hardcoded ]
 * 1. String
 * 2. number
 * 3. boolean
 * 4. null
 * 5. undefined
 *
  *
 */


/***
 * Js - Properties & Method
 */

function myfunction16() {

    var person = {
        firstName: "John",  // How to access Js Properties : this.firstName
        lastName : "Doe",   // How to access Js Properties : this.lastName
        id       : 5566,    // How to access Js Properties : this.id
        fullName : function() {   // How to access Js Methods  : this.fullName()
            return this.firstName + " " + this.lastName;  //this is the owner of the function (person object)
        }
    };

    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.fullName());
}

myfunction16();




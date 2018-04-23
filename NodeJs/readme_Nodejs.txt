Module in Node.js
3 Types :
		InBuilt - OOB from Nodejs <<https://www.w3schools.com/nodejs/ref_modules.asp>>
		installted : npm install -g xyg
		Self Created : exports 


----------------require()		
Including module in codebase :
Eg :

var http = require('http');		


------------------exports
-- Creating a module
exports.myDateTime = function () {
    return Date();
};
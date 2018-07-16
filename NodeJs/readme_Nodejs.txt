Node.js runs single-threaded, non-blocking, asynchronously programming, which is very memory efficient.

Module(Libraries) in Node.js
3 Types :
		1. InBuilt - OOB from Nodejs <<https://www.w3schools.com/nodejs/ref_modules.asp>>
		2. installed : npm install -g xyg
		3. Self Created : exports 


----------------require()		
Including module in codebase :
Eg :

var http = require('http');		


------------------exports
-- Creating a module
exports.myDateTime = function () {
    return Date();
};


--
npm install upper-case ( This will install the upper-case library into C:\Users\My Name\node_modules\upper-case)	
	
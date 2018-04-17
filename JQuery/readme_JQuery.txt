JQuery : Js Library 

https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js
[JQuery Library location]

Why is JQuery used ?
1) Some common tasks of javascript are very well done in this library
2) Like effects on particular part
3) Parsing DOM & locating exact location in HTML page & calling backend Jquery functoin is best pracitce
                OR
   We need to write lenthy javascript code for same effect to appear
Important reasons/responsiblties for Jquery

HTML/DOM manipulation
CSS manipulation
HTML event methods
Effects and animations
AJAX
Utilities
---------------------------------------------------------------------------------
 				JQuery Syntax

$(selector).action()

A $ sign to define/access jQuery
A (selector) to "query (or find)" HTML elements
A jQuery action() to be performed on the element(s)		

Eg : Code snipped 				
 				
$(this).hide()  - hide the current element
$("p").hide() 	- hide all the <p> elements in html file
		
		
selector - CSS Syntax same
****
VV Imp

All Jquery are inside this, Jquery will execute only after the complete document is loaded

$(document).ready();		

// Let's call Javascript function insdie that sstatment
$(document).ready(function(){
});

---- JQuery team found this is common to load the document as smaller version of above snippet


$(function(){

});
   ===

$(document).ready(function(){
});   

----------------------------------------------------------------------------------------------------
				JQuery Selectors
Using this query statmnnt - anything in HTML page can be selected				

like - 
element,
class,
types,
attributes.
values of attributes


$()  - all selector is inside ()
http://www.w3schools.com/jquery/trysel.asp

Use this, have all possible selection scenario's in the 


----------------------------------------------------------------------------------------------------
				JQuery Events
Examples:

moving a mouse over an element
selecting a radio button
clicking on an element				
				
jQuery, most DOM events have an equivalent jQuery method.

	
$("p").click(); // For all <p> elements, when clicked .. 
function inside works

$("p").click( function(){

});	


// selector : For p1 element : 
// Event : mouseenter :
// Action : funciton writen - alert something 

$("#p1").mouseenter(function(){    
    alert("You entered p1!");
});

-----------------------
Above is only one event for selected DOM

If for selected DOM - more events, need to code ?


$(slector).on({
   all funtions inside
})
			
			
			
-------------------------------------
jQuery Animations

$(selector).animate({params},speed,callback);


			
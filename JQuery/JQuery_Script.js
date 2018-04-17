/**
 * What is jQuery ?
 * It is a javascript object ..
 * 
 * $ - means/shorthand for jQuery object
 * 
 * 
 *  What does this mean ??
 * $(document).ready(function(){
 * });
 * 
 * 
 * It means - 
 * $ - for jQuery Object
 * $(document) - passing document/DOM object of HTML
 * $(document).ready(function(){  // Using the ready function of jQuery, so that DOM is fully loaded & ready to write custom code
 *   //custom code    
 *   $(selector code).action(); 
 *     //1st Select
 *     // 2nd give the required action
 *    
 * });
 */

/**
 * 
 * $('elementName') -- this will select all the div elements in teh DOM
	$('.className') -- class selector
	$('#idName')     -- id slector
 */


/**
 * DOM Traversal - VVIP
 * 
 * Like in XML travesel is important in java coding, DOM traversal is VVIP in FrontEnd coding
 * 
 * jQuery is used for that
 * 
 *                 Grand parent
 * 
 */

$(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    });
});



$(document).ready(function(){
    $("p1").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },  
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        }, 
        click: function(){
            $(this).css("background-color", "yellow");
        }  
    });
});



// When the element with id - button is clicked - follwoing things will happen
//  fading . div1. div2. div 3
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });
});



$(document).ready(function(){
    $("button").click(function(){
        $("div").animate({left: '250px'});
    });
});




/////////////////

$(document).ready(function(){
	var navList,firstItem, link;

navList = $('.nav-list'); 
firstItem = navList.children().first();
link = firstItem.find('a');
link.attr('href','#1');

});



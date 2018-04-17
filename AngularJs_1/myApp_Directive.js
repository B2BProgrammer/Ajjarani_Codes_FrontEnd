/**
 * 
 */


appModule.directive('w3TestDirective', function() {  //Custom/Self Directive Defintions
    return { 
    	 /*
    	  * E : Element only
    	  * A : attribute only
    	  * C : Class only
    	  * M : comment only
    	  */
    	// restrict : "A",  // Restricing only to be used from Attribute  
    	          
    	template : "<h1>Made by a Custom directive!</h1>"
    		};
});
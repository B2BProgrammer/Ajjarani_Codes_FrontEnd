 https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js
 Angular Js : is another Frontend Javascript library, maintained at this location
 
 basics of AngularJS:
1)  directives, 
2) expressions,
3) filters,
4)  modules, and 
5) controllers.

 else Important concepts of AngularJS:

Events, DOM, Forms, Input, Validation, Http, and more.

AngularJS extends HTML attributes with Directives, and binds data to HTML with Expressions.

--------------------------------------
                  AngularJS directives  - HTML's new extended attributes are called Directive
Angular JS extends HTML attributes
with 
Directives -> binds the data to HTML with Expressions

AngularJS extends HTML with ng-directives.

ng-model directive binds the value of HTML  to application data.
ng-bind directive binds application data to the HTML view.

ng- all angular directives of HTML elements


<div ng-app="" ng-init="myCol='lightblue'">  // ng-init - used for all the initializatoin of values

Directive - 
1) PreDefined
2) Custom - self created
            .directive funtion 


Important Directive

ng-app  : App creation
ng-controller  : Imporatant, scope within start & end of element where ng-controller is mentioned
ng-init  : Application data initialization
ng-data  : Binding HTML input to application data
ng-click : Binding HTML input to application data(Clicking in UI)
ng-bind  : Binding application data to HTML value
ng-repeat : Looping activity .. [ng-repeat="x in names"] names is array, x is each element of name array 

--------------------------------------
                  AngularJS Expressions
                  
{{ expression }}.                

Validates & runs any expression the {{  }}

expression - can be anything
1) multiplicatoin
2) addition
3) Simply string value


ng-bind & {{expression}} , little bit sames
--------------------------------------
                  AngularJS modules  [Will be in .js File]
AngularJS modules define AngularJS applications.



--------------------------------------
                  AngularJS controllers [Will be in .js File]
AngularJS controllers control AngularJS applications.  

-- All the logic is written in controller of MVC
M : model : The data which sychronizeing in 2-way binding - ng-click
V : View : Any changes of data, you see on UI is because of View component - ng-bind
C : Controller : Logic is written here to manipulate the data & reflect in view : This is Javascript objects

$scope : Variable will have all the variable in the ng-app
accessing is
$scope.name [like this]
$scope.fullname = function(){

}

--------------------------------------
                  AngularJS Scopes [Will be in .js File]
$Scope :
in Js file available for both mode

Scope have
1) Global scope :$rootscope  : Inside only "ng-app" is defined
2) scope inside controller : $scope , Inside only "ng-controller" is defined



--------------------------------------
                  AngularJS Filters [Will be in .js File]
** Implemented "|" -pipeline followed my filter commands


| filterName

What it does ?
1) select only required information
2) Change in the format required to display the model data
 


AngularJS provides filters to transform data:

currency Format a number to a currency format.
date Format a date to a specified format.
filter Select a subset of items from an array.
json Format an object to a JSON string.
limitTo Limits an array/string, into a specified number of elements/characters.
lowercase Format a string to lower case.
number Format a number to a string.
orderBy Orders an array by an expression.
uppercase Format a string to upper case.


1) Available filters
2) Custom Filters

eg : in code



--------------------------------------
                  AngularJS Services [Will be in .js File]
30 built-in services                  

Starting with "$"

$Scope : Accesing application data in controller
$Location  : Accessing locatoin
$http : 
$timeout
$interval

1) Availabe/inbuilt services
2) Custome Services

-----------$http
.delete()
.get()
.head()
.jsonp()
.patch()
.post()
.put()

methods availabe in $http
request & response are 2 objects

response : 


$http extensively used to communicate to server side

cross-site HTTP requests










--------------------------------------
						Angular Routing [ngRoute]
						
Routing - used to make SPA [Single page applicaatoin], 
i.e if different pages need to be navigated .. no reloading of new page is required .. all done in one load only

$routeProvider - used in controller						
 






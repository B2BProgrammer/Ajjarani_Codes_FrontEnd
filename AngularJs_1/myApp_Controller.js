/**
 * 
 */

appModule.run(function($rootScope) {
    $rootScope.color = 'blue';
});

appModule.controller('myApp_Controller', function($scope) {  //Controller Defintions
    $scope.firstName= "John";
    $scope.lastName= "Doe";
    $scope.color = "red"
});


appModule.controller('personCtrl', function($scope) {  //Controller Defintions
    $scope.firstName= "John";
    $scope.lastName= "Doe";    
});

appModule.controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
});


/*
 *Custom Filter 
 */
appModule.filter('myFormatFilter', function() {
    return function(x) {
        var i, c, txt = "";
        for (i = 0; i < x.length; i++) {
            c = x[i];
            if (i % 2 == 0) {
                c = c.toUpperCase();
            }
            txt += c;
        }
        return txt;
    };
});




appModule.controller('namesCtrlCustom', function($scope) {
    $scope.names = [
        'Jani',
        'Carl',
        'Margareth',
        'Hege',
        'Joe',
        'Gustav',
        'Birgit',
        'Mary',
        'Kai'
        ];
});



appModule.controller('ServiceEgCtrl', function($scope, $location) {
    $scope.myUrl = $location.absUrl();
});



appModule.controller('ServiceHTTPCtrl', function($scope, $http) {
	  $http.get("wrongfilename.htm")
	  .then(function(response) {
	      $scope.myWelcome = response.data;
	  }, function(response) {
	      $scope.myWelcome = "Something went wrong";
	  });
	});
	 


/*
 * 
 * Custom/Self Created Service
 */

appModule.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});





RouteAppModule.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "main.htm"
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/blue", {
        templateUrl : "blue.htm"
    });
});


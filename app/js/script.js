var app = angular.module("plantCart",['ngRoute'])
				 .config(['$routeProvider', function($routeProvider){
				 	$routeProvider
				 	.when('/main',{
				 		templateUrl : 'templates/template_main.html',
				 		controller : 'MainCtrl'
				 	})
				 	.when('/about',{
				 		templateUrl : 'about.html',
				 		controller : 'MainCtrl'
				 	})
				 	.when('/contact',{
				 		templateUrl : 'contact.html',
				 		controller : 'ContactCtrl'
				 	})
				 	.when('/services',{
				 		templateUrl : 'services.html',
				 		controller : 'ServicesCtrl'
				 	})
				 	.otherwise({redirectTo:'/main'})
				 }])
				 .controller('ServicesCtrl',['$scope','$http', function($scope,$http){
				 	  $http.get('json/services.json').then(function(response){
				 	    $scope.services = response.data;
				 	  });
				 }])
				 .controller('ContactCtrl',['$scope','$http', function($scope,$http){
				 	  $http.get('json/locations.json').then(function(response){
				 	    $scope.locations = response.data;
				 	  });
				 }])
				 .controller('MainCtrl',['$scope','$http', function($scope,$http){
				 	  $http.get('json/services.json').then(function(response){
				 	    $scope.services = response.data;
				 	  });
				 }]);

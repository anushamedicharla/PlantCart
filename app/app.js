'use strict';

var app = angular.module("plantCart",['ngRoute'])
				 .config(['$routeProvider', function($routeProvider){
				 	$routeProvider
				 	.when('/main',{
				 		templateUrl : 'templates/template_main.html',
				 		controller : 'MainCtrl'
				 	})
				 	.when('/succulents',{
				 		templateUrl : 'templates/succulents_main.html',
				 		controller : 'succulentsCtrl'
				 	})
				 	.when('/succulents/:templateId',{
				 		templateUrl : 'templates/succulents_details.html',
				 		controller : 'succulentsDetailsCtrl'
				 	})
				 	.when('/bonsai',{
				 		templateUrl : 'templates/template_bonsai.html',
				 		controller : 'bonsaiCtrl'
				 	})
				 	.when('/airPlants',{
				 		templateUrl : 'templates/template_airPlants.html',
				 		controller : 'airPlantsCtrl'
				 	})
				 	.otherwise({redirectTo:'/main'})
				 }])
				 
				.controller('succulentsCtrl',['$scope','$http','$filter', function($scope,$http,$filter){
					$http.get('json/succulents.json').success(function(data){
						$scope.template_suc = data;
					});
					$http.get('json/backg.json').success(function(data){
						$scope.backg = $filter('filter')(data.results, function(d){
							return d.id === 1;
						})[0];
					});
				}])
				.controller('succulentsDetailsCtrl',['$scope','$http','$routeParams','$filter', function($scope,$http,$routeParams,$filter){
					var templateId = $routeParams.templateId;
					$http.get('json/succulents.json').success(function(data){
						$scope.template = $filter('filter')(data, function(d){
							return d.id == templateId;
						})[0];
						$scope.mainImage = $scope.template.images[0].name;
					});

					$scope.setImage = function(image){
						$scope.mainImage = image.name;
					}
				}])
				.controller('bonsaiCtrl',['$scope','$http', function($scope,$http){

				}])
				.controller('airPlantsCtrl',['$scope','$http', function($scope,$http){

				}]);
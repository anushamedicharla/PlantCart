'use strict';

var app = angular.module("plantCart",['ngRoute'])
				 .config(['$routeProvider', function($routeProvider){
				 	$routeProvider
				 	.when('/main',{
				 		templateUrl : 'templates/template_main.html',
				 		controller : 'MainCtrl'
				 	})
				 	.when('/succulents',{
				 		templateUrl : 'templates/plant_main.html',
				 		controller : 'succulentsCtrl'
				 	})
				 	.when('/succulents/:templateId',{
				 		templateUrl : 'templates/template_plant_details.html',
				 		controller : 'succulentsDetailsCtrl'
				 	})
				 	.when('/bonsai',{
				 		templateUrl : 'templates/plant_main.html',
				 		controller : 'bonsaiCtrl'
				 	})
				 	.when('/bonsai/:templateId',{
				 		templateUrl : 'templates/template_plant_details.html',
				 		controller : 'bonsaiDetailsCtrl'
				 	})
				 	.when('/airPlants',{
				 		templateUrl : 'templates/plant_main.html',
				 		controller : 'airPlantsCtrl'
				 	})
				 	.when('/airPlants/:templateId',{
				 		templateUrl : 'templates/template_plant_details.html',
				 		controller : 'airPlantsDetailsCtrl'
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
				.controller('bonsaiCtrl',['$scope','$http','$filter', function($scope,$http,$filter){
					$http.get('json/bonsai.json').success(function(data){
						$scope.template_suc = data;
					});
					$http.get('json/backg.json').success(function(data){
						$scope.backg = $filter('filter')(data.results, function(d){
							return d.id === 2;
						})[0];
					});
				}])
				.controller('bonsaiDetailsCtrl',['$scope','$http','$routeParams','$filter', function($scope,$http,$routeParams,$filter){
					var templateId = $routeParams.templateId;
					$http.get('json/bonsai.json').success(function(data){
						$scope.template = $filter('filter')(data, function(d){
							return d.id == templateId;
						})[0];
						$scope.mainImage = $scope.template.images[0].name;
					});

					$scope.setImage = function(image){
						$scope.mainImage = image.name;
					}
				}])
				.controller('airPlantsCtrl',['$scope','$http','$filter', function($scope,$http,$filter){
					$http.get('json/air_plant.json').success(function(data){
						$scope.template_suc = data;
					});
					$http.get('json/backg.json').success(function(data){
						$scope.backg = $filter('filter')(data.results, function(d){
							return d.id === 3;
						})[0];
					});
				}])
				.controller('airPlantsDetailsCtrl',['$scope','$http','$routeParams','$filter', function($scope,$http,$routeParams,$filter){
					var templateId = $routeParams.templateId;
					$http.get('json/air_plant.json').success(function(data){
						$scope.template = $filter('filter')(data, function(d){
							return d.id == templateId;
						})[0];
						$scope.mainImage = $scope.template.images[0].name;
					});

					$scope.setImage = function(image){
						$scope.mainImage = image.name;
					}
				}]);
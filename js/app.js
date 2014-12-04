var app = angular.module('kCalc', ['ngRoute']);

app.config(function($routeProvider){
// $locationProvider.html5Mode(true);
	$routeProvider
	.when('/', {
		templateUrl: '/views/planets.html',
		controller: 'mainController'
	})
	.when('/kolob', {
		templateUrl: '/views/kolob.html',
		controller: 'mainController'
	})
	.when('/mars', {
		templateUrl: '/views/mars.html',
		controller: 'marsController'
	})
	.when('/jupiter', {
		templateUrl: '/views/jupiter.html',
		controller: 'marsController'
	})
	.otherwise({

		redirectTo: '/'
	})

})
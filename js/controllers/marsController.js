var app = angular.module('kCalc');

app.controller('marsController', function($scope){

//Mars Calculations
$scope.kCalculate = function(){
	var kDay = $scope.kDay;
	var kHour = $scope.kHour;
	$scope.day =  "Is equal to " + ($scope.kDay * 1.03).toFixed(2) + " days on Earth";
	$scope.hour =  "Is equal to " + (($scope.kDay * 103.2)/60).toFixed(2) + " hours on Earth";	
	$scope.min = "Is equal to " + ($scope.kDay * 1.72).toFixed(2) + " mins on Earth";
}
$scope.lifeCalc = function(){
	$scope.oneYear = 1.88;
	$scope.life = 'You are ' + (Math.floor($scope.yourYears / $scope.oneYear)) + ' Martian Years'
}

//Jupiter Calculations
$scope.jupiterCalculate = function(){
	var kDay = $scope.kDay;
	var kHour = $scope.kHour;
	$scope.day =  "Is equal to " + ($scope.kDay / 0.41).toFixed(2) + " days on Earth";
	$scope.hour =  "Is equal to " + ($scope.kDay * 2.43).toFixed(2) + " hours on Earth";	
	$scope.min = "Is equal to " + ($scope.kDay * 2.43).toFixed(2) + " mins on Earth";
}
$scope.jupiterLife = function(){
	$scope.oneYear = 11.875;
	$scope.life = 'You are ' + ($scope.yourYears / $scope.oneYear).toFixed(2) + ' Jovian Years'
}

});


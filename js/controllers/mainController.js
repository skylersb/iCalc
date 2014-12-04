var app = angular.module('kCalc');

app.controller('mainController', function($scope, $location){

$scope.pickPlanet = true;
$scope.earthYears = 1000;

$scope.planets = [{name: "Mars"}, {name: "Jupiter"}, {name: "Kolob"}];

$scope.$watch('pickPlanet', function(planet){
	if(planet === "Mars"){
		$location.path('/mars');
	} else if (planet === "Jupiter"){
		$location.path('/jupiter');
	} else if (planet === "Kolob"){
		$location.path('/kolob');
	}
});


$scope.kCalculate = function(){
	var kDay = $scope.kDay;
	var kHour = $scope.kHour;
	$scope.day = "Is equal to " + Math.floor($scope.kDay * 1000) + " years on Earth";
	$scope.hour =  "Is equal to " + Math.floor(($scope.kDay * 1000)/24) + " years on Earth";
	$scope.min = "Is equal to " + Math.floor(((($scope.kDay * 1000)/24)/60) * 12) + " months on Earth";
	
}

$scope.lifeCalc = function(){
	$scope.oneYear = 1.5;
	$scope.life = "You have been away from home for exactly " + Math.floor($scope.oneYear * $scope.yourYears) + " mins";

}

});

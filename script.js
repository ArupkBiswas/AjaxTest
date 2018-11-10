var app = angular.module("myApp",[]);

app.controller("myController",function($scope,$http){
	var url = "test.json";
	$http.get(url).success(function (response) {
		$scope.employees = response;
	});
});
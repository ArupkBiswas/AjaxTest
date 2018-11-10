var app = angular.module("myApp",[]);

app.controller("myController",function($scope,$http){ 

	$http({
		method : 'GET',
		url : 'test.json',
	}).then(function(response){
		$scope.employees = response.data;
	},function(error)
	{
		alert("Server Error....!!!! :(");
	});
});

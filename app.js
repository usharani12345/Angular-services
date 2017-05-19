var app=angular.module("myApp",[]);





app.controller("myController",["$scope","example","customService","customFactory","AppName","AppVersion",function($scope,example,customService,customFactory,AppName,AppVersion){
	AppName="1.0.4";
	console.log(example.fullName());
	console.log(customService.getCustomerDetails());
	console.log(customFactory);
	console.log(AppName);
	console.log(AppVersion);
	$scope.message1=example.fullName(); 
	$scope.customFactoryDetails=customFactory;
	$scope.angularApp = AppName;
	$scope.angularVersion = AppVersion;

}])
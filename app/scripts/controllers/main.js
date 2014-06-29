'use strict';

angular.module('anExApp')
	.controller('MainCtrl',['AppData',function ($scope,AppData) {
		$scope.data = [];
		$scope.data = JSON.stringify($scope.fetch());
		console.log($scope);
		console.log($scope.fetch());
		console.log($scope.data);
		//$scope.data = AppData.fetch();
		// _.when(AppData.fetch({
		// 	success: function(){
		// 		$scope.data = AppData;
		// 	}
		// }));
		// AppData.fetch().then(function(){

		// });
		// $scope.awesomeThings = [
		//   'HTML5 Boilerplate',
		//   'AngularJS',
		//   'Karma'
		// ];
  }]);

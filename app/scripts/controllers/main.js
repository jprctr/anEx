/* global _ */
'use strict';

/**
 * @ngdoc function
 * @name anExApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the anExApp
 */
angular.module('anExApp')
  .controller('MainCtrl', ['$scope','Appdata', function ($scope,Appdata) {
  	var init = function(){
  		$scope.isLoading = true;
  		$scope.keyOrder = 'POPESTIMATE2013';
  		$scope.reverseSort = true;
  		$scope.data = [];
  		$scope.display = [];
  		$scope.populationOptions = [
  			100,
  			1000,
  			10000,
  			100000,
  			1000000,
  			10000000
  		];
  		$scope.minPopulation = _.first($scope.populationOptions);
  	};
  	init();
  	var filterData = function(data,min){
  		var filteredData = _.filter(data,function(d){
  			return d.POPESTIMATE2013 > min;
  		});
  		return filteredData;
  	};
  	var asyncInit = function(data){
  		$scope.isLoading = false;
  		$scope.data = data;
  		$scope.display = filterData($scope.data,$scope.minPopulation);
  	};
  	Appdata.then(function(data){
  		asyncInit(data);
  	});
  	$scope.$watch('minPopulation',function(newVal,oldVal){
  		if (!_.isEqual(newVal,oldVal)){
  			$scope.display = filterData($scope.data,$scope.minPopulation);
  		}
  	});
  }]);

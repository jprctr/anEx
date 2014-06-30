'use strict';

/**
 * @ngdoc service
 * @name anExApp.appData
 * @description
 * # appData
 * Service in the anExApp.
 */
angular.module('anExApp')
  .service('Appdata', ['$http', function Appdata($http) {
  	var url = 'data/CO-EST2013-Limiteddata.json';
  	var data = $http.get(url).then(function(response){
  		return response.data;
  	});
  	return data;
  }]);

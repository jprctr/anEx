'use strict';

/**
 * @ngdoc function
 * @name anExApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the anExApp
 */
angular.module('anExApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

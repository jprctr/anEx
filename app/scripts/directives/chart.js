'use strict';

/**
 * @ngdoc directive
 * @name anExApp.directive:chart
 * @description
 * # chart
 */
angular.module('anExApp')
  .directive('chart', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the chart directive');
      }
    };
  });

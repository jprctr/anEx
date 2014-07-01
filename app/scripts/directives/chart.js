/* global d3,_ */
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
		replace: false,
		restrict: 'E',
		link: function postLink(scope, element, attrs) {

			var width = 580,
				height = 360;

			var svg = d3.select(element[0])
						.append('svg')
						.attr('width',width)
						.attr('height',height);

			var drawChart = function(data) {
				var circle = svg.selectAll('circle')
								.data(data);

				circle.enter().append('circle')
					.attr('cx',function(){ return Math.random() * width; })
					.attr('cy',function(){ return Math.random() * height; })
					.attr('r',function(d){ return Math.sqrt(d.POPESTIMATE2013)/100; });

				circle.exit().remove();
			}

			scope.$watch('display',function(newVal,oldVal){
				if (!_.isEqual(newVal,oldVal)) {
					drawChart(newVal);
				}
			});

		}
	};
});
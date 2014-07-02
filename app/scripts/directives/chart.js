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
		restrict: 'E',
		replace: false,
		scope: {
			display: '=display'
		},
		link: function (scope, element) {//, attrs) {

			var width = 580,
				height = 360;

			var svg = d3.select(element[0])
						.append('svg')
						.attr('width',width)
						.attr('height',height);

			var keyFn = function(d) { return d.CTYNAME; };

			// var projection = d3.geo.albersUsa()
			// 					.scale(width)
			// 					.translate([width/2,height/2]);

			// var path = d3.geo.path()
			// 			.projection(projection);

			var drawChart = function(data) {

				var circle = svg.selectAll('circle')
								.data(data,keyFn);

				circle.exit().remove();

				circle.enter().append('circle')
					.attr('cx',function(){ return Math.random() * width; })
					.attr('cy',function(){ return Math.random() * height; })
					.attr('r',function(d){ return Math.sqrt(d.POPESTIMATE2013)/100; });

			};

			scope.$watch('display',function(newVal,oldVal){
				if (!_.isEqual(newVal,oldVal)) {
					drawChart(_.cloneDeep(newVal));
				}
			});

		}
	};
});
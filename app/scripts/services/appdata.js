'use strict';

angular.module('anExApp')
	.service('AppData', function AppData() {
		var AppData = {};

		AppData.fetch = function(){
			return [
						{
							keyA:'someval',
							keyB:'otherval'
						},
						{
							keyA:'differentval',
							keyB:'anotherval'
						}
					];
		};
		// var appData = new Miso.Dataset({
		// 	url : 'data/airports.json'
		// });
		return AppData;
});
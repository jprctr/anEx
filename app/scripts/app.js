'use strict';

/**
 * @ngdoc overview
 * @name anExApp
 * @description
 * # anExApp
 *
 * Main module of the application.
 */
angular
  .module('anExApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

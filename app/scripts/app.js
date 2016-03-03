'use strict';

/**
 * @ngdoc overview
 * @name ordbogenFrontendApp
 * @description
 * # ordbogenFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('ordbogenFrontendApp', [
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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

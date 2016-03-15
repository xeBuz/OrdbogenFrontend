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
    'ngTouch',
    'LocalStorageModule',
    'uiGmapgoogle-maps',
    'angular-spinkit',
    'API',
    'countries',
    'login'
  ])
  .config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  })
  .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
            });
  });

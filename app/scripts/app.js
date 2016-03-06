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
    'API',
    'countries',
  ])
  .config(function ($httpProvider) {
    $httpProvider.defaults.useXDomain = false;
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });

// angular
//   .module('ordbogenFrontendApp', [
//     'ngAnimate',
//     'ngCookies',
//     'ngResource',
//     'ngRoute',
//     'ngSanitize',
//     'ngTouch',
//   ])
//   .config(function ($httpProvider) {
//     $httpProvider.defaults.useXDomain = false;
//     $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//     $httpProvider.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';

//     delete $httpProvider.defaults.headers.common['X-Requested-With'];
//   })
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .when('/countries', {
//         templateUrl: 'views/countries.html',
//         controller: 'CountriesCtrl',
//         controllerAs: 'countries'
//       })
//       .when('/countries/:code', {
//         templateUrl: 'views/country.html',
//         controller: 'CountriesCtrl',
//         controllerAs: 'countries'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });

'use strict';

/**
 * @name countries
 * @description
 */
angular
    .module('countries', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/country/list', {
                templateUrl: 'views/country/list.html',
                controller: 'countriesController'
            })
            .when('/country/code/:code', {
                templateUrl: 'views/country/info.html',
                controller: 'countryController'
            })
            .when('/country/new', {
                templateUrl: 'views/country/new.html',
                controller: 'countryNewController'
            })
            .when('/country/search', {
                templateUrl: 'views/country/search.html',
                controller: 'countriesSearch'
            });
});
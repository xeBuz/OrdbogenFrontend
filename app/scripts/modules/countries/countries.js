'use strict';

/**
 * @name countries
 * @description
 */
angular
    .module('countries', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/countries', {
                templateUrl: 'views/countries.html',
                controller: 'countriesController'
            })
            .when('/countries/:id', {
                templateUrl: 'views/country.html',
                controller: 'countryController'
            });
});
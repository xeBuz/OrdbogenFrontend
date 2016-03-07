'use strict';

/**
 * @name countries
 * @description
 */
angular
    .module('countries', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/countries/', {
                templateUrl: 'views/countries.html',
                controller: 'countriesController'
            })
            .when('/country/:code', {
                templateUrl: 'views/country.html',
                controller: 'countryController'
            })
            .when('/', {
                templateUrl: 'views/search.html',
                controller: 'countriesSearch'
            });
});
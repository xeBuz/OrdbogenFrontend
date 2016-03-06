'use strict';

/**
 * @name Api
 * @description
 * This module allow us work with the API
 */
angular
    .module('API', [])
    .constant('APIEndpoints', {
        continents: '/continents/',
        continent: '/continents/{id}',
        countries:'/countries/',
        country: '/countries/{code}',
        events: '/events/',
        event: '/events/{id}',
});
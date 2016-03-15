'use strict';

/**
 * @name login
 * @description
 */
angular
    .module('login', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/user/login', {
                templateUrl: 'views/user/login.html',
                controller: 'userLogin'
            });
});
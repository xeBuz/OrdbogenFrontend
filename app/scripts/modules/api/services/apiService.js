'use strict';

/**
 * @name API.APIService
 * @description
 */
angular
    .module('API')
    .service('APIService', ['APIEndpoints', '$q', '$http', function(APIEndpoints, $q, $http){

        var host = 'http://localhost:5000/api';

        var exports = {},
            _token;

        /**
         * @name setToken
         * @description
         * Set the token
         */
        exports.setToken = function(token) {
            _token = token;
        };

        /**
         * @name get
         * @description
         */
        exports.get = function(entity, data, params) {
            return http(APIEndpoints[entity], 'GET', data, params);
        };

        /**
         * @name post
         * @description
         */
        exports.post = function(entity, data, params) {
            return http(APIEndpoints[entity], 'POST', data, params);
        };

        /**
         * @name update
         * @description
         */
        exports.put = function(entity, data) {
            return http(APIEndpoints[entity], 'PUT', data);
        };

        /**
         * @name delete
         * @description
         */
        exports.delete = function(entity, data) {
            return http(APIEndpoints[entity], 'DELETE', data);
        };

        /**
         * @name http
         * @description
         */
        var http = function(url, method, data, params) {
            var deferred = $q.defer();

            if (!angular.isUndefined(data)) {
                angular.forEach(data, function(key, value){
                    url = url.replace('{'+value+'}', key);
                })
            }

            if (!angular.isUndefined(data)) {
                data = $.param(data);
            }

            var headers = {
                Authorization: _token
            };

            var req = {
                method: method,
                url: host+url,
                data: data,
                params: params || {},
                headers: headers
            };

            $http(req).success(function(data, status, headers, config){
                deferred.resolve(data, status, headers, config);
            }).error(function(data, status, headers, config){
                deferred.resolve(data, status, headers, config);
            });

            return deferred.promise;
        };

        return exports;
}]);
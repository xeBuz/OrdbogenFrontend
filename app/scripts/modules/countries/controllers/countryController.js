'use strict';

/**
 * @name countries.countryController
 * @description
 */
angular.module('countries')
    .controller('countryController', ['$scope', 'APIService', 'localStorageService', '$routeParams',
        function($scope, API, localStorageService, $routeParams)
        {

        $scope.countryData = [];

        var getCountry = function(code) {

            API.get('country', {}, {}).then(function(data) {
                if (data.status.code === 200) {
                    console.log(data);
                    $scope.countryData = data.data;
                    $scope.totalItems = data.length;
                } else {
                    console.log(data)
                    console.log("Error getting Countries")
                }
            },function() {
                console.log("Error querying API Countries")
            });
        };

        $scope.pageChanged = function() {
            getCountry($routeParams.code);
        };

        getCountry($routeParams.code);

}]);
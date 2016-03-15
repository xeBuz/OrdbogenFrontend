'use strict';

/**
 * @name countries.countryNewController
 * @description
 */
angular.module('countries')
    .controller('countryNewController', ['$scope', 'APIService', 'localStorageService', '$routeParams',
        function($scope, API, localStorageService, $routeParams)
        {
        $scope.country = {};

        var saveCountry = function() {
            $scope.showSpinner = true;
            API.post('countries', $scope.country).then(function(data) {
                if (data.status.code === 201) {
                    $scope.alert = true;
                }
                else {
                    console.log("Error getting Countries");
                }
            },function() {
                console.log("Error querying API Countries")
            });

            $scope.showSpinner = false;
        };

        $scope.submit = function() {
            saveCountry();
        }

}]);
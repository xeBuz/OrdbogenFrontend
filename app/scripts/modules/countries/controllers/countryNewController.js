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
            console.log("POSTing");
            API.post('countries', $scope.country).then(function(data) {
                console.log(data);
                if (data.status.code === 201) {
                    console.log("DONE");
                    console.log(data);
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
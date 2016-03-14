'use strict';

/**
 * @name countries.countryController
 * @description
 */
angular.module('countries')
    .controller('countryController', ['$scope', 'APIService', 'localStorageService', '$routeParams',
        function($scope, API, localStorageService, $routeParams)
        {
        $scope.country = [];

        var getCountry = function(code) {
            var coord;
            API.get('country', {code:code}, {}).then(function(data) {
                if (data.status.code === 200) {
                    console.log(data);
                    coord = data.data.coordinates.split(",");
                    $scope.map = { center: { latitude: coord[0], longitude: coord[1] }, zoom: 6 };
                    $scope.country = data.data;
                } else {
                    console.log("Error getting Countries");
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
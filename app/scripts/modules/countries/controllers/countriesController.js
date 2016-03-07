'use strict';

/**
 * @name countries.countriesController
 * @description
 */
angular.module('countries')
    .controller('countriesController', ['$scope', 'APIService', 'localStorageService', function($scope, API, localStorageService) {

        $scope.countriesList = [];
        $scope.currentPage = 1

        var getCountries = function(page) {

            API.get('countries',{}, {page: page, count: 10}).then(function(data) {
                if (data.status.code === 200) {
                    $scope.countriesList = data.data;
                    $scope.totalItems = data.length;
                    $scope.next = !angular.isUndefined(data.links.next);
                    $scope.prev = !angular.isUndefined(data.links.prev);
                } else {
                    console.log("Error getting Countries")
                }
            },function() {
                console.log("Error querying API Countries")
            });
        };

        $scope.pageChanged = function() {
            getCountries($scope.currentPage);
        };

        $scope.nextPage = function() {
            $scope.currentPage++;
            getCountries($scope.currentPage);
        }

        $scope.prevPage = function() {
            $scope.currentPage--;
            getCountries($scope.currentPage);
        }

        getCountries($scope.currentPage);

}]);
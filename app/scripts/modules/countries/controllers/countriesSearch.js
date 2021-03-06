'use strict';

/**
 * @name countries.countriesSearch
 * @description
 */
angular.module('countries')
    .controller('countriesSearch', ['$scope', 'APIService', 'localStorageService', function($scope, API, localStorageService) {

        $scope.countriesList = [];
        $scope.countryName = "Denmark";

        var searchCountry = function(name) {
            $scope.showSpinner = true;
            API.get('countries',{}, {name: name, count: 10}).then(function(data) {
                if (data.status.code === 200) {
                    $scope.countriesList = data.data;
                    $scope.totalItems = data.length;
                } else {
                    console.log("Error getting Countries")
                }
            },function() {
                console.log("Error querying API Countries")
            });
            $scope.showSpinner = false;
        };


        $scope.updatePage = function(){
            searchCountry($scope.countryName);
        };

        searchCountry($scope.countryName);
}]);
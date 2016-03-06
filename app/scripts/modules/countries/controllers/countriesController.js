'use strict';

/**
 * @name countries.countriesController
 * @description
 */
angular.module('countries')
    .controller('countriesController', ['$scope', 'APIService', function($scope, API) {

        $scope.countriesList = [];
        $scope.currentPage = {
            number: 1
        };

        var getCountries = function(page) {

            API.get('countries',{},{page: page, count: 10}).then(function(data) {
                console.log(data);
                console.log(data.data);
                if (data.status.code === 200) {
                    $scope.countriesList = data.data;
                    $scope.totalItems = data.length;
                } else {
                    console.log("Error getting Countries")
                }
            },function() {
                console.log("Error querying API Countries")
            });
        };

        $scope.delete = function(id, index) {
            popup.confirm('Are you sure you want to delete this Country?').result.then(function(){
                API.delete('countries', {id: id}).then(function(data) {
                    $scope.countriesList.splice(index,1);
                });
            });
        };

        $scope.pageChanged = function() {
            getCountries($scope.currentPage.number);
        };

        getCountries($scope.currentPage.number);

}]);
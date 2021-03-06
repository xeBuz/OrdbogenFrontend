'use strict';

/**
 * @name login.userLogin
 * @description
 */
angular.module('login')
    .controller('userLogin', ['$scope', 'APIService', 'localStorageService', '$routeParams',
        function($scope, API, localStorageService, $routeParams)
        {

        $scope.user = [];
        $scope.username = null;

        var loginUser = function(user) {
            $scope.showSpinner = true;

            API.post('login', {email:user.email, password:user.password}, {}).then(function(data) {
                if (data.status.code === 200) {
                    API.setToken(data.data.access_key);
                    $scope.username = data.data.user.name;
                    $scope.alertOK = true;
                    $scope.alertError = false;
                } else {
                    console.log("Error with User Authentication");
                    $scope.alertError = true;
                    $scope.alertOK = false;
                }
            },function() {
                console.log("Error querying API User")
            });

            $scope.showSpinner = false;
        };

        $scope.submit = function() {
            loginUser($scope.user);
        }

        $scope.showSpinner = false;
        $scope.alertOK = false;
        $scope.alertError = false;
}]);
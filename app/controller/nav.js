/**
 * Created by xc on 2016/11/24.
 */
angular.module('myApp')
    .controller('navController', function ($scope) {
        $scope.sidebar = true;
        $scope.change = function () {
            $scope.sidebar = !$scope.sidebar;
        }
    })
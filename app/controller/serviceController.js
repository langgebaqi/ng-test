/**
 * Created by xc on 2016/11/3.
 */
angular.module('myApp')
    .controller('serviceController', function ($scope, $random) {
        $scope.createName = function () {
            $scope.username = $random.createName();
        }
    })
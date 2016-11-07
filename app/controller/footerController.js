/**
 * Created by xc on 2016/10/26.
 */
angular.module('myApp')
    .controller('footerController', function ($scope, $interval) {
        $interval(function () {
            $scope.curTime = new Date();
        }, 1000)
    })

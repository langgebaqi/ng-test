/**
 * Created by xc on 2016/10/26.
 */

angular.module('myApp')
    .controller('loginController', function ($scope, $state) {
        $scope.user = {
            name: 'xc',
            password: '1991'
        }
        $scope.login = function () {
            $state.go('/Index.table')
        }
    })

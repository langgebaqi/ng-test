/**
 * Created by xc on 2016/10/27.
 */
angular.module('myApp')
    .controller('formController', function ($scope) {
        $scope.user = {
            name: 'xuchang',
            age: 23,
            email: '986079819@qq.com'
        };
        $scope.submit = function () {
            console.log($scope.user.name);
        }
    });

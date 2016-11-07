/**
 * Created by xc on 2016/10/26.
 */


angular.module('myApp')
    .controller('tableController', function ($scope) {
        $scope.friends = [
            {name: 'xc', age: 23, job: 'lol', addr: 'no where', id: 2016001},
            {name: 'zhy', age: 23, job: 'lol', addr: 'no where', id: 2016002},
            {name: 'lq', age: 23, job: 'lol', addr: 'no where', id: 2016003},
            {name: 'dy', age: 23, job: 'lol', addr: 'no where', id: 2016005}
        ];
        $scope.deleteFriend = function (index) {
            console.log($scope.friends[index]);
        }
    })

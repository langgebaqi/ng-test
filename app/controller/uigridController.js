/**
 * Created by xc on 2016/11/1.
 */
angular.module('myApp')
    .controller('uigridController', ['$scope', function ($scope) {
        $scope.gridOptions = {
            data: 'myData',
            columnDefs: [
                {field: 'name', displayName: '姓名'},
                {field: 'age', displayName: '年龄'},
                {field: 'job', displayName: '工作'},
                {field: 'address', displayName: '住址'},
            ]
        };
        $scope.myData = [
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'},
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'},
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'},
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'},
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'},
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'},
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'},
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'},
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'},
            {name: 'xc', age: 11, job: 'java后台', address: 'homeless'}
        ]

    }]);

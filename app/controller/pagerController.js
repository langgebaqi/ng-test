/**
 * Created by xc on 2016/11/2.
 */
angular.module('myApp')
    .controller('pagerController', function ($scope) {
        $scope.gridOptions = {
            data: 'myData',
            columnDefs:[
                { field:'id',displayName:'学号' },
                {field:'name',displayName:'姓名'}
            ]
        };
        $scope.myData = [
            {id: '10086', name: 'xc'},
            {id: '10086', name: 'xc'},
            {id: '10086', name: 'xc'}
        ]
        $scope.totalItems = 175;
        $scope.currentPage = 1;
        $scope.perPage = 5;

        $scope.setPage = function () {
            $scope.currentPage = $scope.target;
        };

        $scope.pageChanged = function () {
            switch($scope.currentPage){
                case 1 : $scope.myData =[{id: '10086', name: 'xc'}];break;
                case 2 : $scope.myData =[{id: '10085', name: 'zhy'}];break;
                case 3 : $scope.myData =[{id: '10089', name: 'lq'}];break;
                case 4 : $scope.myData =[{id: '10089', name: 'iwe'}];break;
            }
        };

        $scope.maxsize = 6;

        $scope.num = 5;

    })

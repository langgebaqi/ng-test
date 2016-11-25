/**
 * Created by xc on 2016/11/24.
 */
angular.module("myApp")
    .controller("myGridController", function ($scope, $random) {
        $scope.up = false;
        function createData(n) {
            var array = [];
            while (n > 0) {
                n--;
                array.push({
                    id: $random.randomId(5),
                    name: $random.createName(),
                    age: $random.random(1, 100),
                    score: $random.random(1, 750),
                    address: $random.lastName()
                })
            }
            return array;
        }
        $scope.pager = {
            total: 200,
            currentPage: 1,
            perPage: 10,
            perPages: [10, 15, 20],
            pageSee:5
        }
        $scope.data = createData($scope.pager.total);
        $scope.show = function () {
            $scope.up = !$scope.up;
        }
        $scope.onchange = function (curr) {
            $scope.pager.currentPage = curr;
        }
        $scope.next = function () {
            $scope.pager.currentPage++;
        }
        $scope.pre = function () {
            $scope.pager.currentPage--;
        }
        $scope.$watch("pager.currentPage", function () {
            $scope.students = $scope.data.slice(($scope.pager.currentPage - 1) * $scope.pager.perPage, $scope.pager.currentPage * $scope.pager.perPage);
            $scope.pager.jumpPage = $scope.pager.currentPage;
            $scope.pager.pages = [];
            if ($scope.pager.currentPage >= $scope.pager.totalPage-$scope.pager.pageSee) {
                for (var i = $scope.pager.totalPage-$scope.pager.pageSee; i <= $scope.pager.totalPage; i++) {
                    $scope.pager.pages.push({index: i})
                }
            }
            else if ($scope.pager.currentPage > $scope.pager.pageSee) {
                for (var i = $scope.pager.currentPage - 2; i < $scope.pager.currentPage + 3; i++) {
                    $scope.pager.pages.push({index: i})
                }
            } else {
                for (var i = 1; i <= $scope.pager.pageSee; i++) {
                    $scope.pager.pages.push({index: i})
                }
            }
        })
        $scope.$watch("pager.perPage", function () {
            $scope.students = $scope.data.slice(($scope.pager.currentPage - 1) * $scope.pager.perPage, $scope.pager.currentPage * $scope.pager.perPage);
            $scope.pager.totalPage = Math.ceil($scope.pager.total / $scope.pager.perPage);
            $scope.pager.min=$scope.pager.pageSee;
            $scope.pager.max=$scope.pager.totalPage-$scope.pager.pageSee;
        })
        $scope.onJump = function () {
            if ($scope.pager.jumpPage <= $scope.pager.totalPage) {
                $scope.pager.currentPage = Math.ceil($scope.pager.jumpPage);
            }
        }
    })
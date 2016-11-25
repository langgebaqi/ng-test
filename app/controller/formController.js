/**
 * Created by xc on 2016/10/27.
 */
angular.module('myApp')
    .controller('formController', function ($scope) {
        $scope.user = {
        };
        $scope.submit = function () {
            if(!$scope.user.age){
                console.log("输入不合法")
            }
        }
        $scope.htmlcontent='<p>hello</p>'
    })
    .controller('imageController',function ($scope) {
        $scope.$watch('$scope.image',function () {
            console.log($scope.image)
        })
    })

/**
 * Created by xc on 2016/11/3.
 */
angular.module('myApp')
    .controller('dr_controller_1', function ($scope) {
        $scope.data = {
            totalItem: 100,
            everPage: 10,
            currentPage: 1,
            onChange: function () {
                console.log($scope.data.currentPage)
            }
        }
    })
    .controller('dr_controller_2', function ($scope) {

    })
    .controller('dr_controller_3', function ($scope) {
        $scope.menu = {
            menuList: [
                {title: '新闻频道', href: '#'},
                {title: '体育频道', href: '#'},
                {title: '读书频道', href: '#'},
                {title: '教育频道', href: '#'},
            ]
        }
    })
    .controller('dr_controller_4', function ($scope) {
        $scope.table = {
            data:[
                {'姓名':'徐畅',age:'15'},
                {'姓名':'速度',age:'25'},
                {'姓名':'三维',age:'35'},
                {'姓名':'拉法基',age:'121'}
            ]
        }
    })
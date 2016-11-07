/**
 * Created by xc on 2016/11/2.
 */
angular.module('myApp')
    .controller('chartController', function ($scope, $random) {
        /*line bar rader */
        $scope.labels = ["一月", "二月", "三月", "四月", "五月", "六月", "七月"];
        $scope.series = ['武汉', '荆州', '兰州'];
        $scope.data = [
            [65, 59, 80, 81, 56, 55, 40],
            [28, 48, 40, 19, 86, 27, 110],
            [11, 23, 43, 12, 54, 78, 45]
        ];
        $scope.onClick = function (points, evt) {
            console.log(points, evt);
        };
        $scope.datasetOverride = [{yAxisID: 'y-axis-1'}];
        $scope.options = {
            scales: {
                yAxes: [
                    {
                        id: 'y-axis-1',
                        type: 'linear',
                        display: true,
                        position: 'right'
                    },
                    {
                        id: 'y-axis-2',
                        type: 'linear',
                        display: true,
                        position: 'left'
                    }
                ]
            }
        };
        /* doughnut */
        $scope.doughnut_data = [5000, 1000, 1600];
        $scope.doughnut_labels = ['武汉', '荆州', '随州'];
        /* pie*/
        $scope.pie_data = $random.intArray(3, 10)
        $scope.pie_labels = $random.nameArray(3)
    })

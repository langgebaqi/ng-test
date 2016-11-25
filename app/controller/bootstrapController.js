/**
 * Created by xc on 2016/11/2.
 */

angular.module('myApp')
    .controller('accordionController', function ($scope) {
        $scope.oneAtATime = true;
    })
    .controller('dialogController',function ($scope,ngDialog) {
        $scope.formDialog = function () {
            ngDialog.open({
                templateUrl:'view/form.html',
                overlay:false,
                closeByDocument:false,
                className:''
            })
        }
    })
    .controller('collapseController',function ($scope) {
        $scope.isshow=false;
    })
    .controller('dateparserController',function ($scope) {
        $scope.date=new Date();
    })
    .controller('datepickerController',function ($scope) {
        $scope.dt=new Date();
        $scope.options={
            customClass : function (data) {
                
            }
        }
    })
    .controller('carouselController',function ($scope) {
        $scope.interval = 1000;
        $scope.active=1;
        $scope.slides = [
            {id:'0',imgsrc:'components/img/11.jpg',text:'风景1'},
            {id:'1',imgsrc:'components/img/12.jpg',text:'风景2'},
            {id:'2',imgsrc:'components/img/13.jpg',text:'风景3'},
            {id:'3',imgsrc:'components/img/14.jpg',text:'风景4'}
        ];
        $scope.noWrapSlides=false;
    })

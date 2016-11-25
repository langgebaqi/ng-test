/**
 * Created by xc on 2016/11/1.
 */

angular.module('myApp')
    .controller('headController', function ($scope, ngDialog) {
        $scope.loginDialog = function () {
            ngDialog.open({
                template: 'view/user/login.html',
                closeByNavigation: true,
                overlay: false,
                showClose: false,
                className:"ngdialog-custom"
            });
        };
        $scope.registerDialog = function () {
            ngDialog.open({
                template: 'view/user/register.html',
                disableAnimation: false,
                overlay:false,
                closeByEscape: true,
                closeByNavigation: true,
                name: 'myDialog',
                className:'ngdialog-custom'
            })
        }
    });

/**
 * Created by xc on 2016/11/1.
 */

angular.module('myApp')
    .controller('headController', function ($scope, ngDialog) {
        $scope.loginDialog = function () {
            ngDialog.open({
                template: 'view/user/login.html',
                closeByNavigation: true,
                appendTo: '.main',
                width: "100%",
                height: 400,
                overlay: false,
                showClose: false
            });
        };
        $scope.registerDialog = function () {
            ngDialog.open({
                template: 'view/user/register.html',
                disableAnimation: false,
                overlay: false,
                closeByEscape: true,
                closeByNavigation: true,
                closeByDocument: true,
                appendTo: '#main',
                cache: true,
                name: 'myDialog',
                preCloseCallback: function () {
                    console.log('myDialog')
                }
            })
        }
    });

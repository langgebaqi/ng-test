/*
 angularJs ui-router
 */
var app = angular.module('myApp', ['ui.router', 'ui.grid', 'ngDialog', 'chart.js', 'ui.bootstrap','ngMessages'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider
            .otherwise("/Index");
        $stateProvider
            .state('/Index', {
                url: '/Index',
                templateUrl: 'index.html',
                views: {
                    'header': {
                        templateUrl: 'view/home/header.html'
                    },
                    'footer': {
                        templateUrl: 'view/home/footer.html',
                        controller: 'footerController'
                    },
                    'nav': {
                        templateUrl: 'view/home/nav.html'
                    },
                    'center': {
                        templateUrl: 'view/home/center.html'
                    }
                }
            })
            .state('/Index.table', {
                url: '/table',
                templateUrl: 'view/table.html'
            })
            .state('/Index.form', {
                url: '/form',
                templateUrl: 'view/form.html',
                controller: 'formController'
            })
            .state('/Index.login', {
                url: '/login',
                templateUrl: 'view/user/login.html',
                controller: 'loginController'
            })
            .state('/Index.forget', {
                url: '/forget',
                templateUrl: 'view/forget.html',
                controller: 'forgetController'
            })
            .state('/Index.grid', {
                url: '/grid',
                templateUrl: 'view/grid.html',
                controller: 'uigridController'
            })
            .state('/Index.chart', {
                url: '/chart',
                templateUrl: 'view/chart.html',
                controller: 'chartController'
            })
            .state('/Index.pager', {
                url: '/pager',
                templateUrl: 'view/pager.html',
                controller: 'pagerController'
            })
            .state('/Index.bootstrap', {
                url: '/bootstrap',
                templateUrl: 'view/bootstrap.html',
            })
            .state('/Index.service',{
                url:'/service',
                templateUrl:'view/randomservice.html',
                controller:'serviceController'
            })
            .state('/Index.myDirective',{
                url:'/myDirective',
                templateUrl:'view/myDirective.html'
            })
    });
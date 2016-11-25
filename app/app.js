/*
 angularJs ui-router
 */
var app = angular.module('myApp', ['ngTouch', 'ui.router', 'smart-table', 'ngDialog', 'chart.js', 'ui.bootstrap', 'ngMessages', 'textAngular'])
    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
        $urlRouterProvider
            .otherwise("/Index/home");
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
            .state('/Index.home', {
                url: '/home',
                templateUrl: 'view/home/home.html'
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
                templateUrl: 'view/grid.html'
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
                templateUrl: 'view/bootstrap.html'
            })
            .state('/Index.service', {
                url: '/service',
                templateUrl: 'view/randomservice.html',
                controller: 'serviceController'
            })
            .state('/Index.myDirective', {
                url: '/myDirective',
                templateUrl: 'view/myDirective.html'
            })
            .state("/Index.modal", {
                url: '/modal',
                templateUrl: 'view/modal.html'
            })
            .state("/Index.myGrid",{
                url:'/myGrid',
                templateUrl:'view/mygrid.html'
            })
    })
    .config(function ($provide) {
        $provide.decorator('taOptions', ['$delegate', function (taOptions) {
            // $delegate is the taOptions we are decorating
            // here we override the default toolbars and classes specified in taOptions.
            taOptions.forceTextAngularSanitize = true; // set false to allow the textAngular-sanitize provider to be replaced
            taOptions.keyMappings = [
                {
                    commandKey: '98', testForkey: function (event) {
                    if (event.keyCode = 98 && event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) return true;
                }
                }
            ]; // allow customizable keyMappings for specialized key boards or languages
            taOptions.toolbar = [
                ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'pre', 'quote'],
                ['bold', 'italics', 'underline', 'ul', 'ol', 'redo', 'undo', 'clear'],
                ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
                ['html', 'insertImage', 'insertLink', 'wordcount', 'charcount']
            ];
            taOptions.classes = {
                focussed: 'focussed',
                toolbar: 'btn-toolbar',
                toolbarGroup: 'btn-group',
                toolbarButton: 'btn btn-default',
                toolbarButtonActive: 'active',
                disabled: 'disabled',
                textEditor: 'form-control',
                htmlEditor: 'form-control'
            };
            return taOptions; // whatever you return will be the taOptions
        }]);
        // this demonstrates changing the classes of the icons for the tools for font-awesome v3.x
        $provide.decorator('taTools', ['$delegate', function (taTools) {
            return taTools;
        }]);
    })
/*
 angularJs ui-router
 */
var app = angular.module('myApp', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .when("/PageTable", "/PageTable")
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
                        controller: 'clockController'
                    },
                    'body': {
                        templateUrl: 'view/home/body.html'
                    },
                    'nav': {
                        templateUrl: 'view/PageTable.html'
                    }
                }
            })
            .state("/PageTable", {
                url: '/PageTable',
                templateUrl: 'view/pageTable.html'
            })
            .state("/PageTable.home", {
                url: '/Home',
                templateUrl: 'view/home.html'
            })
            .state("/PageTable.user", {
                url: '/User',
                templateUrl: 'view/user.html'
            })
            .state("/PageTable.user.register", {
                url: '/Register',
                templateUrl: 'view/user/register.html',
                controller: 'registerController'
            })
            .state("/PageTable.user.login", {
                url: '/Login',
                templateUrl: 'view/user/login.html',
                controller: 'loginController'
            })
            .state("/PageTable.user.forget", {
                url: '/Forget',
                templateUrl: 'view/user/forget.html',
                controller: 'forgetController'
            })
            .state("/PageTable.book", {
                url: '/Book',
                templateUrl: 'view/book.html'
            })
            .state("/PageTable.detail", {
                url: '/Detail/:id',
                templateUrl: 'view/book/detail.html'
            })
    })
    .controller('registerController', function ($scope) {
        $scope.submit = function () {
            console.log($scope.user);
        }
    })
    .controller('loginController', function ($scope, $http) {
        $scope.submit = function () {
            $http({
                //参数
            }).success(function () {

            }).error(function () {

            })
        }
    })
    .controller('forgetController', function ($scope) {
        $scope.submit = function () {

        }
    })
    .controller('bookController', function ($scope, $state) {
        $scope.getbooks = function (n) {
            if (n) {
                return [
                    {id: 10086, name: '时间简史', quantity: 12, last: 2},
                    {id: 10095, name: '斗破苍穹', quantity: 9, last: 4},
                    {id: 10084, name: '天龙八部', quantity: 6, last: 3},
                    {id: 10078, name: '少年维特的烦恼', quantity: 20, last: 3}
                ];
            } else {
                return null;
            }
        };
        $scope.books = $scope.getbooks(1);
    })
    .controller('detailController', function ($scope, $stateParams) {
        $scope.books = [
            {id: 10086, detail: "《时间简史》是1988年湖南科学技术出版社出版的图书，作者是斯蒂芬·霍金。该书是一部物理通俗化的科普范本，讲述了狭义相对论以及时间、宇宙的起源等宇宙学。"},
            {
                id: 10095,
                detail: "《斗破苍穹》是一部发表在起点中文网的玄幻小说，作者是起点白金作家天蚕土豆。[1]  《斗破苍穹》起点网总点击超1.3亿，被认为是天蚕土豆的巅峰之作，也因此奠定了其在网络原创界难以动摇的顶级作家地位。小说讲述了天才少年萧炎在创造了家族空前绝后的修炼纪录后突然成了废人，种种打击接踵而至。就在他即将绝望的时候，一缕灵魂从他手上的戒指里浮现，一扇全新的大门在面前开启，经过艰苦修炼最终成就辉煌的故事。"
            },
            {id: 10084, detail: "《天龙八部》是著名作家金庸的武侠代表作。著于1963年，历时4年创作完成（部分内容曾由倪匡代笔撰写），前后共有三版，并在2005年第三版中经历6稿修订，结局改动较大。"},
            {id: 10078, detail: "省略一亿字..."},
        ];
        $scope.myFilter = function (b) {
            return b.id == $stateParams.id;
        }
    })
    .controller('clockController', function ($scope,$interval) {
        $interval(function () {
            $scope.curTime=new Date();
        },500)
    })
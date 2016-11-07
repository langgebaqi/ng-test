/**
 * Created by xc on 2016/11/3.
 */
angular.module('myApp')
    .directive('myPagination', function () {
        return {
            restrict: 'EAC',
            templateUrl:'pagination.html',
            replace: true,
            scope: {
                pageOptions: '='
            },
            link:function (scope,elemet,attrs) {
                var opt=scope.pageOptions;
                /* 三个参数 */
                opt.currentPage=!opt.currentPage? opt.currentPage:1;
                opt.totalItem;
                opt.everPage = 10; //默认每页十条数据
                opt.totalPage=opt.totalItem/opt.everPage;
                opt.index = opt.currentPage*(opt.everPage-1);

                scope.getPageList = function () {
                    var pageList = [];
                    for(var i=0;i<opt.totalPage;i++){
                        pageList.push(i+1);
                    }
                    return pageList;
                };
                scope.prePage = function () {
                    opt.currentPage=opt.currentPage>1?--opt.currentPage:1;
                    opt.onChange();
                };
                scope.nextPage=function () {
                    opt.currentPage=opt.currentPage<opt.totalPage?++opt.currentPage:opt.totalPage;
                    opt.onChange();
                };
                scope.setPage = function (curr) {
                    opt.currentPage = curr;
                    opt.onChange();
                };
                scope.$watch('opt.totalItem',function (val,old) {
                    opt.pageList= scope.getPageList();
                })
            }
        }
    })
    .directive('myAccordion',function () {
        return {
            restrict:'EAC',
            templateUrl:'accordion.html',
            replace:true,
            scope:{

            },
            link:function () {
                
            }
        }
    })
    .directive('myMenu',function () {
        return {
            restrict:'EAC',
            templateUrl:'menu.html',
            replace:true,
            transclude:true,
            scope:{
                menuOptions:'=',
            },
            link:function (scope) {
                scope.menuOptions.showChild = false;
                scope.show=function () {
                    scope.menuOptions.showChild = !scope.menuOptions.showChild;
                }
            }
        }
    })
    .directive('myTable',function () {
        return {
            restrict:'EAC',
            templateUrl:'table.html',
            replace:true,
            scope:{
                tableOptions:'='
            },
            link : function (scope,ele,attr) {
                scope.getKeyList = function (data) {
                    var result=[]
                    for(a in data){
                        var arry= [];
                        for(key in data[a]){
                            arry.push(key)
                        }
                        if(arry.length>result.length) result = arry;
                    }
                    return result;
                };
                scope.tableOptions.keyList = scope.getKeyList(scope.tableOptions.data);
                scope.$watch('scope.tableOptions.data',function (val,old) {
                    console.log(scope.tableOptions.data);
                })
            }
        }
    })


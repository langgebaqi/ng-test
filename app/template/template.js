/**
 * Created by xc on 2016/11/4.
 */
angular.module('myApp')
    .run(function ($templateCache) {
        $templateCache.put('accordion.html', '<div class="panel-default"><h3>test templateCache</h3></div>');
        $templateCache.put('pagination.html',
            '<div class="page-list">' +
            '<ul class="pagination">' +
            '<li class="pagination-sm" ng-class="{disabled:pageOptions.currentPage==1}" ng-click="prePage()"><span>pre</span></li>' +
            '<li ng-repeat="item in pageOptions.pageList track by $index" class="pagination-sm" ng-click="setPage(item)" ng-class="{active:item==pageOptions.currentPage}"><span>{{item}}</span></li>' +
            '<li class="pagination-sm" ng-click="nextPage()" ng-class="{disabled:pageOptions.currentPage==pageOptions.totalPage}"><span>next</span></li>' +
            '</ul>' +
            '<div class="clearfix"></div>' +
            '</div>');
        $templateCache.put('menu.html',
            '<ul ng-click="show()" class="nav nav-pills nav-stacked">' +
            '<li>navigation</li>' +
            '<li ng-repeat="item in menuOptions.menuList"><a ui-sref="{{item.href}}">{{item.title}}</a></li>' +
            '</ul>');
        $templateCache.put('table.html', '<table>' +
            '<tr><td ng-repeat="key in tableOptions.keyList">{{key}}</td></tr>' +
            '<tr ng-repeat="item in tableOptions.data">' +
            '<td ng-repeat="a in item">{{a}}</td>' +
            '</tr>' +
            '</table>')
    })
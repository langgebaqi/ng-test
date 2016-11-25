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
        $templateCache.put('table.html', '<table class="table table-striped table-hover table-bordered table-condensed">' +
            '<tr><td ng-repeat="title in tableOptions.titleList track by $index" ng-click="show($index)">{{title.name}}<span class="glyphicon glyphicon-chevron-{{title.direction}}"></span></td></tr>' +
            '<tr ng-repeat="item in tableOptions.data | orderBy: tableOptions.filter : tableOptions.desc">' +
            '<td ng-repeat="a in item">{{a}}</td>' +
            '</tr>' +
            '</table>')
        $templateCache.put('normalMessage',
            '<span ng-message="required">不能为空</span> ' +
            '<span ng-message="pattern">不合法</span>'+
            '<span ng-message="minlength">小于最小长度</span> ' +
            '<span ng-message="maxlength">超过最大长度</span> '
        );
        $templateCache.put('iconMessage',
            '<i class="glyphicon glyphicon-ok" ng-message="$valid"></i> ' +
            '<i class="glyphicon glyphicon-warning-sign" ng-message="$invalid"></i>'
        );
        $templateCache.put('pagination.custom.html','<nav ng-if="pages.length >= 2"> ' +
            '<ul class="pagination"> ' +
            '<li><a ng-click="selectPage(1)">First</a> ' +
            '</li><li><a ng-click="selectPage(currentPage - 1)">&lt;</a> </li>' +
            '<li><a><page-select></page-select> of {{numPages}}</a> </li>' +
            '<li><a ng-click="selectPage(currentPage + 1)">&gt;</a> </li>' +
            '<li><a ng-click="selectPage(numPages)">Last</a></li> </ul> ' +
            '</nav>')
    })
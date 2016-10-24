angularJs实战 代码清单

1-1
<body ng-app>
{{"hello,欢迎来到angularJs世界"}}
</body>

1-2
<!doctype html>
<html lang="zh-cn" ng-app>
<head>
<title></title>
<script src=".."></script>
</head>
<body>
<h3>计算并显示下列两个数值之和</h3>
1.98+2.98={{1.98+2.98 | number:0 }}
</body>
</html>

1-3
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<h3>请在下列文本框中输入任意内容</h3>
<div ng-controller="userController">
    <input id="Text1" type="text" ng-model="user.name" />
    <div>{{user.name}}</div>
</div>
<script>
    var login=angular.module("login",[]);
    login.controller("userController",function ($scope) {
        $scope.user={name:''}
    })
</script>
</body>
</html>

1-4
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<h3>ng-repeat测试</h3>
<div ng-controller="userController">
    <ul>
        <li ng-repeat="stu in data">
            {{stu.name}}
            {{stu.sex}}
            {{stu.age}}
            {{stu.scope}}
        </li>
    </ul>
</div>
<script>
    var login=angular.module("login",[]);
    login.controller("userController",function ($scope) {
        $scope.data=[{
            name:'张明敏',sex:'女',age:20,scope:95
        },{
            name:'李情思',sex:'女',age:23,scope:92
        },{
            name:'刘晓华',sex:'男',age:21,scope:90
        },{
            name:'陈钟明',sex:'男',age:22,scope:87
        }]
    })
</script>
</body>
</html>

2-1
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<h3>click事件，自增，执行算式</h3>
<div ng-controller="userController">
    <input type="text" ng-model="expr1" />
    <button ng-click="testExpr(expr1)" type="button">计算</button><br>
    <input type="text" ng-model="expr2" />
    <span ng-bind="$eval(expr2)"></span>
</div>
<script>
    var login=angular.module("login",[]);
    login.controller("userController",function ($scope) {
        $scope.expr1=20;
        $scope.expr2='20+2.2|number:0';
        $scope.testExpr=function (expr) {
            expr=parseInt(expr)+1;
            $scope.expr1=expr;
        }
    })
</script>
</body>
</html>

2-2
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<h3>ng-click</h3>
<div ng-controller="userController">
    <input type="text" ng-model="test" />
    <button ng-click="show()">弹出</button>
</div>
<script>
    var login=angular.module("login",[]);
    login.controller("userController",function ($scope) {
        $scope.test="";
        $scope.show=function () {
            window.alert($scope.test);
        }
    })
</script>
</body>
</html>

2-3
//报错,tmp未定义 $scope.tmp $scope是ng初始化的内部作用域
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<div ng-controller="userController">
    <h1>{{tmp}}</h1>
    <button ng-click="error()">点击</button>
</div>
<script>
    var login=angular.module("login",[]);
    login.controller("userController",function ($scope) {
        $scope.temp='angularJS';
        $scope.error=function () {
            console.log(tmp)
        }
    })
</script>
</body>
</html>

2-4
<!DOCTYPE html>
<html lang="zh-cn" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<div ng-controller="userController">
    <h1>{{hello}}</h1>
</div>
<script>
    var login=angular.module("login",[]);
    login.controller("userController",['$scope',function ($scope) {
        $scope.hello="hello angulerJS!"
    }])
</script>
</body>
</html>

2-5
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<div ng-controller="userController">
    <h1>{{show()}}</h1>
</div>
<script>
    var login=angular.module("login",[]);
    login.controller("userController",['$scope',function ($scope) {
        $scope.hello="hello angularJS!"
        $scope.show=function () {
            $scope.hello="欢迎使用angularJs!";
            return $scope.hello;
        }
    }])
</script>
</body>
</html>

2-6
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<div ng-controller="userController">
    <h1>{{hello}}</h1>
    <button ng-click="show()">点击</button>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.hello = "hello angularJS!";
        $scope.show = function () {
            if (Math.random() * 2 >= 1) {
                $scope.hello = "hello angularJS!";
            } else {
                $scope.hello = "欢迎使用angularJs!";
            }
            return $scope.hello;
        }
    }])
</script>
</body>
</html>

2-7
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<div ng-controller="userController">
    <h1>{{hello}}</h1>
    <button ng-click="show()">点击</button>
    <button ng-click="show1('带参数的')">带参数的</button>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.hello = "hello angularJS!";
        $scope.show = function () {
                $scope.hello = "欢迎使用angularJs!";
            return $scope.hello;
        }
        $scope.show1=function () {
            $scope.hello=arguments[0];
        }
    }])
</script>
</body>
</html>

2-8
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<div ng-controller="userController">
    <div ng-controller="childController">
        <h1>{{hello}}</h1>
        <h1>{{child_hell0}}</h1>
        <button ng-click="show()">点击</button>
    </div>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.hello = "hello angularJS!";
        $scope.show=function () {
            $scope.hello="点击之后";
        }
    }]);
    login.controller('childController',['$scope',function ($scope) {
        $scope.child_hell0="欢迎使用!";
    }]);
</script>
</body>
</html>

2-9
//id 在引用时需要单引号 是字符串参数
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<script type="text/ng-template" id="tpl">
    <h1>{{tao.name}}</h1>
    <h1>{{tao.email}}</h1>
</script>
<div ng-include="'tpl'" ng-controller="userController"></div>
<div ng-include src="'tpl'" ng-controller="xcController"></div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.tao = {
            name: '陶国荣',
            email: 'taoguorong@163.com'
        };
    }]);
    login.controller('xcController',['$scope',function ($scope) {
        $scope.tao={
            name:'徐畅',
            email:'986079819@qq.com'
        }
    }])
</script>
</body>
</html>

2-10
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="userController">
    <ul>
        <li>
            <span>序号</span>
            <span>姓名</span>
            <span>性别</span>
            <span>是否首条</span>
            <span>是否尾条</span>
        </li>
        <li ng-repeat="stu in data">
            <span>{{$index+1}}</span>
            <span>{{stu.name}}</span>
            <span>{{stu.sex}}</span>
            <span>{{$first?'是':'否' }}</span>
            <span>{{ $last? '是':'否' }}</span>
        </li>
    </ul>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.data=[{
            name:'张明敏',sex:'女',age:20,scope:95
        },{
            name:'李情思',sex:'女',age:23,scope:92
        },{
            name:'刘晓华',sex:'男',age:21,scope:90
        },{
            name:'陈钟明',sex:'男',age:22,scope:87
        }]
    }]);
</script>
</body>
</html>

2-11
body{ font-size:14px }
ul { list-style-type:none; width:800px; margin: 0 0 0 0; padding:0}
ul li { float: left; padding: 0;}
ul li span { width:100px; float:left; padding: 0 10px;}
ul .odd{ color:#0026ff }
ul .even{ color:#ff0000; }
ul .bold { font-weight:bold}
ul .focus { background-color: #ccc;}
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="userController">
    <ul>
        <li ng-class="{{bold}}">
            <span>序号</span>
            <span>姓名</span>
            <span>性别</span>
            <span>是否首条</span>
            <span>是否尾条</span>
        </li>
        <li ng-repeat="stu in data"
            ng-class-odd="'odd'"
            ng-class-even="'even'"
            ng-class="{focus:$index==focus}"
            ng-click="click($index)">
            <span>{{$index+1}}</span>
            <span>{{stu.name}}</span>
            <span>{{stu.sex}}</span>
            <span>{{$first?'是':'否' }}</span>
            <span>{{ $last? '是':'否' }}</span>
        </li>
    </ul>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.data=[{
            name:'张明敏',sex:'女',age:20,scope:95
        },{
            name:'李情思',sex:'女',age:23,scope:92
        },{
            name:'刘晓华',sex:'男',age:21,scope:90
        },{
            name:'陈钟明',sex:'男',age:22,scope:87
        }];
        $scope.bold="bold";
        $scope.click=function (i) {
            $scope.focus=i;
        }
    }]);
</script>
</body>
</html>

2-12
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="userController">
    <div ng-show="{{isShow}">show</div>
    <div ng-hide="{{ishide}}">hide</div>
    <ul ng-switch on="switch">
        <li ng-switch-when="1">switch1</li>
        <li ng-switch-when="2">switch2</li>
        <li ng-switch-default>更多...</li>
    </ul>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.isShow=true;
        $scope.ishide=false;
        $scope.switch=3;
    }]);
</script>
</body>
</html>

2-13
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<form name="temp_form" ng-submit="save()" ng-controller="userController">
    <div>
        <label for="input1">姓名</label>
        <input id="input1" type="text" name="name" ng-model="name" required/>
        <span ng-show="temp_form.name.$error.required">姓名不能为空</span>
    </div>
    <div>
        <label for="input2">邮箱:</label>
        <input id="input2" type="email" name="email" ng-model="email" required/>
        <span ng-show="temp_form.email.$error.required">邮箱不能为空</span>
        <span ng-show="temp_form.email.$error.email">邮箱格式不对</span>
    </div>
    <div>
        <input type="submit" ng-disabled="temp_form.$invalid"/>
    </div>
</form>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.name = "xuchang";
        $scope.email = "986079819@qq.com";
        $scope.save = function () {
            console.log("提交..."+$scope.name+$scope.email);
        }
    }]);
</script>
</body>
</html>

2-14
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<form name="temp_form" ng-submit="save()" ng-controller="userController">
    <div>
        <label for="input1">是否同意:</label>
        <input id="input1" type="checkbox" ng-model="a" />同意
    </div>
    <div>
        <label for="input2">性别:</label>
        <input id="input2" name="sex" type="radio" ng-model="b" value="男"/>男
        <input name="sex" type="radio" ng-model="b" value="女"/>女
    </div>
    <div>
        <input type="submit"/>
    </div>
    <div>{{c}}</div>
</form>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.a = "同意";
        $scope.b = "男";
        $scope.save=function () {
            $scope.c="你选择的是：1."+$scope.a+"2."+$scope.b;
        }
    }]);
</script>
</body>
</html>

2-15
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
</head>
<body>
<div ng-controller="userController">
    <label>下拉列表</label>
    <select ng-model="a" ng-options="txt.id as txt.name group by txt.key for txt in data">
        <option value="">--请选择--</option>
    </select>
    {{a}}
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.data=[
            {id:1,name:'篮球',key:'大球'},
            {id:2,name:'足球',key:'大球'},
            {id:3,name:'兵乓球',key:'小球'},
            {id:4,name:'羽毛球',key:'小球'}
        ];
    }]);
</script>
</body>
</html>

3-1
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="userController">
    <ul>
        <li ng-class="{{bold}}">
            <span>序号</span>
            <span>姓名</span>
            <span>性别</span>
            <span>分数</span>
            <span>是否首条</span>
            <span>是否尾条</span>
        </li>
        <li ng-repeat="stu in data | orderBy:'-score'| limitTo:3"
            ng-class-odd="'odd'"
            ng-class-even="'even'"
            ng-class="{focus:$index==focus}"
            ng-click="click($index)">
            <span>{{$index+1}}</span>
            <span>{{stu.name}}</span>
            <span>{{stu.sex}}</span>
            <span>{{stu.score}}</span>
            <span>{{$first?'是':'否' }}</span>
            <span>{{ $last? '是':'否' }}</span>
        </li>
    </ul>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.data=[{
            name:'张明敏',sex:'女',age:20,score:95
        },{
            name:'李情思',sex:'女',age:23,score:92
        },{
            name:'刘晓华',sex:'男',age:21,score:90
        },{
            name:'陈钟明',sex:'男',age:22,score:87
        }];
        $scope.bold="bold";
        $scope.click=function (i) {
            $scope.focus=i;
        }
    }]);
</script>
</body>
</html>

3-2
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="userController">
    <ul>
        <li ng-class="{{bold}}">
            <span>序号</span>
            <span>姓名</span>
            <span>性别</span>
            <span>分数</span>
            <span>是否首条</span>
            <span>是否尾条</span>
        </li>
        <li ng-repeat="stu in data | filter:findscore"
            ng-class-odd="'odd'"
            ng-class-even="'even'"
            ng-class="{focus:$index==focus}"
            ng-click="click($index)">
            <span>{{$index+1}}</span>
            <span>{{stu.name}}</span>
            <span>{{stu.sex}}</span>
            <span>{{stu.score}}</span>
            <span>{{$first?'是':'否' }}</span>
            <span>{{ $last? '是':'否' }}</span>
        </li>
    </ul>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.data=[{
            name:'张明敏',sex:'女',age:20,score:95
        },{
            name:'李情思',sex:'女',age:23,score:92
        },{
            name:'刘晓华',sex:'男',age:21,score:90
        },{
            name:'陈钟明',sex:'男',age:22,score:87
        }];
        $scope.bold="bold";
        $scope.click=function (i) {
            $scope.focus=i;
        }
        $scope.findscore=function(a){
            return a.score<95 && a.score>85
        }
    }]);
</script>
</body>
</html>

3-3
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="userController">
    <ul>
        <li ng-class="{{bold}}">
            <span>序号</span>
            <span>姓名</span>
            <span>性别</span>
            <span>分数</span>
            <span>是否首条</span>
            <span>是否尾条</span>
        </li>
        <li ng-repeat="stu in data | young:0"
            ng-class-odd="'odd'"
            ng-class-even="'even'"
            ng-class="{focus:$index==focus}"
            ng-click="click($index)">
            <span>{{$index+1}}</span>
            <span>{{stu.name}}</span>
            <span>{{stu.sex}}</span>
            <span>{{stu.score}}</span>
            <span>{{$first?'是':'否' }}</span>
            <span>{{ $last? '是':'否' }}</span>
        </li>
    </ul>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.data=[{
            name:'张明敏',sex:'女',age:20,score:95
        },{
            name:'李情思',sex:'女',age:23,score:92
        },{
            name:'刘晓华',sex:'男',age:21,score:90
        },{
            name:'陈钟明',sex:'男',age:22,score:87
        }];
        $scope.bold="bold";
        $scope.click=function (i) {
            $scope.focus=i;
        }
        $scope.findscore=function(a){
            return a.score<95 && a.score>85
        }
    }]);
    login.filter('young',function () {
        return function (e,type) {
            var _out=[];
            var _sex=type?"男":"女";
            for(var i=0;i<e.length;i++){
                if(e[i].age>20 && e[i].age<28 && e[i].sex==_sex){
                    _out.push(e[i]);
                }
            }
            return _out;
        }
    })
</script>
</body>
</html>

3-4
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="userController">
    <ul>
        <li ng-class="{{bold}}">
            <span ng-click="title='id';desc=!desc">序号</span>
            <span ng-click="title='name';desc=!desc">姓名</span>
            <span ng-click="title='sex';desc=!desc">性别</span>
            <span ng-click="title='score';desc=!desc">分数</span>
            <span>是否首条</span>
            <span>是否尾条</span>
        </li>
        <li ng-repeat="stu in data | orderBy:title:desc"
            ng-class-odd="'odd'"
            ng-class-even="'even'"
            ng-class="{focus:$index==focus}"
            ng-click="click($index)">
            <span>{{$index+1}}</span>
            <span>{{stu.name}}</span>
            <span>{{stu.sex}}</span>
            <span>{{stu.score}}</span>
            <span>{{$first?'是':'否' }}</span>
            <span>{{ $last? '是':'否' }}</span>
        </li>
    </ul>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.data=[{
            name:'张明敏',sex:'女',age:20,score:95
        },{
            name:'李情思',sex:'女',age:23,score:92
        },{
            name:'刘晓华',sex:'男',age:21,score:90
        },{
            name:'陈钟明',sex:'男',age:22,score:87
        }];
        $scope.bold="bold";
        $scope.click=function (i) {
            $scope.focus=i;
        };
        $scope.title="name";
        $scope.desc=false;
    }]);
</script>
</body>
</html>

3-5
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="userController">
    <div>
        <label>搜索:</label>
        <input ng-model="key" type="text" placeholder="请输入关键字" />
    </div>
    <ul>
        <li ng-class="{{bold}}">
            <span ng-click="title='id';desc=!desc">序号</span>
            <span ng-click="title='name';desc=!desc">姓名</span>
            <span ng-click="title='sex';desc=!desc">性别</span>
            <span ng-click="title='score';desc=!desc">分数</span>
            <span>是否首条</span>
            <span>是否尾条</span>
        </li>
        <li ng-repeat="stu in data | filter:{name:key}"
            ng-class-odd="'odd'"
            ng-class-even="'even'"
            ng-class="{focus:$index==focus}"
            ng-click="click($index)">
            <span>{{$index+1}}</span>
            <span>{{stu.name}}</span>
            <span>{{stu.sex}}</span>
            <span>{{stu.score}}</span>
            <span>{{$first?'是':'否' }}</span>
            <span>{{ $last? '是':'否' }}</span>
        </li>
    </ul>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.data=[{
            name:'张明敏',sex:'女',age:20,score:95
        },{
            name:'李情思',sex:'女',age:23,score:92
        },{
            name:'刘晓华',sex:'男',age:21,score:90
        },{
            name:'陈钟明',sex:'男',age:22,score:87
        }];
        $scope.bold="bold";
        $scope.click=function (i) {
            $scope.focus=i;
        };
    }]);
</script>
</body>
</html>

3-6
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="userController">
    <input type="text" ng-model="name" />
    <span ng-bind="count"></span>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("userController", ['$scope', function ($scope) {
        $scope.count=0;
        $scope.$watch('name',function () {
            $scope.count++;
        })
    }]);
</script>
</body>
</html>

3-8
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet" />
</head>
<body>
<div ng-controller="TaController">
    <div ng-controller="TbController">
        <ul>
            <li>{{school.a}}</li>
            <li>
                <span>序号</span>
                <span>姓名</span>
                <span>性别</span>
                <span>语文</span>
                <span>数学</span>
            </li>
            <li ng-repeat="stu in data">
                <span>{{stu.id}}</span>
                <span>{{stu.name}}</span>
                <span>{{stu.sex}}</span>
                <span>{{stu.yuwen}}</span>
                <span>{{stu.shuxue}}</span>
            </li>
        </ul>
    </div>
    <div ng-controller="TcController">

    </div>
</div>
<script>
    var login = angular.module("login", []);
    login.controller("TaController", ['$scope', function ($scope) {
        $scope.school={
            a:"关山小学",
            b:'北山小学'
        }
    }]);
    login.controller("TbController",function($scope){
        $scope.data=[
            {id:1,name:'阿炳',sex:'男',yuwen:52,shuxue:68},
            {id:2,name:'菜单',sex:'女',yuwen:88,shuxue:89},
            {id:3,name:'俄方',sex:'女',yuwen:99,shuxue:75},
        ]
    });
    login.controller('TcController',function ($scope) {
        $scope.data=[
            {}
        ]
    })
</script>
</body>
</html>

3-9
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="p">
    <div ng-controller="p_p">
        <button ng-click="to_parent()">向父级传播</button>
        <button ng-click="to_child()">向子级传播</button>
        <div ng-controller="p_p_p"></div>
    </div>
    <div ng-controller="p_p2"></div>
</div>
<script>
    var login = angular.module("login", []);
    login.controller('p', function ($scope) {
        $scope.$on('event_1', function (event, data) {
            console.log('在p监听到事件', data);
        });
    });
    login.controller('p_p', function ($scope) {
        $scope.to_parent = function () {
            $scope.$emit('event_1', '事件来源于p_p,向父级传播');
        };
        $scope.to_child = function () {
            $scope.$broadcast('event_2', '事件来源于p_p，向子级传播');
        }
    });
    login.controller('p_p_p', function ($scope) {
        $scope.$on('event_2', function (event, data) {
            console.log('在p_p_p监听到事件', data);
        });
    })
    login.controller('p_p2',function ($scope) {
        $scope.$on('event_1', function (event, data) {
            console.log('在p_p2监听到事件', data);
        });
        $scope.$on('event_2', function (event, data) {
            console.log('在p_p2监听到事件', data);
        });
    })
</script>
</body>
</html>

4-1
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <input ng-model="count" type="number" />
    <button ng-click="click()">点击</button>
</div>
<script>
    var app=angular.module('login',[]);
    app.config(function ($controllerProvider) {
        $controllerProvider.register('userController',['$scope',function ($scope) {
            $scope.click=function () {
                $scope.count++;
            }
        }])
    })
</script>
</body>
</html>

4-2
body { font-size:12px }
.show { border: solid 1px #ccc; padding: 8px; width: 260px ;margin: 10px 0;}
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <div class="{{cls}}">
        {{text}}
    </div>
    <button ng-click="onClick(1)">早上</button>
    <button ng-click="onClick(2)">上午</button>
    <button ng-click="onClick(3)">下午</button>
    <button ng-click="onClick(4)">晚上</button>
</div>
<script>
    var login=angular.module('login',[]);
    login.config(function ($provide) {
        $provide.provider('show_1',function () {
            this.$get = function () {
                return {
                    val:function (name) {
                        return name;
                    }
                }
            }
        });
    });
    login.config(function ($provide) {
        $provide.factory('show_2',function () {
            return {
                val:function (name) {
                    return name;
                }
            }
        })
    });
    login.config(function ($provide) {
        $provide.value('show_3',function (name) {
            return name;
        })
    });
    login.config(function ($provide) {
        $provide.service('show_4',function () {
            return {
                val:function (name) {
                    return name;
                }
            }
        })
    });
    login.controller('userController',['$scope','show_1','show_2','show_3','show_4',function ($scope,show_1,show_2,show_3,show_4) {
        $scope.cls="";
        $scope.onClick=function (t) {
            $scope.cls="show";
            switch (t){
                case 1:$scope.text=show_1.val("早上好!");break;
                case 2:$scope.text=show_2.val("上午好！");break;
                case 3:$scope.text=show_3("下午好！");break;
                case 4:$scope.text=show_4.val("晚上好！");break;
            }
        }
    }]);
</script>
</body>
</html>

4-3
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <button ng-click="onClick('推断式注入')">弹出消息</button>
</div>
<script>
    var login=angular.module('login',[]);
    login.factory('$show',function ($window) {
        return {
            show:function (text) {
                $window.alert(text);
            }
        }
    });
    var fun=function ($scope,$show) {
        $scope.onClick=function (msg) {
            $show.show(msg)
        }
    }
    login.controller('userController',fun);
</script>
</body>
</html>

4-4
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <div>{{text}}</div>
    <button type="button" ng-click="onShow('弹出一个alert')">弹出</button>
    <button type="button" ng-click="onWrite('修改页面元素')">显示</button>
</div>
<script>
    var login=angular.module('login',[]);
    var c4_4=function ($scope,$show,$write) {
        $scope.onShow=function (msg) {
            $show.show(msg);
        }
        $scope.onWrite=function (msg) {
            $scope.text=$write.write(msg);
        }
    };
    c4_4.$inject= ['$scope','$show','$write'];//标记式注入
    login.controller('userController',c4_4)
            .factory('$show',['$window',function ($window) {
                return {
                    show: function (text) {
                        $window.alert(text)
                    }
                }
            }])
            .factory('$write',function () {
                return {
                    write:function (text) {
                        return text;
                    }
                }
            })
</script>
</body>
</html>

4-5
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <div>{{text}}</div>
    <button type="button" ng-click="onClick(5,6)">显示</button>
</div>
<script>
    var login=angular.module('login',[]);
    login.factory('$sum',function () {
        return {
            add:function (m,n) {
                return m+n;
            }
        }
    });
    login.controller('userController',['$scope','$sum',function ($scope,$sum) {
        //行内注入
        $scope.onClick=function (m,n) {
            $scope.text=$sum.add(m,n);
        }
    }])
</script>
</body>
</html>

4-6
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <button type="button" ng-click="onClick('hello angularJS')">显示</button>
</div>
<script>
    var login=angular.module('login',[]);
    login.factory('$custom',function () {
        return {
            print:function (msg) {
                console.log(msg);
            }
        }
    });
    var inj=angular.injector(['login','ng']);//获取injector
    var has = inj.has('$custom');//has方法
    if(has){
        var custom=inj.get('$custom');//get方法
        custom.print("通过has判断是否存在$custom，存在则通过get获取并输出信息");
    }
    login.controller('userController',['$scope','$custom',function ($scope,$custom) {
        $scope.onClick=function (msg) {
            $custom.print(msg);
        }
    }])
</script>
</body>
</html>

5-1
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <div class="show">{{name}}</div>
    <input ng-model="score" />
    <div class="show">{{score}}</div>
</div>
<script>
    var login=angular.module('login',[]);
    login.controller('userController',function ($scope) {
        $scope.name="张三";
        $scope.score=95;
    })
</script>
</body>
</html>

5-2
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <p ng-repeat="stu in data ">
        <span>{{stu.id}}</span><span>{{stu.name}}</span><span>{{stu.age}}</span><span>{{stu.sex}}</span>
    </p>
</div>
<script>
    var login=angular.module('login',[]);
    login.controller('userController',function ($scope) {
        $scope.data=[
            { id:1,name:'张三',age:21,sex:'男' },
            { id:2,name:'李四',age:25,sex:'男' },
            { id:3,name:'章鱼',age:23,sex:'男' },
            { id:4,name:'蜘蛛',age:22,sex:'男' }
        ]
    })
</script>
</body>
</html>

5-3
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <div class="show">{{name}}</div>
    <button ng-click="zhangsan()">张三</button>
    <button ng-click="lisi()">李四</button>
</div>
<script>
    var login=angular.module('login',[]);
    login.controller('userController',function ($scope) {
        $scope.name="徐畅";
        $scope.zhangsan=function () {
            $scope.name="张三";
        };
        $scope.lisi=function () {
            $scope.name='李四';
        }
    })
</script>
</body>
</html>

5-4
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <div class="show">
        <input ng-model="a" /><span>{{type}}</span><input ng-model="b"/>={{result}}
    </div>
    <div class="show">
        <button ng-click="click(1)">加法</button>
        <button ng-click="click(0)">乘法</button>
    </div>
</div>
<script>
    var login=angular.module('login',[]);
    login.controller('userController',function ($scope) {
        $scope.type="+";
        $scope.result=0;
        $scope.click=function (t) {
            if(t){
                $scope.result= parseInt($scope.a)+parseInt($scope.b);
            }else {
                $scope.result= $scope.a*$scope.b;
            }
        }
    })
</script>
</body>
</html>

5-5
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="_a">
    <div class="show">{{name_a+"/"+name_b+"/"+name_c+"/"+score}}</div>
    <div ng-controller="_b">
        <div class="show">{{name_a+"/"+name_b+"/"+name_c+"/"+score}}</div>
        <div ng-controller="_c">
            <div class="show">{{name_a+"/"+name_b+"/"+name_c+"/"+score}}</div>
        </div>
    </div>
</div>
<script>
    var login=angular.module('login',[]);
    login.controller('_a',['$scope',function ($scope) {
        $scope.name_a="控制器a";
        $scope.score="a";
    }])
    login.controller('_b',['$scope',function ($scope) {
        $scope.name_b='控制器b';
        $scope.score="b";
    }])
    login.controller('_c',function ($scope) {
        $scope.name_c='控制器c';
        $scope.score='c';
    })
</script>
</body>
</html>

5-6
//home.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<div ng-controller="homeController">
    <p ng-repeat="stu in students">
        <a href="#/std/{{stu.stuId}}">{{stu.name}}</a>
    </p>
</div>
</body>
</html>
//std.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>详情</title>
</head>
<body>
    <div class="show" ng-controller="stdController">
        <p>学号:{{student.stuId}}</p>
        <p>姓名:{{student.name}}</p>
        <p>性别:{{student.sex}}</p>
        <p>分数:{{student.score}}</p>
    </div>
<h1><a href="#/">返回</a></h1>
</body>
</html>
var app=angular.module('myApp',['ngRoute']);
var students=[
    { stuId:1001 ,name: "徐畅" , sex:'男',score:85 },
    { stuId:2002 ,name: "篮球" , sex:'女',score:90 },
    { stuId:3085 ,name: "只有" , sex:'男',score:88 },
    { stuId:2574 ,name: "终结者" , sex:'女',score:93 }
];
app.controller('homeController',['$scope',function ($scope) {
    $scope.students=students;
}]);
app.controller('stdController',['$scope','$routeParams',function ($scope,$routeParams) {
    for(var i=0;i<students.length;i++){
        if(students[i].stuId==$routeParams.id){
            $scope.student=students[i];
            break;
        }
    }
}]);
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/',{
            controller:'homeController',
            templateUrl:'view/home.html'
        })
        .when("/std/:id",{
            controller:'stdController',
            templateUrl:'view/std.html',
            publicAccess:true
        })
        .otherwise({
            redirectTo:'/'
        })
}]);

6-1
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <p>{{url}}</p>
    <button ng-click="click()">获取url</button>
</div>
<script>
    var login=angular.module('login',[]);
    login.controller('userController',['$scope','$location',function ($scope,$location) {
        $scope.click=function () {
            $scope.url=$location.absUrl();//通过location服务的方法获取url
        }
    }]);
</script>
</body>
</html>

6-2
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <p>{{info('name')}}</p>
    <p>{{info('sex')}}</p>
    <p>{{info('score')}}</p>
    <p>{{std.name}}</p>
</div>
<script>
    var login=angular.module('login',[],function ($provide) {
        $provide.factory('$output',function () {
            var std={
                name:'张三',
                sex:'男',
                score:60
            };
            return std;
        })
    });
    login.controller('userController',function ($scope,$output) {
        $scope.info=function (n) {
            //n=key 通过key访问$output的值
            for(_n in $output){
                if(_n == n){
                    return ($output[n]);
                }
            }
        };
        $scope.std=$output;
    })
</script>
</body>
</html>

6-3
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <p>{{fun('我是谁?')}}</p>
    <p>{{name(2)}}</p>
</div>
<script>
    var login=angular.module('login',[]);
    login.factory('$outfun',function () {
        return function (s) {
            return s;
        }
    });
    login.factory('$outarr',function () {
        return ['张苏纳','赵玉','罗睺']
    });
    login.controller('userController',function ($scope,$outfun,$outarr) {
        $scope.fun=function (s) {
            return $outfun(s);
        }
        $scope.name=function (i) {
            if(i<$outarr.length){
                return $outarr[i]
            }else {
                return "查无此人"
            }
        }
    })
</script>
</body>
</html>

6-4
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <p class="show">{{name}}</p>
    <p class="show">{{email}}</p>
    <p class="show">{{title}}</p>
    <button ng-click="say()">显示</button>
</div>
<script>
    var login = angular.module('login', []);
    login.service('$outObject', function () {
        this.name = "徐畅";
        this.email = "986079819@qq.com";
        this.say = function () {
            return "hello angularJS!";
        }
    });
    login.controller('userController', function ($scope, $outObject) {
        $scope.name = $outObject.name;
        $scope.email = $outObject.email;
        $scope.say=function () {
            $scope.title= $outObject.say();
        }
    })
</script>
</body>
</html>

6-5
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <p class="show">{{book}}</p>
    <p class="show">{{usd}}</p>
</div>
<script>
    var login = angular.module('login', []);
    login.constant('$ISBN', {
        BOOK:'9566293548'
    });
    login.value('$RATE',{
        USD:'$65.99'
    });
    login.controller('userController', function ($scope, $ISBN,$RATE) {
        $scope.book=$ISBN.BOOK;
        $scope.usd=$RATE.USD;
    })
</script>
</body>
</html>

6-6
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <p class="show">{{result}}</p>
    <button ng-click="confirm('你确定要删除吗？')">删除</button>
</div>
<script>
    var login = angular.module('login', []);
    login.service('$notify', ['$window', function ($win) {
        this.confirm = function (msg) {
            return $win.confirm(msg) ? "确定" : "取消";//window 的confirm方法 alert msg并且返回 true or false
        }
    }]);
    login.controller('userController', function ($scope, $notify) {
        $scope.result = "";
        $scope.confirm = function (msg) {
            $scope.result = $notify.confirm(msg);
        }
    })
</script>
</body>
</html>

6-7
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <button ng-click="click(false,'你确定要删除吗？')">false</button>
    <button ng-click="click(true,'输入的内容不正确？')">true</button>
</div>
<script>
    var login = angular.module('login', []);
    login.factory('$confirm',['$window',function ($win) {
        return function (msg) {
            $win.confirm(msg);
        }
    }]);
    login.service('$notify', ['$window','$confirm', function ($win,$con) {
        //将自定义服务 $confirm注入到 $notify中
        return function (t,msg) {
            return !t? $win.alert(msg) :$con(msg);
        }
    }]);
    login.controller('userController',function ($scope,$notify) {
        $scope.click = function (t,msg) {
            return $notify(t,msg);
        }
    })
</script>
</body>
</html>

6-8
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <p>{{student.name}}</p>
    <p>{{student.email}}</p>
    <p>{{student.title}}</p>
</div>
<script>
    var login = angular.module('login', []);
    login.service('$student',function () {
        return {
            name:'徐畅',
            email:'986079819@qq.com'
        }
    });
    login.config(function ($provide) {
        //config 修改配置
        $provide.decorator('$student',function ($delegate) {
            //修改$student 属性
            $delegate.title="修改服务配置";
            return $delegate;
        })
    })
    login.controller('userController',function ($scope,$student) {
        $scope.student=$student;
    })
</script>
</body>
</html>

6-9
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController" class="show">
    <p>{{stu.code}}</p>
    <p>{{stu.name}}</p>
    <p>{{stu.score}}</p>
    <button ng-click="reset()">重置</button>
</div>
<div ng-controller="c_2" class="show">
    <p>{{stu.code}}</p>
    <p>{{stu.name}}</p>
    <p>{{stu.score}}</p>
</div>
<script>
    function student(json) {
        angular.extend(this,json);
        this.reset=function () {
            this.code=1000;
            this.name="张三";
            this.score=0;
        }
    }
    student.create=function () {
        return new student({
            code:1001,
            name:'徐畅',
            score:100
        });
    };
    var login = angular.module('login', []);
    login.factory('$student',function () {
        return {
            create:student.create
        }
    });
    login.controller('userController',function ($scope,$student) {
        $scope.stu=$student.create();
        $scope.reset=function () {
            $scope.stu.reset()
        }
    });
    login.controller('c_2',function ($scope,$student) {
        $scope.stu=$student.create();
    })
</script>
</body>
</html>

7-1
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="frame">
    <ul id="stu_info">
        <li>正在加载中...</li>
    </ul>
</div>
<script>
    (function () {
        var xhr = null;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject();
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    var HTML = "";
                    var data = eval("(" + xhr.responseText + ")");
                    for (var i = 0; i < data.length; i++) {
                        HTML += "<li><span>" + data[i].code + "</span>";
                        HTML += "<li><span>" + data[i].name + "</span>";
                        HTML += "<li><span>" + data[i].score + "</span>";
                    }
                    document.getElementById("stu_info").innerHTML=HTML;
                }
            }
        };
        xhr.open("GET","data/stu.do",true);
        xhr.send();
    })()
</script>
</body>
</html>

7-2
<!DOCTYPE html>
<html lang="en" ng-app="http">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="frame" ng-controller="postController">
    <p>{{result}}</p>
    <button ng-click="click()">post</button>
</div>
<script>
    var app=angular.module('http',[]);
    app.config(function ($httpProvider) {
        $httpProvider.defaults.transformRequest=function (obj) {
            var arr=[];
            for(var p in obj){
                arr.push(encodeURIComponent(p)+'='+encodeURIComponent(obj[p]));
            }
            return arr.join("&");
        };
        $httpProvider.defaults.headers.post={
            'Content-Type':'application/x-www-form-urlencoded'
        }
    });
    app.controller('postController',['$scope','$http',function ($scope,$http) {
        $scope.postdata={ name:'xc' };
        $scope.click=function () {
            $http.post('data/?',postdata).success(function (data,status,headers,config) {
                $scope.result=data;
            })
        }
    }])
</script>
</body>
</html>

7-3
<!DOCTYPE html>
<html lang="en" ng-app="http">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="frame" ng-controller="httpController">
    <input type="text" ng-model="num"/>
    <button ng-click="click()">post</button>
    <p>{{result}}</p>
</div>
<script>
    var app=angular.module('http',[]);
    app.controller('httpController',function ($scope,$http) {
        $scope.num=0;
        $scope.result="偶数";
        $scope.click=function () {
            $http({
                method:'GET',
                url:'data/',
                params:{
                    n:$scope.num
                }
            }).success(function (data,status,headers,config) {
                $scope.result=data;
            })
        }
    })
</script>
</body>
</html>

8-1
<!DOCTYPE html>
<html lang="en" ng-app="http">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="frame">
    <test-directive></test-directive>
    <div test-directive></div>
    <div class="test-directive"></div>
    <div data-test-directive></div>
</div>
<script>
    var app=angular.module('http',[]);
    app.directive('testDirective',function () {
        return {
            restrict:'EAC',
            template:'<h1>Hello,AngularJS!</h1>'
        }
    })
</script>
</body>
</html>

8-2
<!DOCTYPE html>
<html lang="en" ng-app="http">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="frame">
    <ts-dir1></ts-dir1>
    <ts-dir2></ts-dir2>
    <ts-dir3></ts-dir3>
</div>
<script type="text/ng-template" id="tpl">
    <h1>模版内容来源于Script</h1>
</script>
<script>
    var app = angular.module('http', []);
    app.run(function ($templateCache) {
        $templateCache.put('cache','<h3>模版内容来源于缓存</h3>')
    });
    app.directive('tsDir1', function () {
        return {
            restrict: 'EAC',
            template: '<h1>测试标签1</h1>'
        }
    });
    app.directive('tsDir2',function () {
        return {
            restrict:'EAC',
            templateUrl:'tpl'
        }
    });
    app.directive('tsDir3',function () {
        return {
            restrict:'EAC',
            templateUrl:'cache'
        }
    })
</script>
</body>
</html>

8-3
<!DOCTYPE html>
<html lang="en" ng-app="http">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="frame">
    <ts-dr></ts-dr>
    <div>{{content}}</div>
</div>
<script type="text/ng-template" id="tpl">
    <button>单击按钮</button>
</script>
<script>
    var app = angular.module('http', []);
    app.directive('tsDr', function () {
        return {
            restrict: 'EAC',
            templateUrl: 'tpl',
            replace: true,
            link: function (scope,Ele,iAttrs) {
                Ele.bind('click',function () {
                    scope.$apply(function () {
                        scope.content="这是点击后显示的内容";
                    });
                    iAttrs.$$element[0].disabled=true;
                })
            }
        }
    })
</script>
</body>
</html>

8-4
<!DOCTYPE html>
<html lang="en" ng-app="http">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="frame" ng-controller="userController">
    <ts-drc1>
        <ts-drc2>{{tip}}</ts-drc2>
    </ts-drc1>
</div>
<script type="text/ng-template" id="tpl">
    <button>单击按钮</button>
</script>
<script>
    var app = angular.module('http', []);
    app.controller('userController',function ($scope) {
        $scope.tip="跟踪compile执行过程";
    });
    app.directive('tsDrc1',function () {
        return {
            restrict:'EAC',
            compile:function () {
                console.log('执行A指令');
                return {
                    pre:function () {
                        console.log('执行A中的pre函数');
                    },
                    post:function () {
                        console.log('执行A中的post函数')
                    }
                }
            }
        }
    });
    app.directive('tsDrc2',function () {
        return {
            restrict:'EAC',
            compile: function () {
                console.log('执行编译B的指令');
                return {
                    pre:function () {
                        console.log("执行B的pre函数");
                    },
                    post: function () {
                        console.log('执行B的post函数');
                    }
                }
            }
        }
    })
</script>
</body>
</html>

8-6
<!DOCTYPE html>
<html lang="en" ng-app="http">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="frame">
    <input type="text" ng-model="content" />
    <ts-dir>固定</ts-dir>
</div>
<script type="text/ng-template" id="tpl">
    <p>{{content}}</p>
    <button ng-transclude></button>
</script>
<script>
    var app = angular.module('http', []);
    app.directive('tsDir',function () {
        return {
            restrict:'EAC',
            templateUrl:'tpl',
            scope:true,
            transclude:true,
            link:function (scope,element) {
                element.bind('click',function () {
                    scope.$apply(function () {
                        scope.content="点击之后改变的值"
                    })
                })
            }
        }
    });
</script>
</body>
</html>

8-7
<!DOCTYPE html>
<html lang="en" ng-app="test">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div ng-controller="userController">
    <input type="text" ng-model="textName" /><br/>
    <input type="text" ng-model="textAge" /><br/>
    <div>{{tip}}</div>
    <ts-directive a="{{ textName }}" b="textAge" c="reSet()">重置</ts-directive>
</div>
<!--javaScript-->
<script type="text/ng-template" id="url">
    <div>
        <span>{{textName}}</span>
        <span>{{textAge}}</span>
        <button ng-transclude></button>
    </div>
</script>
<script>
    var test = angular.module('test', []);
    test.controller('userController', function ($scope) {
        $scope.reSet = function () {
            $scope.tip="重置成功!"
        }
    });
    test.directive('tsDirective', function () {
        return {
            restrict: 'EAC',
            templateUrl: 'url',
            transclude: true,
            scope: {
                textName: '@a',
                textAge: '=b',
                reSet: '&c'
            },
            link : function (scope,ele,attr) {
                ele.bind('click',function () {
                    scope.$apply(function () {
                        scope.reSet();
                        scope.textName='徐畅';
                        scope.textAge='10000';
                    })
                })
            }
        }
    })
</script>

</body>
</html>

8-8
//在父指令的controller内 创建方法scopeConnect 并传递给子指令的require，使子指令能够访问父指令
//又将子指令的scope 作为实参传入scoopeConnect函数，使得scopeConnect能够同时访问父子作用域，实现通讯
<!DOCTYPE html>
<html lang="en" ng-app="test">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<father-directive>
    <div>{{ptip}}</div>
    <button ng-click="click()">父子通讯</button>
    <child-directive>
        <div>{{ctip}}</div>
    </child-directive>
</father-directive>
<script>
    var test = angular.module('test', []);
    test.directive('fatherDirective',function () {
        return {
            restrict: 'EAC',
            controller: function ($scope,$compile,$http) {
                this.scopeConnect=function (c) {
                    $scope.ptip="天气不错";
                    $scope.click=function () {
                        $scope.tmp=$scope.ptip;
                        $scope.ptip=c.ctip;
                        c.ctip=$scope.tmp;
                    }
                }
            }
        }
    });
    test.directive('childDirective',function () {
        return {
            restrict: 'EAC',
            require: "^?fatherDirective",
            link: function (scope,ele,attr,ctrl) {
                scope.ctip="气温正好20℃";
                ctrl.scopeConnect(scope);
            }
        }
    })
</script>

</body>
</html>

9-1
//absUrl获取url protocol协议类型 host服务器ip port端口
<!DOCTYPE html>
<html lang="en" ng-app="test">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="userController">
    <p>absUrl:{{absUrl}}</p>
    <p>protocol:{{protocol}}</p>
    <p>host:{{host}}</p>
    <p>port:{{port}}</p>
</div>

<!--javaScript-->
<script>
    var test = angular.module('test', []);
    test.controller('userController',function ($scope,$location) {
        $scope.absUrl=$location.absUrl();
        $scope.protocol=$location.protocol();
        $scope.host=$location.host();
        $scope.port=$location.port();
    })
</script>

</body>
</html>

9-2
<!DOCTYPE html>
<html lang="en" ng-app="test">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="userController">
    <p>url:{{url}}</p>
    <p>hash:{{hash}}</p>
    <p>search:{{search}}</p>
    <p>path:{{path}}</p>
    <button ng-click="click()">修改</button>
</div>

<!--javaScript-->
<script>
    var test = angular.module('test', []);
    test.controller('userController',function ($scope,$location) {
        $scope.url=$location.url();
        $scope.hash=$location.hash();
        $scope.search=$location.search();
        $scope.path=$location.path();
        $scope.click=function () {
            $location.search({c:3,d:4})
        }
    })
</script>

</body>
</html>

9-3
<!DOCTYPE html>
<html lang="en" ng-app="test">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="userController">
    <p>当前页面:{{current}}</p>
    <p>前页面:{{pre}}</p>
</div>

<!--javaScript-->
<script>
    var test = angular.module('test', []);
    test.controller('userController',['$rootScope','$scope','$location',"$window",function ($rootScope,$scope,$location,$window) {
        $rootScope.$on('$locationChangeStart',function (evt,current,pre) {
            $scope.current=current;
            $scope.pre=pre;
        })
    }])
</script>

</body>
</html>

9-4
//页面跳转
<!DOCTYPE html>
<html lang="en" ng-app="test">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="userController">
    <p>tip_a: {{tip_a}}</p>
    <p>tip_b: {{tip_b}}</p>
    <p>当前页面:{{current}}</p>
    <p>前页面:{{pre}}</p>
    <button ng-click="click()">跳转</button>
</div>

<!--javaScript-->
<script>
    var test = angular.module('test', []);
    test.controller('userController', function ($rootScope, $scope, $location, $window) {
        $scope.click = function () {
            var _id=$window.parseInt($location.search().id);
            _id++;
            $location.search({id:_id});
        };
        $rootScope.$on('$locationChangeStart', function (evt, cur, pre) {
            $scope.tip_a = "页面即将跳转...";
            $scope.tip_b = "";
            var yn = $window.confirm("你确定要离开此页面？");
            if (yn) {
                $scope.pre = pre;
                $scope.current = cur;
                $scope.tip_a = "跳转继续...";
                return;
            }
            evt.preventDefault();
            $scope.pre = pre;
            $scope.current = cur;
            $scope.tip_a = "跳转中止...";
            return;
        });
        $rootScope.$on('$locationChangeSuccess', function (evt, cur, pre) {
            $scope.tip_b = "跳转成功...";
            $scope.pre = pre;
            $scope.current = cur;
        })
    })
</script>

</body>
</html>

9-5 9-6
//1.5以上版本 必须有<base href="/">才能使用html5Mode
<!DOCTYPE html>
<html lang="en" ng-app="test">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <base href="http://localhost:63342/test/app/view/login.html">
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="userController">
    <div>search:{{absUrl}}</div>
    <div>path:{{hash}}</div>
</div>

<!--javaScript-->
<script>
    var test = angular.module('test', []);
    test.config(function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!!!');
    });
    test.controller('userController', function ($scope, $location) {
        $scope.absUrl = $location.absUrl();
        $scope.hash = $location.hash();
    })
</script>

</body>
</html>

9-7
//存在bug
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <base href="/test/app/view/login.html">
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="showController">
    <div class="title">
        <input type="radio" name="type" checked ng-click="rdo_click(0)">HashBang模式
        <input type="radio" name="type" ng-click="rdo_click(1)">html5模式
    </div>
    <div id="hashbang" ng-class="cls_a" ng-controller="hashController">
        <div ts-brow-bar bs="hashbang" class="brow"></div>
        <div>hash片段: {{$location.hash()}}</div>
        <div>查询字符:{{$location.search()}}</div>
        <div>页面路径: {{$location.path()}}</div>
        <a href="http://localhost:63342/test/app/view/login.html#/data?a=b">/data?a=b</a> |
        <a href="http://localhost:63342/test/app/view/login.html#/login?flag#hash">/login?flag#hash</a>
    </div>
    <div id="html5" ng-class="cls_b" ng-controller="htmlController">
        <div ts-brow-bar bs="html5" class="brow"></div>
        <div>hash片段: {{$location.hash()}}</div>
        <div>查询字符:{{$location.search()}}</div>
        <div>页面路径: {{ $location.path()}}</div>
        <a href="http://localhost:63342/test/app/view/login.html#/data?a=b">/data?a=b</a> |
        <a href="http://localhost:63342/test/app/view/login.html#/login?flag#hash">/login?flag#hash</a>
    </div>
</div>

<!--javaScript-->
<script>
    var app = angular.module('login', []);
    app.controller('showController', function ($scope) {
        $scope.cls_a = "show";
        $scope.cls_b = "hide";
        $scope.rdo_click = function (v) {
            //切换显示
            if (!v) {
                $scope.cls_a = "show";
                $scope.cls_b = "hide";
            } else {
                $scope.cls_a = "hide";
                $scope.cls_b = "show";
            }
        }
    });
    app.controller('hashController', function ($scope, $location) {
        $scope.$location = $location;
    });
    app.controller('htmlController', function ($scope, $location) {
        $scope.$location = $location;
    });
    function Brow(initUrl,baseHref) {
        this.onUrlChange = function (fn) {
            this.urlChange =fn;
        }
        this.url=function () {
            return initUrl;
        }
        this.baseHref = function () {
            return baseHref;
        }
    }
    var Brows = {
        html5: new Brow('http://localhost:63342/test/app/view/login.html#/data?id=12#hash','/test/app/view/login.html'),
        hashbang: new Brow('http://localhost:63342/test/app/view/login.html#!/data?id=12#hash','/test/app/view/login.html')
    }
/*    function createBrow(name) {
        var root=angular.element(document.getElementById(name));
        angular.bootstrap(root,[function ($compileProvider,$locationProvider,$provide) {
            $locationProvider.html5Mode(true).hashPrefix('!');
            $provide.value('$browser',Brows[name]);
            $provide.value('$document',root);
            $provide.value('$sniffer',{history:name=='html5'});
            $compileProvider.directive('tsBrowBar',function () {
                return function (scope,elm,attrs) {
                    var bs=Brows[attrs.bs];
                    var input=angular.element('<input type="text" />').val(bs.url());
                    bs.url=function (url) {
                        return input.val(url)
                    };
                    elm.append(input);
                }
            })
        }]);
    }
    createBrow('html5');
    createBrow('hashbang');*/
    show.directive('tsBrowBar', function () {
        return function (scope, elm, attrs) {
            var bs = Brows[attrs.bs];
            var input = angular.element('<input type="text" />').val(bs.url());
            bs.url = function (url) {
                return input.val(url)
            };
            elm.append(input);
        }
    });

</script>

</body>
</html>

9-8
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <base href="/test/app/view/">
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="showController">
    <div class="title">
        <input type="radio" name="type" checked ng-click="rdo_click(0)">HashBang模式
        <input type="radio" name="type" ng-click="rdo_click(1)">html5模式
        <input class="brow" type="text" ng-model="locationPath"/>
    </div>
    <div id="hashbang" ng-class="cls_a" ng-controller="hashController">
        <div>hash片段: {{$location.hash()}}</div>
        <div>查询字符:{{$location.search()}}</div>
        <div>页面路径: {{$location.path()}}</div>
        <a href="http://localhost:63342/test/app/view/login.html#/data?a=b">/data?a=b</a> |
        <a href="http://localhost:63342/test/app/view/login.html#/login?flag#hash">/login?flag#hash</a>
    </div>
    <div id="html5" ng-class="cls_b" ng-controller="htmlController">
        <div>hash片段: {{$location.hash()}}</div>
        <div>查询字符:{{$location.search()}}</div>
        <div>页面路径: {{ $location.path()}}</div>
        <a href="http://localhost:63342/test/app/view/login.html#/data?a=b">/data?a=b</a> |
        <a href="http://localhost:63342/test/app/view/login.html#/login?flag#hash">/login?flag#hash</a>
    </div>
</div>

<!--javaScript-->
<script>
    var app = angular.module('login', []);
    app.config(function ($locationProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!')
    });
    app.controller('showController', function ($scope, $location) {
        //显示隐藏
        $scope.cls_a = "show";
        $scope.cls_b = "hide";
        $scope.rdo_click = function (v) {
            //切换显示
            if (!v) {
                $scope.cls_a = "show";
                $scope.cls_b = "hide";
            } else {
                $scope.cls_a = "hide";
                $scope.cls_b = "show";
            }
        }

        //地址绑定
        $scope.$watch('locationPath', function (path) {
            $location.path(path);
        });
        $scope.$watch('$location.path()', function (path) {
            $scope.locationPath = path;
        })
    });
    app.controller('hashController', function ($scope, $location) {
        $scope.$location = $location;
    });
    app.controller('htmlController', function ($scope, $location) {
        $scope.$location = $location;
    });
</script>

</body>
</html>

10-1
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <base href="/test/app/view/">
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="showController" id="controller">
    <button ng-click="add()">添加</button>
    <br>
    <button ng-click="del()">删除</button>
</div>

<!--javaScript-->
<script>
    var app = angular.module('login', []);
    app.controller('showController',function ($scope,$compile) {
        $scope.hello='hello angularJS!';
        $scope.log = function () {
            console.log("hello!");
        }
        var html="<div ng-click='log()'>{{hello}}</div>";
        var template = angular.element(html);
        var newHtml = $compile(template)($scope);
        $scope.add = function () {
            angular.element(document.getElementById("controller")).append(newHtml);
        }
        $scope.del=function () {
            newHtml.remove()
        }
    })
</script>

</body>
</html>

10-2
//$timeout 延迟
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>login</title>
    <base href="/test/app/view/">
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="showController" id="controller">
    {{tip}}
    <button ng-click="click()">八话</button>
</div>

<!--javaScript-->
<script>
    var app = angular.module('login', []);
    app.controller('showController', function ($scope, $interval, $timeout) {
        var fn=function () {
            $scope.tip = "废物明凯";
            var stop = $timeout(function () {
                $scope.tip = "字字八划";
            }, 1000);
            $timeout(function () {
                $scope.tip = "年年八强";
            }, 2000);
        };
        fn();
        $interval(fn, 3000);
    })
</script>

</body>
</html>

10-4
//过滤之后$index失效
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>解决双括号绑定时的闪烁问题</title>
    <base href="/test/app/view/">
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="showController" id="controller" ng-cloak>
    <ul>
        <li ng-repeat="stu in students | filter:myfilter">
            <span>{{ stu.stdId}}</span> <span>{{ stu.name}}</span> <span>{{ stu.score}}</span>
            <span ng-click="remove(stu,$index)">删除</span>
        </li>
    </ul>
</div>

<!--javaScript-->
<script>
    var app = angular.module('login', []);
    app.controller('showController', function ($scope, $interval, $timeout) {
        $scope.students = [
            {stdId: 1001, name: '张苏纳', score: 90},
            {stdId: 1002, name: '彩色该', score: 48},
            {stdId: 1003, name: '二沙岛', score: 60},
            {stdId: 1004, name: '阮氏芳', score: 66},
            {stdId: 1005, name: '詹瑞文', score: 85},
            {stdId: 1006, name: '但特维', score: 78},
            {stdId: 1007, name: '冲出重围', score: 55}
        ];
        $scope.myfilter = function (stu) {
            return stu.score>=60 ? stu : null ;
        };
        $scope.remove=function (item,index) {
            console.log(item);
            console.log($scope.students[index]);
        };
    })
</script>

</body>
</html>

10-5
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>解决双括号绑定时的闪烁问题</title>
    <base href="/test/app/view/">
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="showController" id="controller" ng-cloak>
    <button ng-click="update()">更新</button>
    <ul>
        <li ng-repeat="stu in students track by stu.stdId">
            <span>{{ stu.stdId}}</span> <span>{{ stu.name}}</span> <span>{{ stu.score}}</span>
        </li>
    </ul>
</div>

<!--javaScript-->
<script>
    var app = angular.module('login', []);
    app.controller('showController', function ($scope, $interval, $timeout) {
        var student = [
            {stdId: 1001, name: '张苏纳', score: 90},
            {stdId: 1002, name: '彩色该', score: 48},
            {stdId: 1003, name: '二沙岛', score: 60},
            {stdId: 1004, name: '阮氏芳', score: 66}
        ];
        var result = [
            {stdId: 1005, name: '詹瑞文', score: 85},
            {stdId: 1006, name: '但特维', score: 78},
            {stdId: 1007, name: '冲出重围', score: 55}
        ];
        $scope.students = student;
        console.log($scope.students)
        $scope.update = function () {
            $scope.students=result;
            console.log($scope.students);
        }
    })
</script>

</body>
</html>

10-6
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>ng-repeat作用域</title>
    <base href="/test/app/view/">
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="showController" id="controller" ng-cloak>
    <button ng-click="click1()">ng-repeat子作用域</button>
    <button ng-click="click2()">父作用域</button>
    <button ng-click="click3()">父作用域</button>
    <ul ng-repeat="stu in students track by stu.stdId">
        <li>
            <span id="std{{stu.stdId}}">{{ stu.stdId}}</span> <span>{{ stu.name}}</span> <span>{{ stu.score}}</span>
        </li>
    </ul>
</div>

<!--javaScript-->
<script>
    var app = angular.module('login', []);
    app.controller('showController', function ($scope) {
        var data = [
            {stdId: 1001, name: '张苏纳', score: 90},
            {stdId: 1002, name: '彩色该', score: 48},
            {stdId: 1003, name: '二沙岛', score: 60},
            {stdId: 1004, name: '阮氏芳', score: 66}
        ];
        var result = [
            {stdId: 1005, name: '詹瑞文', score: 85},
            {stdId: 1006, name: '但特维', score: 78},
            {stdId: 1007, name: '冲出重围', score: 55}
        ];
        $scope.students = data;
        $scope.click1 = function () {
            var scope1 = angular.element(document.getElementById('std1001')).scope();
            var scope2 = angular.element(document.getElementById('std1002')).scope();
            console.log(scope1 == scope2)
        };
        $scope.click2 = function () {
            var scope2 = angular.element(document.getElementById('std1002')).scope();
            console.log(scope2.$parent==$scope)
        }
        $scope.click3 = function () {
            var scope2 = angular.element(document.getElementById('std1002')).scope();
            scope2.$parent.students = result;
        }
    })
</script>

</body>
</html>

10-7
<!DOCTYPE html>
<html lang="en" ng-app="login">
<head>
    <meta charset="UTF-8">
    <title>ng-repeat作用域</title>
    <base href="/test/app/view/">
    <script src="../bower_components/angular/angular.min.js"></script>
    <link href="login.css" rel="stylesheet"/>
</head>
<body>
<div class="show" ng-controller="showController" ng-click="click('父级div',$event)">
    <button ng-click="click('按钮',$event)">点击</button>
</div>

<!--javaScript-->
<script>
    var app = angular.module('login', []);
    app.controller('showController', function ($scope) {
        $scope.click=function (name,$event) {
            if($event.stopPropagation){
                $event.stopPropagation();
            }
            console.log(name)
        }
    })
</script>

</body>
</html>
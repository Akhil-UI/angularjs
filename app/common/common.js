(function () {
    angular.module("common", []);

    function nbHeader() {
        return {
            restrict: "A,E,C", //A for Attribute. C for class E for element.
            template: "<h6>NBITS</h6>"
        };
    }

    function nbNavBar() {
        return {
            restrict: "E", //E for Element.
            templateUrl: "app/header/header.tpl.html"
        }
    }

    function nbBrandName() {
        return {
            restrict: "E", //A for Attribute.
            template: '<a class="navbar-brand" href="#">{{hc.sitename}}</a>'
        };
    }

    function nbCompile() {
        return {
            template: "<span>{{name}}</span><div nb-compile-child></div>",
            restrict: "A",
            controller: function ($scope) {
                $scope.name = "kiran";
                console.log("I am the controller function");
            },
            compile: function (element, attrs) {
                console.log(element);
                console.log(attrs);
                return {
                    pre: function (scope, element, attrs) {
                        console.log("Pre Link function");
                    },
                    post: function (scope, element, attrs) {
                        console.log("Post Link function");

                    }

                }
            }
        }
    }

    function nbCompileChild() {
        return {
            restrict: "A",
            compile: function (element, attrs) {
                console.log(element);
                console.log(attrs);
                return {
                    pre: function (scope, element, attrs) {
                        console.log("Pre Link function Child");
                    },
                    post: function (scope, element, attrs) {
                        console.log("Post Link function Child");

                    }

                }
            }
        }
    }

    function numbersOnly() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.bind("keypress", function (evt) {
                    console.log(evt.key);
                    var regex = new RegExp(/^\d+$/);
                    var isNumber = regex.test(evt.key);

                    if (!isNumber) {
                        evt.preventDefault();
                    }
                });
            }
        }
    }

    function nbDatePicker() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.datetimepicker({
                    format: "DD/MM/YYYY"
                });
            }
        }
    }

    function nbTransclude() {
        return {
            restrict: "E",
            template: "<h1>Welcome to directives</h1><span ng-transclude></span>",
            transclude: true
        }
    }

    function nbToggle() {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                var anchor = element.find("a");
                var panelBody = element.find(".panel-body");
                console.log(anchor);
                $(anchor).bind("click", function () {
                    panelBody.toggle();
                });
            }
        }
    }

    function nbLogoName() {
        return {
            restrict: "A",
            template: "<a class='navbar-brand' href='#'>{{logoname}}</a>",
            scope: {
                logoname: "@"
            }
        }
    }

    function nbDetails() {
        return {
            restrict: "A",
            templateUrl: "app/common/detail.tpl.html",
            scope: {
                detail: "="
            }
        }
    }

    function nbPhoneNumber() {
        return function (input, criteria1,criteria2) {
            var filteredOutput;
            if (criteria1 == 'US') {
                filteredOutput = input.substring(0, 3) + "-" + input.substring(3, 6) + "-" + input.substring(6, 10);
                if(criteria2=="+1"){
                    filteredOutput=criteria2+"-"+filteredOutput;
                }
            }
            else{
                filteredOutput = input.substring(0,5)+"-"+input.substring(5,10);
            }
            return filteredOutput;
        }
    }


    angular.module("common")
        .directive("nbToggle", [nbToggle])
        .directive("nbTransclude", [nbTransclude])
        .directive("nbHeader", [nbHeader])
        .directive("nbNavBar", [nbNavBar])
        .directive("nbBrandName", [nbBrandName])
        .directive("nbCompile", [nbCompile]) //nb-nav-bar
        .directive("nbCompileChild", [nbCompileChild])
        .directive("nbNumbersOnly", [numbersOnly])
        .directive("nbDatePicker", [nbDatePicker]) //nb-nav-bar
        .directive("nbLogoName", [nbLogoName])
        .directive("nbDetails", [nbDetails])
        .filter("nbPhoneNumber", [nbPhoneNumber]);

})();

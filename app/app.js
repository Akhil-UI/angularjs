(function () {
    //module creation
    angular.module("ekart", ["register", "login", "products", "header", "ui.router", "common"]);
    //syntax of config.
    function myConfig($stateProvider, $urlRouterProvider,versionProvider) {
       
        versionProvider.set("1.0.0");
         var version =versionProvider.$get();
        console.log(version);
        $urlRouterProvider.otherwise("main");
        var main = {
            templateUrl: "app/header/header.tpl.html",
            name: "main",
            url: "/main",
        };
        var register = {
            name: "main.register",
            templateUrl: "app/register/register.tpl.html",
            controller: "registerCtrl as rc"
        };

        var products = {
            name: "main.products",
            templateUrl: "app/products/product.tpl.html",
            controller: "productCtrl as pc"
        };
        var login = {
            name: "main.login",
            templateUrl: "app/login/login.tpl.html"
        };
        var productDetail = {
            name: "main.products.detail",
            templateUrl: "app/products/productDetail/product.detail.tpl.html",
            params: {
                detail: ""
            },
            controller: "productCtrl as pcc"
        };

        //adding state
        $stateProvider.state("main", main);
        $stateProvider.state("main.register", register);
        $stateProvider.state("main.products", products);
        $stateProvider.state("main.products.detail", productDetail);
        $stateProvider.state("main.login", login);

        console.log("Config: Ekart")
    }

    function ekartRun($state, $rootScope, $transitions) {
        /* console.log("Run: Ekart");
         $transitions.onStart({ to: 'main.products' }, function(trans) {
             // var $state = trans.router.stateService;
             if (localStorage.getItem("token")) {
                 console.log("user logged in");
             } else {
                 $state.go("main.login");
             }
             console.log("XYZ");
         });*/
        // $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        //     if (toState.name === "main.products") {
        //         if (localStorage.getItem("token")) {
        //             console.log("user logged in");
        //         } else {
        //             $state.go("main.login");
        //         }
        //     }
        // });
    }

    function versionProvider() {
        var version ="0.0.0";
        this.set =function(data){
         version=data;   
        };
        this.$get=function(){
            return version;
        };
    }

    angular.module("ekart")
        .provider("version", [versionProvider]);

    //consuming or extending the moudle.
    angular.module("ekart").config(["$stateProvider", "$urlRouterProvider","versionProvider", myConfig]);
    angular.module("ekart").run(["$state", "$rootScope", "$transitions", ekartRun]);


})();

(function () {
    angular.module("login", []);



    function loginConfig() {
        console.log("Config: login");
    }

    function loginRun() {
        console.log("Run: login");
    }

    function loginCtrl($scope) {
        $scope.username = "test";

        $scope.$watch("username", function (newVal, oldVal) {
            console.log(newVal);
            console.log(oldVal);
           
        });
        setTimeout(function () {
            $scope.username = "kiran";
             $scope.$apply();
        }, 5000)

    }
    angular.module("login")
        .config([loginConfig])
        .run([loginRun])
        .controller("loginCtrl", ["$scope", loginCtrl]);
})();

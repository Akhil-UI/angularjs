(function () {
    function headerCtrl($rootScope,version) {
        var vm = this;
        console.log(version);
        vm.cartItems = [];
        vm.sitename="Ekart";
        $rootScope.$on("Item-Added", function (evt, args) {
            vm.cartItems.push(args);
        });
        $rootScope.$on("Item-Removed", function (evt, args) {
            var index = vm.cartItems.indexOf(args);
            if (index >= 0) {
                vm.cartItems.splice(index, 1);
            }
        });
    }


    angular.module("header", [])
        .controller("headerCtrl", ["$rootScope","version", headerCtrl]);
})();

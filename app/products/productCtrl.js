(
    function () {

        function productCtrl(productSvc,$rootScope,$state) {

            var vm = this;
            vm.sortBy = "Model";
            vm.search={};
            vm.dateofbirth= new Date();
            console.log($state);
            
            if($state.params.detail){
                vm.details=$state.params.detail;
            }
            vm.displayDetails=function(item){
                vm.selectedProduct =item;
                //$state.go("main.products.detail",{detail:item});
            };
            
            productSvc.getProductsFromJson()
                .then(function (response) {
                    vm.products = response.data.products;
                })
                .catch(function (errorResponse) {
                    vm.error = "Unable to fetch data";
                });

            vm.orderByModel = function () {
                if (vm.sortBy == "Model") {
                    vm.sortBy = "-Model";
                } else {
                    vm.sortBy = "Model";
                }
            };
            vm.addProductToCart = function(item){
                $rootScope.$broadcast("Item-Added",item);
            };
            vm.removeProductFromCart = function(item){
                $rootScope.$broadcast("Item-Removed",item);
            };
        }
        angular.module("products")
            .controller("productCtrl", ["productSvc","$rootScope","$state", productCtrl]);
    }
)();

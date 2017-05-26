(
    function() {
        function productSvc($http, $q) {

            this.getProductsFromJson = function() {
                //create deffered object.
                var dfd = $q.defer();
                //mkae the http call
                $http.get("localapi/products.json")
                    .then(function(response) {
                        dfd.resolve(response);
                    })
                    .catch(function(errorResponse) {
                        dfd.reject(response);
                    });
                //Return promise...
                return dfd.promise;
            };

        }
        angular.module("products")
            .service("productSvc", ["$http", "$q", productSvc]);
    }
)();
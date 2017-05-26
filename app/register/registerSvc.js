(function() {
    function registerSvc($q, $http) {
        this.saveDataToDB = function(data) {
            // console.log(data);
            var dfd = $q.defer();
            $http.post("api/register", data)
                .then(function(response) {
                    dfd.resolve(response);
                }).catch(function(response) {
                    dfd.reject(response);
                });
            return dfd.promise;
        };

        this.login = function(data) {
            var dfd = $q.defer();
            $http.post("api/login", data)
                .then(function(response) {
                    if (response.data.token) {
                        localStorage.setItem("token", response.data.token);
                    }
                    dfd.resolve(response);

                }).catch(function(response) {
                    dfd.reject(response);
                });
            return dfd.promise;
        }
        this.getCount = function() {
            var number = 100;
            return number;
        };

        this.getCountAsync = function() {

            var dfd = $q.defer();
            dfd.reject(100);
            return dfd.promise;
        };
        this.getCountries = function() {
            var dfd = $q.defer();

            ///Asynchronous call to the json file.
            $http.get("localapi/countries.json")
                .then(function(res) {
                    console.log(res);
                    dfd.resolve(res);
                })
                .catch(function(err) {
                    console.log(err);
                    dfd.reject(err);
                });

            //if the call is success
            //resolve
            //if the call is faile
            //reject
            return dfd.promise;

        };
    }

    angular.module("register")
        .service("registerSvc", ["$q", "$http", registerSvc]);
})();
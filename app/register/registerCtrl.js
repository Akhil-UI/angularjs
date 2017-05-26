(function() {
    function registerCtrl(registerSvc) {
        var vm = this;
        vm.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        vm.user = {
            email: ""
        };
        vm.registerUser = function() {
            vm.isFormSubmitted = true;
            //console.log(vm);
            registerSvc.saveDataToDB(vm.user)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(response) {
                    console.log(response);
                })
        };

        vm.login = function() {
            registerSvc.login(vm.user)
                .then(function(response) {
                    console.log(response);
                })
                .catch(function(response) {
                    console.log(response);
                })
        };
        //vm.countries=[{name:"India",code:"IN"},{name:"Canada",code:"CA"}];

        vm.count = registerSvc.getCount();

        registerSvc.getCountAsync()
            .then(function(response) {
                console.log(response);
            })
            .catch(function(errr) {
                console.log(errr);
            });

        registerSvc.getCountries()
            .then(function(response) {
                console.log(response);
                vm.countries = response.data.countries;
            })
            .catch(function(errr) {
                console.log(errr);
            });

    }
    angular.module("register")
        .controller("registerCtrl", ["registerSvc", registerCtrl]);

})();
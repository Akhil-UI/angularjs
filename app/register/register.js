(function(){
    angular.module("register",[]);
    
    function registerConfig(){
        console.log("Config: Register");
    }
    function registerRun(){
        console.log("Run: Register");
    }
    angular.module("register")
    .config([registerConfig])
    .run([registerRun]);
})();
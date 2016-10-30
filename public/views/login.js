issueTrackerApp.registerCtrl('logincontroller', function logincontroller($scope, $rootScope, $http, $location, appServices, $cookies,validationService) {
  $scope.loginInfo = { Email: '', Password: '' }; 
   $scope.doLogin = function () {  
        if ($scope.loginInfo.UserName == '') { $rootScope.setMsg('UserName is required'); return }
        else if ($scope.loginInfo.Password == '') { $rootScope.setMsg('Password is required'); return }
        appServices.doLogin($scope.loginInfo).then(function (d) {
            if (d.Status == 'success' && d.Count > 0) { // Login Success
                $rootScope.mUser = d.objdata;
                $rootScope.token = d.token;
                console.log('Remember is ' +  $scope.loginInfo.Remember);
                if ($scope.loginInfo.Remember) {
                    var expireDate = new Date();
                    expireDate.setDate(expireDate.getDate() + 90);
                    $cookies.put('UserToken', d.token, { 'expires': expireDate });
                } else $cookies.put('UserToken', d.token);
                $rootScope.processForward();
                $location.path('/dashboard');
            } else {  // Login error
                $rootScope.setMsg('Login Failed ! UserName or Password is incorrect ');
            }
            
        });
    }
});






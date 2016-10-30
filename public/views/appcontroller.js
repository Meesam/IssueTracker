var issueTrackerApp=angular.module('issueTrackerApp',['ngRoute']);
issueTrackerApp.controller('mainController',['$scope','$rootScope','$http',function($scope,$rootScope,$http){
    $scope.getAllModule=function(){
      $http.get('http://localhost:9000/api/modules')
      .success(function(data, status, headers, config){
          if(data){
              $scope.modules=data.objdata;
              console.log($scope.modules);
          }
      })
      .error(function (data, status, header, config) {
      console.log(data);
    });
    }

  $scope.getAllModule();
}])
issueTrackerApp.registerCtrl('projectdetailcontroller',
 function projectdetailcontroller($scope, $rootScope, $http, $location,$routeParams ,appServices, $cookies,validationService) {
    $scope.isNew=true;
    $scope.project={};
    $scope.PageHeader=$routeParams.ID=="new"? "Add New Project" : "Edit Project";
    $scope.btntext=$routeParams.ID=="new"?"Save":"Update";
    $scope.saveproject=function(){
       // $scope.project.CreateBy=$rootScope.mUser.UserID;
        $scope.project.CreateBy=1;
        if ( angular.isUndefined($scope.project.ProjectTitle) || $scope.project.ProjectTitle == '') { 
              $rootScope.setMsg('Project Title is required'); 
              return;
             }
        if ( angular.isUndefined($scope.project.ProjectDescription) || $scope.project.ProjectDescription == '') { 
              $rootScope.setMsg('Project Description is required'); 
              return;
             }
        appServices.doActionPost({ Token: $rootScope.token, Obj: $scope.project }, 'projects').then(function (d) {
            if (d.Status == 'success') {
                 $location.path('/project');
                //angular.copy($scope.tempuser, $scope.user); $scope.setEdit(false);
                //$rootScope.setMsg('User profile ' + ($scope.tempuser.UserID > 0 ? 'updated' : 'created') + ' successfully', true);
            }
            else $rootScope.setMsg(d.Info);
        });
    }

    $scope.cancelproject=function(){
        $location.path('/project');
    } 

    $scope.getProject=function(){
        appServices.doActionGet({ Token: $rootScope.token, Obj: $scope.project }, 'projects/' + $routeParams.ID).then(function (d) {
            if (d.Status == 'success') {
                 $scope.project=d.objdata[0];
                 $scope.PageHeader=$scope.project.ProjectTitle;
                 $scope.btntext="Update";
            }
            else $rootScope.setMsg(d.Info);
        });
    }
    $scope.getProject();

 });
issueTrackerApp.registerCtrl('issuedetailcontroller',
 function issuedetailcontroller($scope, $rootScope, $http, $location,$routeParams ,appServices, $cookies,validationService) {
    $scope.isNew=true;
    $scope.issue={};
    $scope.PageHeader=$routeParams.ID=="new"? "Add New Issue" : "Edit Issue";
    $scope.btntext=$routeParams.ID=="new"?"Save":"Update";
    $scope.saveIssue=function(){
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

    $scope.cancelissue=function(){
        $location.path('/issues');
    } 

    $scope.getProjectlist=function(){
        appServices.doActionGet({ Token: $rootScope.token, Obj: $scope.issue }, 'project').then(function (d) {
            if (d.Status == 'success') {
                 $scope.projectlist=d.objdata;
            }
            else $rootScope.setMsg(d.Info);
        });
    }
    $scope.getProjectlist();

    $scope.getIssueTypelist=function(){
        appServices.doActionGet({ Token: $rootScope.token, Obj: $scope.issue }, 'issuetype').then(function (d) {
            if (d.Status == 'success') {
                 $scope.issutypelist=d.objdata;
            }
            else $rootScope.setMsg(d.Info);
        });
    }
    $scope.getIssueTypelist();

    $scope.getPrioritylist=function(){
        $scope.prioritylist=[{Id:1,Name:'High'},{Id:2,Name:'Medium'},{Id:3,Name:'Low'}];        
    }
    $scope.getPrioritylist();

     $scope.getServeritylist=function(){
        appServices.doActionGet({ Token: $rootScope.token, Obj: $scope.issue }, 'issuetype').then(function (d) {
            if (d.Status == 'success') {
                 $scope.issutypelist=d.objdata;
            }
            else $rootScope.setMsg(d.Info);
        });
    }
    $scope.getServeritylist();

 });
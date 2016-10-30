issueTrackerApp.registerCtrl('projectscontroller',
 function projectscontroller($scope, $rootScope, $http, $location, appServices, $cookies,validationService) {
    $scope.PageHeader="Projects";
     $scope.getProject = function () {
        appServices.getTable($scope.ProjecTable).then(function (d) {
            if (d.Status == 'success'){ 
            	$scope.ProjecTable.setRows(d); 
            }
            else
             $rootScope.setMsg(d.Info);
        });
    }
    $scope.ProjecTable = getTableObj('ProjectMaster', $rootScope.token, 'ProjectName', 'project', $scope.getProject);
    $scope.getProject();

    $scope.addnew=function(){
    	$location.path('/projects/new');
    }
    
    $scope.Showdetail=function(ProjectId){
    	$location.path('/projects/' + ProjectId);
    }
 });
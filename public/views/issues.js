issueTrackerApp.registerCtrl('issuescontroller',
 function issuescontroller($scope, $rootScope, $http, $location, appServices, $cookies,validationService) {
    $scope.PageHeader="Issues";
     $scope.getIssues = function () {
        appServices.getTable($scope.IssuesTable).then(function (d) {
            if (d.Status == 'success'){ 
            	$scope.IssuesTable.setRows(d); 
            }
            else
                $rootScope.setMsg(d.Info);
        });
    }

    $scope.IssuesTable = getTableObj('ProjectMaster', $rootScope.token, 'ProjectTitle', 'issues', $scope.getIssues);
    $scope.getIssues();

    $scope.addNew=function(){
    	$location.path('/issue/new');
    }
    
    $scope.Showdetail=function(IssueId){
    	$location.path('/issue/' + IssueId);
    }
 });
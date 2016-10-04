issueTrackerApp.registerCtrl('projectdetailcontroller',
 function projectdetailcontroller($scope, $rootScope, $http, $location,$routeParams ,appServices, $cookies,$filter,validationService) {
    $scope.isNew=true;
    $scope.project={};
    $scope.PageHeader=$routeParams.ID=="new"? "Add New Project" : "Edit Project";
    $scope.btntext=$routeParams.ID=="new"?"Save":"Update";


    $scope.saveproject=function(){
        if ( angular.isUndefined($scope.project.ProjectName) || $scope.project.ProjectName == '') {
              $rootScope.setMsg('Project Name is required');
              return;
             }
        if ( angular.isUndefined($scope.project.Description) || $scope.project.Description == '') {
              $rootScope.setMsg('Project Description is required'); 
              return;
             }

        console.log($scope.project);
        appServices.doActionPost({ Token: $rootScope.token, Obj: $scope.project }, 'projects/add').then(function (d) {
            if (d.Status == 'success') {
                 $location.path('/projects');
                //angular.copy($scope.tempuser, $scope.user); $scope.setEdit(false);
                //$rootScope.setMsg('User profile ' + ($scope.tempuser.UserID > 0 ? 'updated' : 'created') + ' successfully', true);
            }
            else $rootScope.setMsg(d.Info);
        });
    }

    $scope.cancelproject=function(){
        $location.path('/projects');
    } 

    $scope.getProject=function(){
        appServices.doActionGet({ Token: $rootScope.token, Obj: $scope.project }, 'projects/' + $routeParams.ID).then(function (d) {
            if (d.Status == 'success') {
                console.log('start date is ' + $filter('date')(d.objdata[0].StartDate,'dd MMM yyyy'));
                $scope.project.StartDate=$filter('date')(d.objdata[0].StartDate,'dd MMM yyyy');
                $scope.project=d.objdata[0];
                 $scope.PageHeader=$scope.project.ProjectTitle;
                 $scope.btntext="Update";
            }
            else $rootScope.setMsg(d.Info);
        });
    }
   if($routeParams.ID != 'new')
    $scope.getProject();

 });
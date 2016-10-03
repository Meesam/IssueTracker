issueTrackerApp.registerCtrl('projectdetailcontroller',
 function projectdetailcontroller($scope, $rootScope, $http, $location,$routeParams ,appServices, $cookies,validationService) {
    $scope.isNew=true;
    $scope.project={};
    $scope.PageHeader=$routeParams.ID=="new"? "Add New Project" : "Edit Project";
    $scope.btntext=$routeParams.ID=="new"?"Save":"Update";




     $scope.clear = function() {
         $scope.project.StartDate = null;
     };

     $scope.inlineOptions = {
         minDate: new Date(),
         showWeeks: true
     };

     $scope.dateOptions = {
         formatYear: 'yy',
         maxDate: new Date(2020, 5, 22),
         minDate: new Date(),
         startingDay: 1
     };

     $scope.toggleMin = function() {
         $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
         $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
     };

     $scope.toggleMin();

     $scope.open1 = function() {
         $scope.popup1.opened = true;
     };

     $scope.open2 = function() {
         $scope.popup2.opened = true;
     };

     $scope.setDate = function(year, month, day) {
         $scope.project.StartDate = new Date(year, month, day);
         $scope.project.EndDate = new Date(year, month, day);
     };

     $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
     $scope.format = $scope.formats[0];
     $scope.altInputFormats = ['M!/d!/yyyy'];

     $scope.popup1 = {
         opened: false
     };

     $scope.popup2 = {
         opened: false
     };

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
        appServices.doActionPost({ Token: $rootScope.token, Obj: $scope.project }, 'projects').then(function (d) {
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
                 $scope.project=d.objdata[0];
                 $scope.PageHeader=$scope.project.ProjectTitle;
                 $scope.btntext="Update";
            }
            else $rootScope.setMsg(d.Info);
        });
    }
   if($routeParams.ID > 0)
    $scope.getProject();

 });
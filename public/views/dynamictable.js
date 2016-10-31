issueTrackerApp.registerCtrl('dynamictablecontroller',
    function dynamictablecontroller($scope, $rootScope, $http, $location, appServices, $cookies,validationService) {
        $scope.personalDetails = [
            {
                fname:'meesam',
                email:[
                    {mail:'a'},
                    {mail:'2'},
                    {mail:'test'}
                ],
                addr:[
                    {add:'Knp'},
                    {add:'del'}]
            }
        ];
        var columns = {};

        var index = 0;

       // console.log('email is ' + $scope.personalDetails[0].email[0].mail);
        $scope.addNew = function(personalDetail){
            $scope.personalDetails.push({
                'fname': "",
                'email': [0],
                'addr': [0],
            });
        };

        $scope.remove = function(){
            var newDataList=[];
            $scope.selectedAll = false;
            angular.forEach($scope.personalDetails, function(selected){
                if(!selected.selected){
                    newDataList.push(selected);
                }
            });
            $scope.personalDetails = newDataList;
        };

        $scope.removeRow=function (idx) {
          $scope.personalDetails.splice(idx,1);
        }
        
        $scope.addMoreEmail=function (idx) {
            $scope.personalDetails[idx].email.push({
                mail:''
            });
        }

        $scope.addMoreAddr=function (idx) {
            $scope.personalDetails[idx].addr.push({
                add:''
            });
        }


        $scope.checkAll = function () {
            if (!$scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }
            angular.forEach($scope.personalDetails, function(personalDetail) {
                personalDetail.selected = $scope.selectedAll;
            });
        };
    });

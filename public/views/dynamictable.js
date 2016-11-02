issueTrackerApp.registerCtrl('dynamictablecontroller',
    function dynamictablecontroller($scope, $rootScope, $http, $location, appServices, $cookies,validationService) {
        $scope.personalDetails = [
            {
                Name: '',
                Email: [{}],
                Address: [{}]
            }
        ];
        var columns = {};
        var index = 0;
        $scope.addNew = function () {
            $scope.personalDetails.push({

                // 'Name': "",
                'Email': [{}],
                'Address': [{}]
            });
        };
        $scope.removeRow = function (idx) {
            $scope.personalDetails.splice(idx, 1);
        }

        $scope.addMoreEmail = function (idx) {
            $scope.personalDetails[idx].Email.push({
                // Email:''
            });
        }

        $scope.addMoreAddr = function (idx) {
            $scope.personalDetails[idx].Address.push({
                // Address:''
            });
        }

        $scope.Save = function () {
            /*
            var email = [], addr = [];
             $scope.dt = {};
            for (var i = 0; i < $scope.personalDetails.length; i++) {
                dt = {Name: $scope.personalDetails[i]};
                for (var j = 0; j < $scope.personalDetails[i].Email.length; j++) {
                    email.push($scope.personalDetails[i].Email[j] + ',');
                }
                for (var k = 0; k < $scope.personalDetails[i].Address.length; k++) {
                    addr.push($scope.personalDetails[i].Address[k] + ',');
                }
                $scope.dt.Email = email;
                $scope.dt.Address = addr;

            }*/

            console.log('save data is ' + $scope.personalDetails);
            var s=$scope.personalDetails;
            var arr = [];
            for (var i = 0; i < $scope.personalDetails.length; i++) {
                arr.push($scope.personalDetails[i].Name);
            }

            /*
             $scope.personalDetails=[{
             Name:'Meesam',
             Email:['a','b','c'],
             Address:['Kanpur','Delhi']
             }];*/
           // var arrayData = JSON.parse("["+JSON.stringify($scope.personalDetails).replace(/(^\{)|(\}$)|("[^"]*[^\\]":)/g,'')+"]")
           // var objs = s.map(JSON.stringify);
            console.log('array is ' + JSON.stringify(arr));
             appServices.doActionPost({ Token: $rootScope.token, Obj: arrayData }, 'userDetails').then(function (d) {
             if (d.Status == 'success') $location.path('/projects');
             else $rootScope.setMsg(d.Info);
             });
        }




        
    });

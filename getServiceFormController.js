app.controller('getServiceFormController', function($scope,$http,$window, formService) {

  $scope.tmpObj = "";

    $scope.getServiceForm = function() {

        //var tmpObj = formService.getShemaInfo();
        formService.getShemaInfo().then(function(tmpObj) {
            console.log("***after getSchema**",tmpObj);
            $scope.schema = (tmpObj.data[0].schemaInfo);
            //var obj1 = JSON.parse($scope.schema);
            console.log("***after schemaName**", $scope.schema);
            $scope.form = (tmpObj.data[0].form);
           // var obj2 = JSON.parse($scope.form);
            console.log("***after form**",$scope.form);

        });

    }

    $scope.getServiceForm();
    
      $scope.onSubmit = function(autoForm) {
          
           console.log("after myForm" ,autoForm);
          var data = {
           
               name : autoForm.name.$modelValue,
				companyname : autoForm.companyname.$modelValue,
                state : autoForm.state.$modelValue,
                language : autoForm.language.$modelValue,
                married : autoForm.items.$modelValue
          
        };
        console.log("data: ",data);
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
        $http.post($window.url2, data,config).success(function(data, status,headers,config) {
            console.log("data after post: ",angular.toJson(data));
        
            
       $scope.name = "";
      $scope.companyname="";
       $scope.state="";
       $scope.language="";
       $scope.married="";
       
       
        })
          
         }
});
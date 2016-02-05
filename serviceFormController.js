app.controller('serviceFormController', function ($scope, $http, formService) {
    
     $scope.name = "";
      $scope.empId="";
       $scope.department="";
       $scope.entity="";
       $scope.skills="";
       
    $scope.saveData = function() {
        
        var serviceData = {
           
               name : $scope.name,
				empId : $scope.empId,
				department : $scope.department,
                entity :$scope.entity,
                skills :$scope.skills
          
        };
        console.log("serviceData: ",angular.toJson(serviceData));
         
        formService.submitData(serviceData);
        
    }
    
    
});
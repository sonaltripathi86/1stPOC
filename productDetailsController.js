 app.controller('productDetailsController', function ($scope, $http,$window) { 
       
     $scope.url= $window.url;
     
       $scope.name = "";
      $scope.mod="";
       $scope.company="";
       $scope.yearofmanufacturing="";
    $scope.submitForm = function() {
        
        var data = {
           
               name : $scope.name,
				model : $scope.mod,
				company : $scope.company,
                yearofmanufacturing :$scope.yearofmanufacturing
          
        };
        console.log("data: ",angular.toJson(data));
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
        $http.post($scope.url, data,config).success(function(data, status,headers,config) {
            //alert("data");
        
            
       $scope.name = "";
      $scope.mod="";
       $scope.company="";
       $scope.yearofmanufacturing="";
        })
         
    } 
    
})
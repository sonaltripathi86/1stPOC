app.controller('updateProductController', function ($scope, $http, service1,$window) {
    
    
     $scope.url= $window.url;
        $scope.name = "";
        $scope.mod="";
        $scope.company="";
        $scope.yearofmanufacturing="";
        $scope.id2="";
        $scope.ServerResponse="";
        $scope.data="";
       
       $scope.car={
           _id:service1.getData()._id,
         name:service1.getData().name,
           model:service1.getData().model,
           company:service1.getData().company,
           yearofmanufacturing:service1.getData().yearofmanufacturing
       }
         $scope.updateForm = function(id2){
           
            $http.put( $scope.url + $scope.car._id,$scope.car)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
            }) 
        }
     $scope.updateForm(service1.getData()._id);
})


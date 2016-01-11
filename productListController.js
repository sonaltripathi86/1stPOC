app.controller('productListController', function ($scope, $http,$window, service1) {
        $scope.details="";
        $scope.name = "";
      $scope.mod="";
       $scope.company="";
       $scope.yearofmanufacturing="";
     // $scope.id2="";
        $scope.data="";
        $scope.getList = function(){
            
            $http.get('http://localhost:3000/api/car/')
            .success(function (data, status, headers, config) {
                console.log("data: ",angular.toJson(data));
                $scope.details = data;
               // console.log(service1);
                })
        };
        $scope.getList();
    
        $scope.delete = function(id){
           
            console.log(id);
           // console.log("****",service1);
            $http.delete('http://localhost:3000/api/car/' + id)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
                 $window.location.reload();
            }) 
        }
        
         $scope.updateID= function(x){
            
           //$scope.id2 = x._id;
            $scope.data=x;
            // console.log(x._id);
             console.log(x);
             service1.setData($scope.data);
        }
        
    })
app.controller('productListController', function ($scope, $http,$window, service1) {
    
     $scope.url= $window.url;
        $scope.details="";
        $scope.name = "";
      $scope.mod="";
       $scope.company="";
       $scope.yearofmanufacturing="";
     // $scope.id2="";
        $scope.data="";
        $scope.getList = function(){
            
            $http.get( $scope.url)
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
            $http.delete( $scope.url + id)
            .success(function (data, status, headers) {
                $scope.ServerResponse = data;
                 $window.location.reload();
                //$scope.reset();
            }) 
        }
        
         $scope.updateID= function(x){
            
           //$scope.id2 = x._id;
            $scope.data=x;
            // console.log(x._id);
             console.log(x);
             service1.setData($scope.data);
        }
        /*
         errorCallback = function(){
        console.log("****");
        


    }
    successCallback = function(data) {
    $scope.details=data;
    console.log("///***data ",details);
   }
   var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
    $scope.reset = function() {
        console.log(config);
        $http.get('http://10.252.50.74:3000/api/contact/', config).then(successCallback);

      };*/
    })
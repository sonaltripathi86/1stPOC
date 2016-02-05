app.controller('tableController', function ($scope, $http) {
     
            $http.get("datasample.json")
            .success(function (response) {
                console.log("JSONdata: ",response);
                $scope.tableData = response;
                console.log("***",$scope.tableData);
                })
      
});
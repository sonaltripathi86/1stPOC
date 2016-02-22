app.controller('autoformController', function ($scope, $http, $window, formService) {

    $scope.url = $window.url4;
    $scope.name = [];
    $scope.data = {};
    $scope.form = [
        {
            "type": "submit",
            "style": "btn-info",
            "title": "Submit"
        }
    ];

    $scope.schema = {
        "type": "object",
        "title": "Comment",
        "properties": {

        }
    };


    $scope.createForm = function (formName) {
        console.log("***auto form", formName);
        $scope.data.name = formName;
        $scope.data.schemaInfo = $scope.schema;
        $scope.data.form = $scope.form;

        var config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        var data = $scope.data;
        console.log("****", data);
        $http.post($scope.url, data, config).success(function (data, status, headers, config) {
            console.log("****Auto form data", data);
             $scope.pullFormName();
        });

    }

    $scope.pullFormName = function () {

        formService.getShemaInfo().then(function (tmpObj) {

            for (var i = 0; i < tmpObj.data.length; i++) {

                $scope.name.push(tmpObj.data[i].name);

            }
            console.log("****forn array from DB", $scope.name);
        })

    }
    
    $scope.pullFormName();
    
    
});
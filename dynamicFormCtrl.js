app.controller('dynamicFormController', function ($scope, $http, $window, formService) {


    $scope.url = $window.url4;

    $scope.fieldName = "";
    $scope.fieldType = "";
    $scope.options = "";
    $scope.fieldSelect = "";
    var optionArray = [];
    $scope.form = [];
    $scope.updatedForm = [];

    formService.getShemaInfo().then(function (tmpObj) {
        $scope.data = tmpObj.data[0];
        console.log("***data display**", $scope.data);
        $scope.form = (tmpObj.data[0].form);
        console.log("***form display**", $scope.form);
        $scope.schema = (tmpObj.data[0].schemaInfo);
    })

    var formSelect = document.getElementById("fieldType");

    var selecteddata = formSelect.options[formSelect.selectedIndex].value;
    $scope.changetextbox = function () {
        if (selecteddata == "TextBox") {
            document.getElementById("options").disable = 1;
        } else {
            document.getElementById("options").disable = 0;
        }
    }


    $scope.submitDynamicForm = function () {

        console.log("***selecteddata", selecteddata);

        if (selecteddata == "TextBox") {
            $scope.formAdd = {
                key: $scope.fieldName,
                fieldType: $scope.fieldType

            };

            var objectAdd = {
                title: $scope.fieldName,
                type: "string"
            };

            $scope.data.schemaInfo.properties[$scope.fieldName] = objectAdd;

            console.log("updated Object", $scope.data.schemaInfo.properties[$scope.fieldName]);


            //$scope.form.push($scope.formAdd);
            $scope.form.splice($scope.form[length - 1], 0, $scope.formAdd);
            console.log("after form update", $scope.form);

            console.log("after Big data update", $scope.data);

            var data = $scope.data;
            console.log("data object while put : ", data);

            $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
                console.log("data: ", angular.toJson(data));

                console.log("submit after push: ", data);
            })
        }
        else if (selecteddata == "Radio") {

            var str = $scope.options;
            var radioOptions = str.split(",");
            console.log("**display options", radioOptions);

            angular.forEach(radioOptions, function (value, key) {
                console.log("***value", value);
                optionArray.push({
                    "value": value,
                    "name": value
                })
            });

            $scope.formAdd = {
                key: $scope.fieldName,
                type: "radios",

                "titleMap": optionArray
            };

            var objectAdd = {
                "enum": radioOptions,
                title: $scope.fieldName,
                type: "string"

            };

            $scope.data.schemaInfo.properties[$scope.fieldName] = objectAdd;
            console.log("***radio schema", $scope.data.schemaInfo.properties[$scope.fieldName]);
            $scope.form.splice($scope.form[length - 1], 0, $scope.formAdd);
            console.log("after form update", $scope.form);

            console.log("after Big data update", $scope.data);

            var data = $scope.data;
            console.log("data object while put : ", data);

            $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
                console.log("data: ", angular.toJson(data));

                console.log("submit after push: ", data);
            })
        }
        else if (selecteddata == "CheckBox") {

            var str = $scope.options;
            var checkOptions = str.split(",");
            console.log("**display options", checkOptions);

            angular.forEach(checkOptions, function (value, key) {
                console.log("***value", value);
                optionArray.push({
                    "value": value,
                    "name": value
                })
            });

            $scope.formAdd = {
                key: $scope.fieldName,
                type: "checkboxes",

                "titleMap": optionArray
            };

            var objectAdd = {
                "items": {
                    "enum": checkOptions,
                    type: "string"
                },
                "key": "checkbox",
                "type": "array"
            };

            $scope.data.schemaInfo.properties[$scope.fieldName] = objectAdd;
            console.log("***radio schema", $scope.data.schemaInfo.properties[$scope.fieldName]);
            $scope.form.splice($scope.form[length - 1], 0, $scope.formAdd);
            console.log("after form update", $scope.form);

            console.log("after Big data update", $scope.data);

            var data = $scope.data;
            console.log("data object while put : ", data);

            $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
                console.log("data: ", angular.toJson(data));

                console.log("submit after push: ", data);
            })
        }
        else if (selecteddata == "Dropdown") {

            $scope.formAdd = {
                key: $scope.fieldName
            };

            console.log("***radio form", $scope.formAdd);
            var str = $scope.options;
            var dropOptions = str.split(",");
            console.log("**display options", dropOptions);
            var objectAdd = {
                "enum": dropOptions,
                title: $scope.fieldName,
                type: "string"

            };

            $scope.data.schemaInfo.properties[$scope.fieldName] = objectAdd;
            console.log("***dropdown schema", $scope.data.schemaInfo.properties[$scope.fieldName]);
            $scope.form.splice($scope.form[length - 1], 0, $scope.formAdd);
            console.log("after form update", $scope.form);

            console.log("after Big data update", $scope.data);

            var data = $scope.data;
            console.log("data object while put : ", data);

            $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
                console.log("data: ", angular.toJson(data));

                console.log("submit after push: ", data);
            })
        }
        $scope.fieldName = "";
        $scope.fieldType = "";
        $scope.options = "";

    }

    $scope.editField = function (formfield) {

        $scope.fieldName = formfield.key;
        console.log($scope.form);

    }

    $scope.update = function (formfield) {
        var formSelect = document.getElementById("fieldType");
        var selecteddata = formSelect.options[formSelect.selectedIndex].value;
        console.log("entered");
        for (var i = 0; i < $scope.form.length; i++) {

            if ($scope.form[i].key == formfield.key) {

                if (selecteddata == "Dropdown") {

                    $scope.updatedForm.push($scope.form[i]);
                    console.log("***updated form", $scope.updatedForm);
                    var str = $scope.options;
                    var dropOptions = str.split(",");
                    console.log("**display options", dropOptions);
                    var objectAdd = {
                        "enum": dropOptions,
                        title: $scope.fieldName,
                        type: "string"

                    };

                    $scope.data.schemaInfo.properties[$scope.fieldName] = objectAdd;

                    var data = $scope.data;
                    console.log("data object while put : ", data);

                    $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
                        console.log("data: ", angular.toJson(data));

                        console.log("submit after push: ", data);
                    })
                }

                else if (selecteddata == "CheckBox") {


                    var str = $scope.options;
                    var checkOptions = str.split(",");
                    console.log("**display options", checkOptions);

                    angular.forEach(checkOptions, function (value, key) {
                        console.log("***value", value);
                        optionArray.push({
                            "value": value,
                            "name": value
                        })
                    });

                    $scope.form[i] = {
                        key: $scope.fieldName,
                        type: "checkboxes",

                        "titleMap": optionArray
                    };

                    var objectAdd = {
                        "items": {
                            "enum": checkOptions,
                            type: "string"
                        },
                        "key": "checkbox",
                        "type": "array"
                    };

                    $scope.data.schemaInfo.properties[$scope.fieldName] = objectAdd;
                    console.log("***radio schema", $scope.data.schemaInfo.properties[$scope.fieldName]);
                    $scope.updatedForm.push($scope.form[i]);
                    console.log("after form update", $scope.form[i]);

                    console.log("after Big data update", $scope.data);

                    var data = $scope.data;
                    console.log("data object while put : ", data);

                    $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
                        console.log("data: ", angular.toJson(data));

                        console.log("submit after push: ", data);
                    })
                }

                else if (selecteddata == "Radio") {


                    var str = $scope.options;
                    var radioOptions = str.split(",");
                    console.log("**display options", radioOptions);

                    angular.forEach(radioOptions, function (value, key) {
                        console.log("***value", value);
                        optionArray.push({
                            "value": value,
                            "name": value
                        })
                    });

                    $scope.form[i] = {
                        key: $scope.fieldName,
                        type: "radios",

                        "titleMap": optionArray
                    };

                    var objectAdd = {
                        "enum": radioOptions,
                        title: $scope.fieldName,
                        type: "string"

                    };

                    $scope.data.schemaInfo.properties[$scope.fieldName] = objectAdd;
                    console.log("***radio schema", $scope.data.schemaInfo.properties[$scope.fieldName]);
                    $scope.updatedForm.push($scope.form[i]);
                    console.log("after form update", $scope.form[i]);

                    console.log("after Big data update", $scope.data);

                    var data = $scope.data;
                    console.log("data object while put : ", data);

                    $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
                        console.log("data: ", angular.toJson(data));

                        console.log("submit after push: ", data);
                    })
                }
            }
            else {
                $scope.updatedForm.push($scope.form[i]);
            }
        }

    }

    $scope.deleteField = function (formfield) {

        console.log(formfield);
        var index = $scope.form.indexOf(formfield);
        $scope.form.splice(index, 1);
        console.log("****deleted", $scope.form);

        var data = $scope.data;
        console.log("data object while put : ", data);

        $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
            console.log("data: ", angular.toJson(data));

            console.log("submit after push: ", data);
        })
    }

    $scope.pushDataUp = function (formfield) {
        var form=$scope.form;
        
        var index = $scope.form.indexOf(formfield);
        console.log("****", index);
       
            var temp = form[index];
            form[index] = form[index-1];
           form[index-1] = temp;
           
       console.log("swapped array****",form);
       
       var data = $scope.data;
        console.log("data object while put : ", data);

        $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
            console.log("data: ", angular.toJson(data));

            console.log("submit after push: ", data);
        })
    }

    $scope.pushDataDown = function (formfield) {

         var form=$scope.form;
        var index = $scope.form.indexOf(formfield);
        console.log("****", index);
       
            var temp = form[index];
            form[index] = form[index+1];
           form[index+1] = temp;
           
       console.log("swapped array****",form);
       
       var data = $scope.data;
        console.log("data object while put : ", data);

        $http.put($scope.url + $scope.data._id, data).success(function (data, status, headers) {
            console.log("data: ", angular.toJson(data));

            console.log("submit after push: ", data);
        })
    }
});
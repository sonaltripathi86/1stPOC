app.controller('formController', function($scope,$window,$http) {
    $scope.url= $window.url2;
    
    $scope.schema = {
        "type": "object",
        "title": "Comment",
        "properties": {
            "name": {
                "title": "Name",
                "type": "string"
            },
            "companyname": {
                "title": "CompanyName",
                "type": "string",
            },

            "state": {
                "title": "State",
                "type": "string",
                "enum": ["Maharashtra", "Delhi", "Uttar Pradesh", "Punjab", "Karnataka"]
            },

            "language": {
                "title": "Language",
                "type": "string",
                "enum": ["English","Hindi","French"]
      
            },
            
           "married": {
     
      "type": "array",
      "key" : "check box",
      "items": {
        "type": "string",
        "enum": [
          "a"
        ]
      }
    }

        }
    };

    $scope.form = [

        {"key":"name","type":"string"},
        {"key":"companyname","type":"string"},
       {"key":"state"},
   
 {
     
      "key": "language",
      "type": "radios",
      "titleMap": [
        { "value": "English",
         "name": "english"
         },
        { "value": "Hindi",
         "name": "hindi"
          },
        { "value": "French",
         "name": "french" 
         }
      ]
    },
    
    {
    "key": "items",
    "type": "checkboxes",
    "titleMap": [
      {
        "value": "a",
        "name": "Married"
      }
    ]
  },
        {
            "type": "submit",
            "style": "btn-info",
            "title": "Submit"
        }
    ];


    $scope.onSubmit = function(myForm) {
          
           console.log("after myForm" ,myForm);
          var data = {
           
               name : myForm.name.$modelValue,
				companyname : myForm.companyname.$modelValue,
                state : myForm.state.$modelValue,
                language : myForm.language.$modelValue,
                married : myForm.items.$modelValue
          
        };
        console.log("data object: ",data);
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
        $http.post($scope.url, data,config).success(function(data, status,headers,config) {
            console.log("data: ",angular.toJson(data));
         })
            
       $scope.name = "";
      $scope.companyname="";
       $scope.state="";
       $scope.language="";
       $scope.married="";
       
        
       
         }

});
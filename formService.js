app.service('formService', function($http,$window) {
    //var shared_data="";
    
   return {
       submitData : submitData,
        getShemaInfo : getShemaInfo,
        data : {} 
        
    }



    /*function setData(data) {
        _data = data;
        console.log("**** In service set***",_data);
       // return shared_data;
    }*/
    
    function submitData(serviceData) {
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }  
        var  data = serviceData;
        $http.post($window.url3, data,config).success(function(data, status,headers,config) {
    
      console.log("serviceData: ",angular.toJson(data));
      
        })
     
    }
    
    function getShemaInfo() {
      responseData = $http.get( $window.url4)
            .success(function (data, status, headers, config) {
               // console.log("data****: ",angular.toJson(data));
                
                //return angular.toJson(data);
               //return data;
                })
                
                return responseData;
    }
    
    
});
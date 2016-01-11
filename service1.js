app.service('service1', function() {
    //var shared_data="";
   return {
        setData : setData,
        getData : getData,
        shared_data : {} 
    }

    function setData(data) {
        shared_data = data;
        console.log(shared_data);
       // return shared_data;
    }

    function getData() {
        return shared_data;
    } 
})
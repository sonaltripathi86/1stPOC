var app =angular.module("website", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider)
    {
      
   
    
    $stateProvider
        
        .state('Products', {
            url: '/Products',
    templateUrl: 'products.html'
        })
        
        .state('AboutUs', {
             url: '/AboutUs',
            templateUrl: 'about_Us.html'  
        })
    
    .state('Services', {
             url: '/Services',
            templateUrl: 'services.html'  
        })
    .state('ProductDetails', {
             url: '/ProductDetails',
            templateUrl: 'productDetails.html',
            controller: 'productDetailsController'
        })
    .state('ProductList', {
             url: '/ProductList',
            templateUrl: 'productList.html',
        controller: 'productListController'
        })
    .state('UpdateProduct', {
             url: '/UpdateProduct',
            templateUrl: 'updateProduct.html',
        controller: 'updateProductController'
        });
   
     $urlRouterProvider.otherwise('/Products');
    });


  
   
    
    
    
var url = 'http://localhost:3000/api/car/';
var url2 = 'http://localhost:3000/api/company/';
var url3 = 'http://localhost:3000/api/employee/';
var url4 = 'http://localhost:3000/api/schemaForm/';

var app =angular.module("website", ['ui.router','schemaForm','ngSanitize']);


app.config(function($stateProvider, $urlRouterProvider)
    {
      
   
    
    $stateProvider
        
        .state('Products', {
            url: '/Products',
    templateUrl: 'products.html',
        controller: 'prodController',
        directive: 'modal'
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
            controller: 'productDetailsController',
             directive:'productDetailsDirective'
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
        })
    .state('SchemaForm', {
             url: '/SchemaForm',
            templateUrl: 'schemaForm.html' ,
            controller: 'formController'
        })
        .state('ServiceForm', {
             url: '/ServiceForm',
            templateUrl: 'serviceForm.html' ,
            controller: 'serviceFormController'
        })
        .state('DynamicForm', {
             url: '/DynamicForm',
            templateUrl: 'dynamicForm.html' ,
            controller: 'dynamicFormController'
        })
        .state('GetFormData', {
             url: '/GetFormData',
            templateUrl: 'getFormData.html' ,
            controller: 'getServiceFormController'
        })
        .state('GetJSONTable', {
             url: '/GetJSONTable',
            templateUrl: 'table.html' ,
            controller: 'tableController'
        })
        .state('CreateAutoForm', {
             url: '/CreateAutoForm',
            templateUrl: 'autoform.html' ,
            controller: 'autoformController'
        });
   
     $urlRouterProvider.otherwise('/Products');
    });


  
   
    
    
    
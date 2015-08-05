(function(){
  
  var app = angular.module('starter.category');

  app.provider('CategoryService', function() { //Add any service for dependency in the function parameters
    //Variables go here
    return {
      $get:['$q','CategoryDataService',
      function($q, CategoryDataService) {


        var _getAll = function(){
          return CategoryDataService.getAll();
        };

        var _getBrandsById = function(sub_cat_id){
          return CategoryDataService.getBrandsById({id: sub_cat_id});
        };

         var _getJobRoles = function(){
          return CategoryDataService.getJobRoles();
        }

        return {
          getAll: _getAll,
          getBrandsById: _getBrandsById,
          getJobRoles: _getJobRoles
        };
      }
    ]};
  });
})();
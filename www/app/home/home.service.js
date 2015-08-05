(function(){
  
  var app = angular.module('starter.home');

  app.provider('HomeService', function() { //Add any service for dependency in the function parameters
    //Variables go here
    return {
      $get:['$q','HomeDataService',
      function($q, HomeDataService) {


        var _getAll = function(){
          return HomeDataService.getAll();
        };

        return {
          getAll: _getAll
        };
      }
    ]};
  });
})();
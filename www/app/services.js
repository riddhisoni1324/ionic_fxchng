(function(){
  
  var app = angular.module('starter');

  app.provider('AppService', function() { //Add any service for dependency in the function parameters
    //Variables go here
    return {
      $get:['$q',
      function($q) {


        var _fun = function(){

        };

        return {
          fun: _fun
        };
      }
    ]};
  });
})();
(function(){
  
  var app = angular.module('starter.Home');

  app.factory('HomeDataService', function($resource, REST_BASE_URL) {
    var base_url = REST_BASE_URL;
    return $resource(base_url + '/:type', {
      id: '@id'
    },{
      getAll:{
          method:'GET',
          params:{
          type:''
        },
        isArray:true
      }
    });

  });
})();
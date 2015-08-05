(function(){
  
  var app = angular.module('starter.category');

  app.factory('CategoryDataService', function($resource, REST_BASE_URL) {
    var base_url = REST_BASE_URL;
    return $resource(base_url + '/categories/:type/:id', {
      id: '@id'
    },{
      getAll:{
          method:'GET',
          params:{
          type:'index.json'
        },
        isArray:false
      },

      getBrandsById:{
          method:'GET',
          params:{
            type : 'get_brands'
        },
        isArray:false
      },
      getJobRoles: {
        method:'GET',
        params:{
            type : 'get_roles.json'
        },
        isArray:false
      }
    });

  });
})();
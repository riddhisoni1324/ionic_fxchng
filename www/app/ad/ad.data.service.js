(function(){
  
  var app = angular.module('starter.ad');

  app.factory('AdDataService', function($resource, REST_BASE_URL) {
    var base_url = REST_BASE_URL;
    return $resource(base_url + '/categories/:type/:id', {
      id: '@id'
    },{
      getAll:{
          method:'GET',
          params:{
            type : 'sub_category_items'
        },
        isArray:false
      },

      getById:{
          method:'GET',
          params:{
            type : 'product_detail'
        },
        isArray:false
      },

      getMutualFriend:{
          method:'GET',
          params:{
            type : 'mutual_friend.json'
        },
        isArray:false
      },

      getCommonFriend:{
          method:'GET',
          params:{
            type : 'common_friend.json'
        },
        isArray:false
      },


    });

  });
})();


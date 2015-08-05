(function(){
  
  var app = angular.module('starter.ad');

  app.provider('AdService', function() { 
    return {
      $get:['$q','AdDataService',
      function($q, AdDataService) {

        var _getAll = function(sub_cat_id){
          return AdDataService.getAll({id: sub_cat_id});
        };

        var _getById = function(ad_id){
          return AdDataService.getById({id: ad_id});
        };

        var _getMutualFriend = function(){
          return AdDataService.getMutualFriend();
        };

        var _getCommonFriend = function(){
          return AdDataService.getCommonFriend();
        };


        return {
          getAll: _getAll,
          getById: _getById,
          getMutualFriend: _getMutualFriend,
          getCommonFriend: _getCommonFriend,
        };
      }
    ]};
  });
})();
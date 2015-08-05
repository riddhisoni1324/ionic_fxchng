(function() {

	var app = angular.module('starter.ad');
	app.controller('AdDetailController', ['$scope','AdService','$location','$stateParams', function($scope,AdService,$location,$stateParams) {
	  	  var ad_id = $stateParams.ad_id;
	  	  
		  AdService.getById(ad_id+'.json').$promise.then(function(response){
	  	  $scope.ad_detail=response.AdPost;
        console.log(response);
      	
		}, function(err){	
			console.log(err);
		})

    //--get common friend
    AdService.getCommonFriend().$promise.then(function(response){
       console.log(response);
       $scope.commonfriend = response.FbFriend;
       console.log($scope.commonfriend);

	    
	  },function(err){
	  	console.log(err);
	  })


		 $scope.navigation_edit = function(ad_id_edit) {
		 		console.log('brfor'+ad_id_edit);
		    $location.path('/ad-edit/'+ad_id_edit);
		    console.log('ad-edit');   
		  };


	 
  	
	}]);
   
	
})();


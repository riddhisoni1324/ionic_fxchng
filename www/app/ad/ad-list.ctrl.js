(function() {

	var app = angular.module('starter.ad');
	app.controller('AdListController', ['$scope','AdService','$stateParams','$location', function($scope,AdService,$stateParams,$location) {
	  console.log('ad list');
	  var subcat_id = $stateParams.sub_cat_id;

	  //--get sub cat vise ad
	  AdService.getAll(subcat_id+'.json').$promise.then(function(response){
		console.log(response);
		$scope.ads = response.AdPost.rows;
				
	}, function(err){	
		console.log(err);
	})

      //--get mutual friend
	  AdService.getMutualFriend().$promise.then(function(response){
       console.log(response);
       $scope.mutualfriend = response.User;
       console.log($scope.mutualfriend);
	  },function(err){
	  	console.log(err);
	  })

	$scope.navigate = function(ad_id) {
		    $location.path('/ad-detail/'+ad_id);
		  };

	 $scope.navigation_home = function() {
		    $location.path('/app/home');
		  };
	  
     
  	
	}]);
   
	
})();


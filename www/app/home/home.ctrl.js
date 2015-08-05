(function() {

	var app = angular.module('starter.home');
    app.controller('HomeController',['$scope','CategoryService', '$location','$cordovaContacts', function($scope,CategoryService,$location,$http, REST_BASE_URL,$cordovaContacts) { 
   	$scope.categories = [];
   	$scope.sub_categories = [];
   
	CategoryService.getAll().$promise.then(function(response){
		var ItemTypes = response.ItemType;
	
		$scope.categories = [];
		for (var i = 0; i < ItemTypes.length; i++) {

			$scope.categories.push(ItemTypes[i].ItemType.name);

			for(var j=0;j<1;j++)
			{
				$scope.sub_categories.push(ItemTypes[i].ItemCategory[j].name);
			}
		};
	}, function(err){	
		console.log(err);
	})


	 $scope.nav_adpost = function(sub_cat_id) {
		       $location.path('/ad-post');
		     };

/*	$scope.addContact = function() {
    $cordovaContacts.save($scope.contactForm).then(function(result) {
      // Contact saved
      console.log('sucs');
    }, function(err) {
      // Contact error
      console.log('err');
    });
  };
*/
         $scope.getContacts = function() {
  	     console.log('sucs');
    
          $scope.phoneContacts = [];
          function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
              var contact = contacts[i];
              $scope.phoneContacts.push(contact);
            }
              console.log('sucs....');
    
          };
          function onError(contactError) {
            alert(contactError);
              console.log('err');
    
          };
          var options = {};
          options.multiple = true;
          $cordovaContacts.find(options).then(onSuccess, onError);
        };	

    $scope.getContactList = function() {
    $cordovaContacts.find({filter: ''}).then(function(result) {
        $scope.contacts = result;
    }, function(error) {
        console.log("ERROR: " + error);
    });
    };	     


$scope.createContact = function() {
    $cordovaContacts.save({"displayName": "Steve Jobs"}).then(function(result) {
        console.log(JSON.stringify(result));
    }, function(error) {
        console.log(error);
    });
}
	

    }])

	app.controller('AppController', ['$scope', '$location', '$ionicActionSheet', '$ionicSideMenuDelegate','CategoryService', function($scope, $location, $ionicActionSheet, $ionicSideMenuDelegate, CategoryService) {
	  
	$scope.categories = [];
   	$scope.sub_categories = [];
   	
			CategoryService.getAll().$promise.then(function(response){
				var ItemTypes = response.ItemType;
				console.log(ItemTypes);
				for (var i = 0; i < ItemTypes.length; i++) {
					var obj = {
						category: ItemTypes[i].ItemType,
						sub_cat: ItemTypes[i].ItemCategory,
					}
					$scope.categories.push(obj);
				};
		

			}, function(err){	
				console.log(err);
			})

 		  $scope.toggleGroup = function(group) {
		    if ($scope.isGroupShown(group)) {
		      $scope.shownGroup = null;
		    } else {
		      $scope.shownGroup = group;
		    }
		  };
		  $scope.isGroupShown = function(group) {
		    return $scope.shownGroup === group;
		  };
		  	/*go to sub cat*/

		     $scope.navigate = function(sub_cat_id) {
		       $location.path('/ad-list/' + sub_cat_id);
		     };


  	
	}]);
   
	
})();


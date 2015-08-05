	(function() {

		var app = angular.module('starter.ad');
		app.controller('AdPostController', ['$scope','AdService','$location','$stateParams','CategoryService', function($scope,AdService,$location,$stateParams,CategoryService) {
		  	  
			$scope.ad_detail = {};
			$scope.ad_detail_final = [];
			$scope.years = [];

			$scope.categories = [];
			// Get all categories
			CategoryService.getAll().$promise.then(function(response){
				console.log(response);
				console.log(response.ItemType);
				var ItemTypes = response.ItemType;
				console.log(ItemTypes);
				for (var i = 0; i < ItemTypes.length; i++) {
					var obj = {
						category: ItemTypes[i].ItemType,
						sub_cat: ItemTypes[i].ItemCategory,
					}
					$scope.categories.push(obj);
				};
				console.log($scope.categories);
			}, function(err){	
				console.log(err);
			})


			// IF EDIT MODE
			if($stateParams.ad_id !== undefined){
				var ad_id = $stateParams.ad_id;
				AdService.getById(ad_id+'.json').$promise.then(function(response){
					console.log(response);
			  		angular.extend($scope.ad_detail,response.AdPost);
		        	console.log($scope.ad_detail);
		        	for (var i = 0; i < $scope.categories.length ; i++) {
		        		if($scope.categories[i].category.id === $scope.ad_detail.item_type.id){
		        			$scope.ad_detail.category = $scope.categories[i];
		        		}
		        	};
		        	for (var j = 0; j < $scope.ad_detail.category.sub_cat.length ; j++) {
		        		if($scope.ad_detail.category.sub_cat[j].id === $scope.ad_detail.item_category.id){
		        			$scope.ad_detail.sub_cat = $scope.ad_detail.category.sub_cat[j];
		        		}
		        	};

		        	$scope.ad_detail.brand.name=response.AdPost.brand.name;
		        	$scope.getBrands = function(sub_cat_id){
				console.log($scope.ad_detail.sub_cat.name);
				if($scope.ad_detail.sub_cat.name === 'Mobile Phones' || 
				   $scope.ad_detail.sub_cat.name === 'Mobile Accessories' ||
				   $scope.ad_detail.sub_cat.name === 'Tablets' ||
				   $scope.ad_detail.sub_cat.name === 'Cars' ||
				   $scope.ad_detail.sub_cat.name === 'Motorcycles - Scooters' ||
				   $scope.ad_detail.sub_cat.name === 'Laptops, Desktops' ||
				   $scope.ad_detail.sub_cat.name === 'Computer Accessories' ||
				   $scope.ad_detail.sub_cat.name === 'Cameras & Accessories' ||
				   $scope.ad_detail.sub_cat.name === 'Video Game - Consoles' ||
				   $scope.ad_detail.sub_cat.name === 'Audio, Video, TV' )
				{
				    CategoryService.getBrandsById(sub_cat_id+'.json').$promise.then(function(response){
					console.log(response);
					$scope.brands = response.AdPost.rows[0].doc.brand;
					}, function(err){	
					console.log(err);
				})	
				}
				else
				{
					console.log('not getting brand');
				}	
				
			}


				}, function(err){	
					console.log(err);
				})
			}

			$scope.print=function(){
				//console.log($scope.ad_detail);
				$scope.ad_detail.item_type = {};
				$scope.ad_detail.item_category = {};
				$scope.ad_detail.item_type.name = $scope.ad_detail.category.category.name;
				$scope.ad_detail.item_type.id = $scope.ad_detail.category.category.id; 
				delete $scope.ad_detail.category;
				$scope.ad_detail.item_category.name = $scope.ad_detail.sub_cat.name;
				$scope.ad_detail.item_category.id = $scope.ad_detail.sub_cat.id;
				delete $scope.ad_detail.sub_cat;


					
         		console.log($scope.ad_detail);
			};

			

	     	// Get Job Roles
	     	CategoryService.getJobRoles().$promise.then(function(response){
				console.log(response);
				$scope.roles = response.AdPost.role;

			}, function(err){	
				console.log(err);
			})
	   		
	   		
			// Get all brands
			$scope.getBrands = function(sub_cat_id){
				console.log($scope.ad_detail.sub_cat.name);
				if($scope.ad_detail.sub_cat.name === 'Mobile Phones' || 
				   $scope.ad_detail.sub_cat.name === 'Mobile Accessories' ||
				   $scope.ad_detail.sub_cat.name === 'Tablets' ||
				   $scope.ad_detail.sub_cat.name === 'Cars' ||
				   $scope.ad_detail.sub_cat.name === 'Motorcycles - Scooters' ||
				   $scope.ad_detail.sub_cat.name === 'Laptops, Desktops' ||
				   $scope.ad_detail.sub_cat.name === 'Computer Accessories' ||
				   $scope.ad_detail.sub_cat.name === 'Cameras & Accessories' ||
				   $scope.ad_detail.sub_cat.name === 'Video Game - Consoles' ||
				   $scope.ad_detail.sub_cat.name === 'Audio, Video, TV' )
				{
				    CategoryService.getBrandsById(sub_cat_id+'.json').$promise.then(function(response){
					console.log(response);
					$scope.brands = response.AdPost.rows[0].doc.brand;
					}, function(err){	
					console.log(err);
				})	
				}
				else
				{
					console.log('not getting brand');
				}	
				
			}


			for(var i=1990;i< (new Date().getFullYear());i++){
				$scope.years.push(i);
			}
			

			 
	  	
		}]);
	   
		
	})();


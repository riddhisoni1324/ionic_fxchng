(function() {

	var app = angular.module('starter.ad', []);
  /*'starter', ['ionic', 'starter.controllers']*/

	//Run & Config Blocks

	//Constants

	//Routes


	app.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
		$ionicConfigProvider.backButton.icon('');

		$stateProvider


		// $stateProvider.state('app', {
		// 	url: "/app",
		// 	abstract: true,
		// 	templateUrl: "app/home/menu.tpl.html",
		// 	controller: "AppController"
			
		// })
		 .state('ad-post', {
		 	url: "/ad-post",
			templateUrl: "app/ad/ad-post.tpl.html",
			controller: "AdPostController"
	        
		})

				
		 .state('ad-list', {
		 	url: "/ad-list/:sub_cat_id",
			templateUrl: "app/ad/ad-list.tpl.html",
			controller: "AdListController"
	        
		})

	 	 .state('ad-edit', {
	 	url: "/ad-edit/:ad_id",
		templateUrl: "app/ad/ad-post.tpl.html",
		controller: "AdPostController"
	        
		})


		 .state('ad-detail', {
		 	url: "/ad-detail/:ad_id",
			templateUrl: "app/ad/ad-detail.tpl.html",
			controller: "AdDetailController"
	        
		});



		 $urlRouterProvider.otherwise('app/home');

	});

})();


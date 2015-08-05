(function() {

	var app = angular.module('starter.category', []);
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

				
		// .state('app.home', {
		// 	url: "/home",
		// 	views: {
  //           'menuContent': {
		// 	templateUrl: "app/home/homepage.tpl.html",
		// 	controller: "HomeController"
	 //         	}
	 //        }
		// });


		 $urlRouterProvider.otherwise('app/home');

	});

})();

